import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const team = [
    {
      role: 'Liderazgo',
      description: 'Equipo directivo con más de 15 años de experiencia en tecnología y transformación digital',
      stats: '15+ años',
    },
    {
      role: 'Desarrollo',
      description: 'Ingenieros senior especializados en las tecnologías más avanzadas del mercado',
      stats: '50+ devs',
    },
    {
      role: 'Diseño',
      description: 'Diseñadores UX/UI que crean experiencias memorables centradas en el usuario',
      stats: 'Award-winning',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías para crear soluciones que marquen la diferencia',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Confiabilidad',
      description: 'Código de calidad, arquitecturas sólidas y soporte continuo garantizado',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Agilidad',
      description: 'Metodologías ágiles que nos permiten adaptarnos rápidamente a tus necesidades',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Colaboración',
      description: 'Trabajamos codo a codo contigo en cada etapa del proyecto',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Sobre <span className="text-cyber-violet">Nosotros</span>
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Somos un equipo de expertos apasionados por la tecnología y comprometidos con tu éxito
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-cyber-surface/30 backdrop-blur-sm border border-cyber-violet/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-cyber-violet/30 transition-all duration-500">
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyber-violet/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Construyendo el futuro digital desde 2018
                </h3>
                <p className="text-cyber-text-secondary text-lg leading-relaxed mb-4">
                  En <span className="text-cyber-text-primary font-semibold">Future<span className="text-cyber-violet">IT</span></span>,
                  combinamos experiencia técnica con visión estratégica para transformar desafíos complejos en
                  soluciones elegantes y escalables.
                </p>
                <p className="text-cyber-text-secondary text-lg leading-relaxed">
                  Nuestra misión es ser el socio tecnológico que tu empresa necesita para alcanzar sus objetivos,
                  con un enfoque en innovación continua, calidad excepcional y resultados medibles.
                </p>
              </div>

              <div className="space-y-6">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-cyber-base/30 rounded-xl border border-cyber-violet/10 hover:border-cyber-violet/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-cyber-violet/10 rounded-lg flex items-center justify-center text-cyber-violet font-display font-bold">
                      {member.stats}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-1">{member.role}</h4>
                      <p className="text-cyber-text-secondary text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nuestros <span className="text-cyber-violet">Valores</span>
          </h3>
          <p className="text-lg text-cyber-text-secondary max-w-2xl mx-auto mb-12">
            Los principios que guían cada decisión y cada línea de código que escribimos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-cyber-surface/30 backdrop-blur-sm border border-cyber-violet/10 rounded-2xl p-6 hover:border-cyber-violet/30 hover:bg-cyber-surface/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-violet/10 rounded-xl text-cyber-violet mb-4 group-hover:bg-cyber-violet group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-3 group-hover:text-cyber-violet transition-colors">
                {value.title}
              </h4>
              <p className="text-cyber-text-secondary text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-cyber-surface/50 backdrop-blur-sm border border-cyber-violet/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h3>
            <p className="text-cyber-text-secondary mb-6 max-w-xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo podemos ayudarte
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-cyber-violet rounded-lg font-semibold text-lg hover:bg-cyber-violet/80 hover:shadow-lg hover:shadow-cyber-violet/30 transition-all duration-300 group"
            >
              <span>Contactar Ahora</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
