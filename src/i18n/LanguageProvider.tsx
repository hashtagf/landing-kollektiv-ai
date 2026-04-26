'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  LANG_COOKIE_MAX_AGE,
  LANG_COOKIE_NAME,
  LANG_QUERY_PARAM,
  cleanInvalidLangParam,
  isLocale,
  resolveLocale,
  type Locale,
} from './config'
import { dictionaries } from './dictionaries'
import type { Dictionary } from './types'

type LanguageContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie
    .split('; ')
    .map((entry) => entry.split('='))
    .find(([key]) => key === name)
  return match ? decodeURIComponent(match[1] ?? '') : null
}

function writeCookie(name: string, value: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax`
}

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    const queryValue = searchParams?.get(LANG_QUERY_PARAM) ?? null
    const cookieValue = readCookie(LANG_COOKIE_NAME)
    const resolved = resolveLocale(queryValue, cookieValue)

    if (resolved !== locale) {
      setLocaleState(resolved)
    }

    if (cookieValue !== resolved) {
      writeCookie(LANG_COOKIE_NAME, resolved)
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = resolved
    }

    const cleanedUrl = cleanInvalidLangParam(searchParams?.toString() ?? '', pathname)
    if (cleanedUrl) {
      router.replace(cleanedUrl, { scroll: false })
    }
  }, [searchParams, locale, pathname, router])

  const setLocale = useCallback(
    (next: Locale) => {
      if (!isLocale(next)) return
      setLocaleState(next)
      writeCookie(LANG_COOKIE_NAME, next)
      if (typeof document !== 'undefined') {
        document.documentElement.lang = next
      }
      const params = new URLSearchParams(searchParams?.toString() ?? '')
      params.set(LANG_QUERY_PARAM, next)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

export function useT(): Dictionary {
  return useLanguage().t
}
