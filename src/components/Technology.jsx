import React from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
  const techStack = [
    {
      category: 'Mobile Seguro',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Biometría', 'Cifrado E2E'],
    },
    {
      category: 'Cloud Enterprise',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Auto-scaling', '99.9% Uptime'],
    },
    {
      category: 'Backend Robusto',
      technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'Redis', 'API Gateway'],
    },
    {
      category: 'Datos & IA',
      technologies: ['Machine Learning', 'Analytics', 'Data Pipeline', 'Business Intelligence', 'Python', 'TensorFlow'],
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Análisis de Riesgos',
      description: 'Evaluamos seguridad, escalabilidad y arquitectura con estándares bancarios',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Arquitectura Enterprise',
      description: 'Diseñamos sistemas de alta disponibilidad, resilientes y escalables',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Desarrollo Seguro',
      description: 'Código con estándares bancarios: OWASP, GDPR, SOC2, PCI-DSS',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Testing de Grado Bancario',
      description: 'Pruebas de seguridad, penetración, carga y estrés exhaustivas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Deploy Cloud Seguro',
      description: 'CI/CD automatizado con monitoreo 24/7 y alta disponibilidad',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Soporte Enterprise',
      description: 'SLA garantizado, parches de seguridad y monitoreo continuo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="technology" className="relative py-24 md:py-32 bg-cyber-surface/30">
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
            The <span className="text-cyber-violet">Trust Stack</span>
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Estándares de seguridad financiera, arquitecturas Cloud escalables y metodologías ágiles probadas en entornos de alta exigencia
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-surface/50 backdrop-blur-sm border border-cyber-violet/10 rounded-2xl p-6 hover:border-cyber-violet/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-display font-bold text-cyber-violet mb-4 group-hover:scale-105 transition-transform">
                {stack.category}
              </h3>
              <div className="space-y-2">
                {stack.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-cyber-text-secondary group-hover:text-cyber-text-primary transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-cyber-violet rounded-full"></div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Metodología <span className="text-cyber-violet">Bancaria</span>
          </h3>
          <p className="text-lg text-cyber-text-secondary max-w-2xl mx-auto">
            Proceso probado en entornos críticos donde el error no es opción
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-violet/20 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-cyber-surface/50 backdrop-blur-sm border border-cyber-violet/10 rounded-2xl p-6 hover:border-cyber-violet/30 hover:bg-cyber-surface/80 transition-all duration-300 group h-full">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-violet/10 rounded-xl text-cyber-violet font-display font-bold text-lg mb-4 group-hover:bg-cyber-violet group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-cyber-violet mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-display font-bold mb-3 group-hover:text-cyber-violet transition-colors">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-cyber-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: '🏦', text: 'Bank-Grade Security' },
            { icon: '☁️', text: 'Cloud Enterprise' },
            { icon: '🛡️', text: 'SOC2 Compliant' },
            { icon: '⚡', text: '99.9% Uptime SLA' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-cyber-base/50 border border-cyber-violet/10 rounded-xl hover:border-cyber-violet/30 transition-all duration-300"
            >
              <span className="text-3xl mb-2">{badge.icon}</span>
              <span className="text-sm text-center text-cyber-text-secondary font-medium">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
