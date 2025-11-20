'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Clients() {
  const t = useTranslations();

  const clients = [
    'Банк 1', 'Банк 2', 'Банк 3', 'Банк 4',
    'Финансовая компания 1', 'Финансовая компания 2',
    'Платежная система 1', 'Платежная система 2'
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('nav.clients')}</h1>
            <p className="text-xl text-white/90">Нам доверяют ведущие финансовые организации</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: idx * 0.05}}
                whileHover={{scale: 1.05}}
                className="aspect-square bg-gray-lightest rounded-2xl flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-center font-semibold text-dark">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
