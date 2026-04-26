'use client'

import clsx from 'clsx'
import { LOCALES, type Locale } from '@/i18n/config'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.switcher.label}
      className="inline-flex rounded-full border border-purple-500/30 bg-gray-950/70 backdrop-blur-md p-1 shadow-lg"
    >
      {LOCALES.map((code: Locale) => {
        const isActive = code === locale
        const display = code === 'th' ? t.switcher.th : t.switcher.en
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            aria-label={`${t.switcher.ariaSwitchTo} ${display}`}
            className={clsx(
              'px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/60',
              isActive
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow'
                : 'text-gray-300 hover:text-white',
            )}
          >
            {display}
          </button>
        )
      })}
    </div>
  )
}
