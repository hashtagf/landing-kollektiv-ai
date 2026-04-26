import { cleanInvalidLangParam } from '../config'

describe('cleanInvalidLangParam (LanguageProvider URL-cleanup branch)', () => {
  it('returns null when no lang param is present', () => {
    expect(cleanInvalidLangParam('', '/')).toBeNull()
    expect(cleanInvalidLangParam('foo=bar', '/')).toBeNull()
  })

  it('returns null when the lang param is a supported locale', () => {
    expect(cleanInvalidLangParam('lang=th', '/')).toBeNull()
    expect(cleanInvalidLangParam('lang=en&utm=x', '/path')).toBeNull()
  })

  it('strips an invalid lang param while preserving other params', () => {
    expect(cleanInvalidLangParam('lang=fr', '/')).toBe('/')
    expect(cleanInvalidLangParam('lang=fr&utm=x', '/path')).toBe('/path?utm=x')
  })

  it('strips an empty lang value the same as an invalid one', () => {
    expect(cleanInvalidLangParam('lang=&utm=x', '/path')).toBeNull()
  })

  it('preserves the pathname exactly when stripping is needed', () => {
    expect(cleanInvalidLangParam('lang=de', '/about/team')).toBe('/about/team')
  })
})
