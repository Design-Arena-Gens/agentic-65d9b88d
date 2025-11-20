'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function ImportSubstitution() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-dark via-dark-light to-dark-lighter text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{rotate: [0, 360]}}
              transition={{duration: 20, repeat: Infinity, ease: "linear"}}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center text-5xl">
                🔄
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('import.title')}</h1>
            <p className="text-xl text-white/90">{t('import.description')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Надежность',
                desc: 'Отечественные решения с гарантированной поддержкой',
                icon: '🛡️'
              },
              {
                title: 'Экономия',
                desc: 'Снижение затрат на лицензирование и обслуживание',
                icon: '💰'
              },
              {
                title: 'Независимость',
                desc: 'Свобода от внешних санкций и ограничений',
                icon: '🌟'
              },
              {
                title: 'Адаптация',
                desc: 'Полная адаптация под местные требования',
                icon: '⚙️'
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                className="bg-gradient-to-br from-gray-lightest to-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-3">{benefit.title}</h3>
                <p className="text-gray text-lg">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
