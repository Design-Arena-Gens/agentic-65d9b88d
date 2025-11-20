'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {useState} from 'react';

const languages = [
  {code: 'en', name: 'EN', flag: '🇬🇧'},
  {code: 'ru', name: 'RU', flag: '🇷🇺'},
  {code: 'uz', name: 'UZ', flag: '🇺🇿'}
];

export default function LanguageSwitcher({locale, isScrolled}: {locale: string; isScrolled: boolean}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  const currentLang = languages.find(l => l.code === locale) || languages[1];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
          isScrolled ? 'text-dark hover:bg-gray-lightest' : 'text-white hover:bg-white/10'
        }`}
      >
        <span>{currentLang.flag}</span>
        <span className="font-medium">{currentLang.name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={switchLocale(lang.code)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 px-4 py-3 hover:bg-gray-lightest transition-colors ${
                locale === lang.code ? 'bg-primary/10 text-primary' : 'text-dark'
              }`}
            >
              <span>{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
