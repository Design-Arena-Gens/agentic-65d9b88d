'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Services() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Профессиональные услуги для вашего бизнеса
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-5xl mb-6">💻</div>
              <h2 className="text-3xl font-bold mb-4">{t('services.devTitle')}</h2>
              <p className="text-lg text-white/90 mb-6">{t('services.devDesc')}</p>
              <ul className="space-y-3">
                {['Веб-приложения', 'Мобильные приложения', 'Системная интеграция', 'API разработка'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="bg-gradient-to-br from-accent to-accent-light text-dark rounded-2xl p-8 shadow-xl"
            >
              <div className="text-5xl mb-6">💼</div>
              <h2 className="text-3xl font-bold mb-4">{t('services.consultTitle')}</h2>
              <p className="text-lg mb-6">{t('services.consultDesc')}</p>
              <ul className="space-y-3">
                {['Анализ процессов', 'Оптимизация систем', 'Обучение персонала', 'Техническая поддержка'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
