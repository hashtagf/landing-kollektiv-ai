'use client'

import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4 md:p-6">
      <LanguageSwitcher />
    </header>
  )
}
