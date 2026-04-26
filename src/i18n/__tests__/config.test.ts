import { DEFAULT_LOCALE, isLocale, resolveLocale } from '../config'

describe('isLocale', () => {
  it('accepts supported locales', () => {
    expect(isLocale('th')).toBe(true)
    expect(isLocale('en')).toBe(true)
  })

  it('rejects unsupported values', () => {
    expect(isLocale('fr')).toBe(false)
    expect(isLocale('')).toBe(false)
    expect(isLocale(null)).toBe(false)
    expect(isLocale(undefined)).toBe(false)
    expect(isLocale(42)).toBe(false)
  })
})

describe('resolveLocale', () => {
  it('uses query value when valid (overrides cookie)', () => {
    expect(resolveLocale('en', 'th')).toBe('en')
    expect(resolveLocale('th', 'en')).toBe('th')
  })

  it('falls back to cookie when query is missing or invalid', () => {
    expect(resolveLocale(null, 'en')).toBe('en')
    expect(resolveLocale(undefined, 'th')).toBe('th')
    expect(resolveLocale('fr', 'en')).toBe('en')
  })

  it('falls back to default locale when neither query nor cookie is valid', () => {
    expect(resolveLocale(null, null)).toBe(DEFAULT_LOCALE)
    expect(resolveLocale('fr', 'de')).toBe(DEFAULT_LOCALE)
    expect(resolveLocale(undefined, undefined)).toBe(DEFAULT_LOCALE)
  })

  it('default locale is th', () => {
    expect(DEFAULT_LOCALE).toBe('th')
  })
})
