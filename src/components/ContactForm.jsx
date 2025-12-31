import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  const services = [
    'Desarrollo Web',
    'Apps Móviles',
    'Cloud & DevOps',
    'Data Analytics',
    'Ciberseguridad',
    'Consultoría IT',
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : '';
      case 'phone':
        return value && !/^\+?[\d\s-()]+$/.test(value) ? 'Teléfono inválido' : '';
      case 'message':
        return value.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocused(prev => ({ ...prev, [name]: false }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleFocus = (name) => {
    setFocused(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-cyber-surface/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Hablemos de tu <span className="text-cyber-violet">Proyecto</span>
            </h2>
            <p className="text-xl text-cyber-text-secondary mb-12 leading-relaxed">
              Estamos listos para convertir tus ideas en realidad. Cuéntanos sobre tu proyecto y
              te ayudaremos a encontrar la mejor solución.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'contacto@futureit.com',
                  href: 'mailto:contacto@futureit.com',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Teléfono',
                  value: '+1 (555) 123-4567',
                  href: 'tel:+15551234567',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Ubicación',
                  value: 'Silicon Valley, CA',
                  href: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyber-violet/10 rounded-xl flex items-center justify-center text-cyber-violet group-hover:bg-cyber-violet group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-cyber-text-secondary">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-cyber-text-primary font-medium hover:text-cyber-violet transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-cyber-text-primary font-medium">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <p className="text-cyber-text-secondary mb-4">Síguenos en redes sociales</p>
              <div className="flex space-x-4">
                {['linkedin', 'twitter', 'github', 'instagram'].map((social, index) => (
                  <a
                    key={index}
                    href={`#${social}`}
                    className="w-10 h-10 bg-cyber-surface/50 border border-cyber-violet/20 rounded-lg flex items-center justify-center text-cyber-text-secondary hover:bg-cyber-violet hover:border-cyber-violet hover:text-white transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glassmorphism Card */}
            <div className="bg-cyber-surface/40 backdrop-blur-xl border border-cyber-violet/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-cyber-base/50 border ${
                      errors.name ? 'border-red-500' : focused.name ? 'border-cyber-violet' : 'border-cyber-violet/20'
                    } rounded-xl text-cyber-text-primary placeholder-cyber-text-secondary/50 focus:outline-none focus:border-cyber-violet transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-cyber-base/50 border ${
                      errors.email ? 'border-red-500' : focused.email ? 'border-cyber-violet' : 'border-cyber-violet/20'
                    } rounded-xl text-cyber-text-primary placeholder-cyber-text-secondary/50 focus:outline-none focus:border-cyber-violet transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                {/* Phone & Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-cyber-base/50 border ${
                        errors.phone ? 'border-red-500' : focused.phone ? 'border-cyber-violet' : 'border-cyber-violet/20'
                      } rounded-xl text-cyber-text-primary placeholder-cyber-text-secondary/50 focus:outline-none focus:border-cyber-violet transition-all duration-300`}
                      placeholder="+1 555 123 4567"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => handleFocus('company')}
                      className={`w-full px-4 py-3 bg-cyber-base/50 border ${
                        focused.company ? 'border-cyber-violet' : 'border-cyber-violet/20'
                      } rounded-xl text-cyber-text-primary placeholder-cyber-text-secondary/50 focus:outline-none focus:border-cyber-violet transition-all duration-300`}
                      placeholder="Tu Empresa"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => handleFocus('service')}
                    className={`w-full px-4 py-3 bg-cyber-base/50 border ${
                      focused.service ? 'border-cyber-violet' : 'border-cyber-violet/20'
                    } rounded-xl text-cyber-text-primary focus:outline-none focus:border-cyber-violet transition-all duration-300`}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-cyber-base/50 border ${
                      errors.message ? 'border-red-500' : focused.message ? 'border-cyber-violet' : 'border-cyber-violet/20'
                    } rounded-xl text-cyber-text-primary placeholder-cyber-text-secondary/50 focus:outline-none focus:border-cyber-violet transition-all duration-300 resize-none`}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyber-violet hover:bg-cyber-violet/80 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-violet/30 group flex items-center justify-center"
                >
                  <span>Enviar Mensaje</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
