'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Development() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-5xl">
                💻
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('services.devTitle')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{t('services.devDesc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {title: 'Веб-приложения', desc: 'Современные веб-приложения на передовых технологиях', icon: '🌐'},
              {title: 'Мобильные приложения', desc: 'Нативные и кроссплатформенные мобильные решения', icon: '📱'},
              {title: 'Системная интеграция', desc: 'Интеграция различных систем и сервисов', icon: '🔗'},
              {title: 'API разработка', desc: 'Разработка надежных и масштабируемых API', icon: '⚡'}
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, x: idx % 2 === 0 ? -50 : 50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
