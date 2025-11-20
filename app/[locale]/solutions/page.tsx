'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function Solutions() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('solutions.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Комплексные решения для автоматизации банковских процессов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cash Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-3xl mr-4">
                  💰
                </div>
                <h2 className="text-4xl font-bold text-dark">{t('solutions.cashTitle')}</h2>
              </div>
              <p className="text-lg text-gray mb-6">{t('solutions.cashDesc')}</p>
              <ul className="space-y-3">
                {[
                  'Автоматизация кассовых операций',
                  'Контроль наличности',
                  'Интеграция с банковскими системами',
                  'Отчетность в реальном времени'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/cash-solutions" className="inline-block mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                Подробнее
              </Link>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADM Solutions */}
      <section className="py-20 bg-gray-lightest">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center text-3xl mr-4">
                  🔧
                </div>
                <h2 className="text-4xl font-bold text-dark">{t('solutions.admTitle')}</h2>
              </div>
              <p className="text-lg text-gray mb-6">{t('solutions.admDesc')}</p>
              <ul className="space-y-3">
                {[
                  'Автоматическое управление устройствами',
                  'Мониторинг и диагностика',
                  'Удаленное управление',
                  'Аналитика и отчетность'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/adm" className="inline-block mt-8 px-6 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                Подробнее
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
