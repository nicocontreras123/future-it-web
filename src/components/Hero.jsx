import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Animated nodes */}
          <motion.circle
            cx="20%" cy="30%"
            r="4"
            fill="#A855F7"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="80%" cy="40%"
            r="4"
            fill="#A855F7"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="50%" cy="70%"
            r="4"
            fill="#A855F7"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Connection lines */}
          <motion.line
            x1="20%" y1="30%" x2="80%" y2="40%"
            stroke="#A855F7"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="80%" y1="40%" x2="50%" y2="70%"
            stroke="#A855F7"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-surface/50 backdrop-blur-sm border border-cyber-violet/20 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-cyber-violet rounded-full animate-pulse"></span>
          <span className="text-cyber-text-secondary text-sm font-medium">Innovación + Confiabilidad</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
        >
          Transformamos Ideas en
          <br />
          <span className="text-cyber-violet bg-clip-text text-transparent bg-gradient-to-r from-cyber-violet to-purple-400">
            Soluciones Digitales
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-cyber-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          En <span className="text-cyber-text-primary font-semibold">Future<span className="text-cyber-violet">IT</span></span>,
          desarrollamos tecnología de vanguardia con la confiabilidad que tu empresa necesita
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-cyber-violet rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-violet/40 hover:scale-105"
          >
            <span className="relative z-10">Iniciar Proyecto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-violet to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-cyber-violet/30 hover:border-cyber-violet rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-cyber-violet/10"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          {[
            { number: '50+', label: 'Proyectos Exitosos' },
            { number: '100%', label: 'Satisfacción' },
            { number: '24/7', label: 'Soporte' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-cyber-violet mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-cyber-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyber-violet/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyber-violet rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
