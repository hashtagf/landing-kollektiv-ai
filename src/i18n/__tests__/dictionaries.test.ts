import th from '../dictionaries/th'
import en from '../dictionaries/en'
import { dictionaries } from '../dictionaries'
import { LOCALES } from '../config'

type Shape =
  | { kind: 'leaf' }
  | { kind: 'array'; length: number }
  | { kind: 'object'; keys: Record<string, Shape> }

function describeShape(value: unknown): Shape {
  if (Array.isArray(value)) {
    return { kind: 'array', length: value.length }
  }
  if (value && typeof value === 'object') {
    const keys: Record<string, Shape> = {}
    for (const key of Object.keys(value as Record<string, unknown>)) {
      keys[key] = describeShape((value as Record<string, unknown>)[key])
    }
    return { kind: 'object', keys }
  }
  return { kind: 'leaf' }
}

describe('dictionaries', () => {
  it('exports an entry for every supported locale', () => {
    for (const locale of LOCALES) {
      expect(dictionaries[locale]).toBeDefined()
    }
  })

  it('TH and EN have identical key structures (no missing translations)', () => {
    expect(describeShape(en)).toEqual(describeShape(th))
  })

  it('every leaf string is non-empty in both dictionaries', () => {
    const visit = (node: unknown, path: string, locale: string) => {
      if (typeof node === 'string') {
        expect({ locale, path, value: node }).toEqual(
          expect.objectContaining({ value: expect.stringMatching(/.+/) }),
        )
        return
      }
      if (Array.isArray(node)) {
        node.forEach((item, i) => visit(item, `${path}[${i}]`, locale))
        return
      }
      if (node && typeof node === 'object') {
        for (const [key, val] of Object.entries(node as Record<string, unknown>)) {
          visit(val, path ? `${path}.${key}` : key, locale)
        }
      }
    }
    visit(th, '', 'th')
    visit(en, '', 'en')
  })
})
