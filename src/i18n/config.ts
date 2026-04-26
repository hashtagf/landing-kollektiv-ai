export const LOCALES = ['th', 'en'] as const
export const DEFAULT_LOCALE: Locale = 'th'

export const LANG_COOKIE_NAME = 'lang'
export const LANG_QUERY_PARAM = 'lang'
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export type Locale = (typeof LOCALES)[number]

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

export function resolveLocale(
  queryValue: string | null | undefined,
  cookieValue: string | null | undefined,
): Locale {
  if (isLocale(queryValue)) return queryValue
  if (isLocale(cookieValue)) return cookieValue
  return DEFAULT_LOCALE
}

export function cleanInvalidLangParam(
  queryString: string,
  pathname: string,
): string | null {
  const params = new URLSearchParams(queryString)
  const queryValue = params.get(LANG_QUERY_PARAM)
  if (!queryValue || isLocale(queryValue)) return null
  params.delete(LANG_QUERY_PARAM)
  const qs = params.toString()
  return `${pathname}${qs ? `?${qs}` : ''}`
}
