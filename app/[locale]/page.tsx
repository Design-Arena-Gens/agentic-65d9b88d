'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.2}
    }
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-dark">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center"
          >
            <motion.div
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{duration: 0.6, delay: 0.2}}
              className="mb-8"
            >
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                <span className="text-accent font-semibold">{t('hero.subtitle')}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.6}}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.8}}
            >
              <Link
                href="#solutions"
                className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-dark font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('hero.cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{y: [0, 10, 0]}}
          transition={{duration: 2, repeat: Infinity}}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-lightest">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark mb-4">
              {t('solutions.title')}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: t('solutions.cashTitle'),
                desc: t('solutions.cashDesc'),
                icon: '💰',
                gradient: 'from-primary to-primary-light'
              },
              {
                title: t('solutions.admTitle'),
                desc: t('solutions.admDesc'),
                icon: '🔧',
                gradient: 'from-accent to-accent-light'
              },
              {
                title: t('solutions.consultingTitle'),
                desc: t('solutions.consultingDesc'),
                icon: '💼',
                gradient: 'from-primary-dark to-primary'
              }
            ].map((solution, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{y: -10, transition: {duration: 0.3}}}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center text-3xl mb-6`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-4">{solution.title}</h3>
                <p className="text-gray">{solution.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark text-center mb-16">
              {t('services.title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="text-3xl font-semibold text-dark mb-4">{t('services.devTitle')}</h3>
                    <p className="text-gray text-lg">{t('services.devDesc')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl transform -rotate-3"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="text-3xl font-semibold text-dark mb-4">{t('services.consultTitle')}</h3>
                    <p className="text-gray text-lg">{t('services.consultDesc')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Import Substitution Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-dark-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('import.title')}</h2>
            <p className="text-xl text-white/90">{t('import.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-lightest">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark text-center mb-8">
              {t('about.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray text-center leading-relaxed">
              {t('about.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <Link
              href="/contacts"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-lightest transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('nav.contacts')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
