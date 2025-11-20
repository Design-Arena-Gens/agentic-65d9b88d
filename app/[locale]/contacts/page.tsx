'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Contacts() {
  const t = useTranslations();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-white/90">Мы всегда рады помочь вам</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl font-bold text-dark mb-8">Свяжитесь с нами</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: t('contact.address'),
                    content: 'Tashkent, Uzbekistan'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: t('contact.phone'),
                    content: '+998 71 200 00 00'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: t('contact.email'),
                    content: 'info@finbridge.uz'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: idx * 0.1}}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
            >
              <form className="bg-gray-lightest rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <label className="block text-dark font-medium mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-lighter focus:border-primary outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-dark font-medium mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-lighter focus:border-primary outline-none transition-colors"
                    placeholder="ваш@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-dark font-medium mb-2">{t('contact.form.message')}</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-lighter focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
