'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function ADM() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-5xl">
                🔧
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('solutions.admTitle')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{t('solutions.admDesc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {title: 'Мониторинг', desc: 'Непрерывный мониторинг состояния устройств', icon: '📡'},
              {title: 'Управление', desc: 'Централизованное управление оборудованием', icon: '🎛️'},
              {title: 'Диагностика', desc: 'Автоматическая диагностика неисправностей', icon: '🔍'},
              {title: 'Обновления', desc: 'Удаленное обновление программного обеспечения', icon: '🔄'},
              {title: 'Аналитика', desc: 'Глубокая аналитика работы устройств', icon: '📊'},
              {title: 'Оповещения', desc: 'Мгновенные уведомления о проблемах', icon: '🔔'}
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="bg-gradient-to-br from-gray-lightest to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
