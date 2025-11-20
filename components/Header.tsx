'use client';

import {useState, useEffect} from 'react';
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({locale}: {locale: string}) {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: t('solutions'),
      href: `/${locale}/solutions`,
      submenu: [
        { label: t('cashSolutions'), href: `/${locale}/cash-solutions` },
        { label: t('adm'), href: `/${locale}/adm` }
      ]
    },
    { label: t('import'), href: `/${locale}/import-substitution` },
    {
      label: t('services'),
      href: `/${locale}/services`,
      submenu: [
        { label: t('development'), href: `/${locale}/development` },
        { label: t('consulting'), href: `/${locale}/consulting` }
      ]
    },
    {
      label: t('about'),
      href: `/${locale}/about`,
      submenu: [
        { label: t('clients'), href: `/${locale}/clients` },
        { label: t('partners'), href: `/${locale}/partners` }
      ]
    },
    { label: t('contacts'), href: `/${locale}/contacts` }
  ];

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FB</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-dark' : 'text-white'}`}>
              Finbridge
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subitem, subidx) => (
                      <Link
                        key={subidx}
                        href={subitem.href}
                        className="block px-4 py-3 text-dark hover:bg-gray-lightest transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher locale={locale} isScrolled={isScrolled} />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-dark' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, idx) => (
                <div key={idx} className="mb-2">
                  <Link
                    href={item.href}
                    className="block py-2 text-dark hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subitem, subidx) => (
                        <Link
                          key={subidx}
                          href={subitem.href}
                          className="block py-2 text-gray hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
