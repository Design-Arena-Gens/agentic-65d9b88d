'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Consulting() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-accent-dark via-accent to-accent-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-5xl">
                💼
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('services.consultTitle')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{t('services.consultDesc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {title: 'Анализ процессов', desc: 'Глубокий анализ бизнес-процессов и оптимизация', icon: '🔍'},
              {title: 'Оптимизация систем', desc: 'Повышение эффективности существующих систем', icon: '⚙️'},
              {title: 'Обучение персонала', desc: 'Комплексное обучение сотрудников работе с системами', icon: '👥'},
              {title: 'Техническая поддержка', desc: 'Круглосуточная поддержка и решение проблем', icon: '🛠️'}
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, x: idx % 2 === 0 ? -50 : 50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
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
