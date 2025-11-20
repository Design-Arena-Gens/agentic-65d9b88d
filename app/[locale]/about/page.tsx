'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function About() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-dark to-dark-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-white/90">{t('about.description')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: 'Опыт', value: '10+', desc: 'лет на рынке', icon: '📊'},
              {title: 'Клиенты', value: '50+', desc: 'довольных клиентов', icon: '🤝'},
              {title: 'Проекты', value: '100+', desc: 'успешных проектов', icon: '🚀'}
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-dark mb-1">{stat.title}</div>
                <div className="text-gray">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-lightest">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-dark text-center mb-12">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {title: 'Инновации', desc: 'Мы используем передовые технологии', icon: '💡'},
                {title: 'Качество', desc: 'Высокие стандарты во всем', icon: '⭐'},
                {title: 'Надежность', desc: 'Доверие наших клиентов', icon: '🛡️'},
                {title: 'Развитие', desc: 'Постоянное совершенствование', icon: '📈'}
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{opacity: 0, x: idx % 2 === 0 ? -50 : 50}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold text-dark mb-2">{value.title}</h3>
                  <p className="text-gray">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
