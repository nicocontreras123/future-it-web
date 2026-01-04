import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Desarrollo Mobile Seguro',
      description: 'Apps móviles con seguridad de grado bancario, biometría y cifrado end-to-end. Experiencia probada en fintech.',
      features: ['Biometría Avanzada', 'Cifrado E2E', 'PCI-DSS Compliant', 'iOS/Android Native'],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Arquitectura Cloud Enterprise',
      description: 'Infraestructura de alta disponibilidad con 99.9% uptime garantizado. Auto-scaling, disaster recovery y monitoreo 24/7.',
      features: ['AWS/Azure Enterprise', 'Kubernetes', '99.9% SLA', 'Auto-scaling'],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Estrategia de Datos & IA',
      description: 'Transformamos datos en decisiones estratégicas. Machine Learning, pipelines de datos y analytics avanzado para tu negocio.',
      features: ['Machine Learning', 'Data Pipeline', 'Business Intelligence', 'Analytics Predictivo'],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Desarrollo Web Robusto',
      description: 'Aplicaciones web de misión crítica con arquitecturas resilientes y testing exhaustivo. Estándares bancarios.',
      features: ['React/Next.js', 'Node.js Enterprise', 'API Gateway', 'Load Balancing'],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Seguridad Bancaria',
      description: 'Auditorías de seguridad, pentesting y cumplimiento normativo (SOC2, GDPR, PCI-DSS). Protección de nivel financiero.',
      features: ['Pentesting Avanzado', 'SOC2/GDPR/PCI-DSS', 'Security Audit', 'Threat Detection'],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Consultoría Enterprise',
      description: 'Transformación digital con experiencia bancaria. Estrategia tecnológica, modernización de sistemas legacy y optimización.',
      features: ['Digital Transform', 'Legacy Modernization', 'Tech Strategy', 'Process Optimization'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
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
            Nuestros <span className="text-cyber-violet">Servicios</span>
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar tu negocio hacia el futuro
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-cyber-surface/50 backdrop-blur-sm border border-cyber-violet/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyber-violet/30 hover:bg-cyber-surface/80"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-violet/0 via-cyber-violet/0 to-cyber-violet/0 group-hover:from-cyber-violet/5 group-hover:via-cyber-violet/10 group-hover:to-cyber-violet/5 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-violet/10 rounded-xl text-cyber-violet mb-6 group-hover:bg-cyber-violet/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-cyber-violet transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-cyber-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyber-base/50 border border-cyber-violet/20 rounded-full text-xs text-cyber-text-secondary group-hover:border-cyber-violet/40 group-hover:text-cyber-violet transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow Icon */}
                <div className="mt-6 flex items-center text-cyber-violet opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-medium mr-2">Más detalles</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-cyber-violet/10 border-2 border-cyber-violet rounded-lg font-semibold text-lg hover:bg-cyber-violet hover:shadow-lg hover:shadow-cyber-violet/30 transition-all duration-300 group"
          >
            <span>Solicitar Consultoría Gratuita</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
