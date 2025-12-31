import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Chat message:', message);
      alert(`Mensaje enviado: ${message}`);
      setMessage('');
    }
  };

  return (
    <>
      {/* WhatsApp Button - Right Side */}
      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

          {/* Button */}
          <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-cyber-surface/90 backdrop-blur-sm border border-cyber-violet/20 rounded-lg px-3 py-2 text-sm whitespace-nowrap">
              Chatea con nosotros
            </div>
          </div>
        </div>
      </motion.a>

      {/* Chat Widget - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Chat Toggle Button */}
        <motion.button
          onClick={() => setChatOpen(!chatOpen)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="group relative"
        >
          <div className="relative w-14 h-14 bg-cyber-violet hover:bg-cyber-violet/80 rounded-full flex items-center justify-center shadow-lg shadow-cyber-violet/30 hover:shadow-cyber-violet/50 transition-all duration-300 group-hover:scale-110">
            <AnimatePresence mode="wait">
              {chatOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </motion.svg>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            {!chatOpen && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                1
              </span>
            )}
          </div>

          {/* Tooltip */}
          {!chatOpen && (
            <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-cyber-surface/90 backdrop-blur-sm border border-cyber-violet/20 rounded-lg px-3 py-2 text-sm whitespace-nowrap">
                Chat en vivo
              </div>
            </div>
          )}
        </motion.button>

        {/* Chat Window */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 left-0 w-80 md:w-96"
            >
              {/* Glassmorphism Chat Card */}
              <div className="bg-cyber-surface/95 backdrop-blur-xl border border-cyber-violet/20 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-cyber-violet to-purple-600 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">👋</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold">Future<span className="text-cyber-base">IT</span></h3>
                      <p className="text-xs text-white/80 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                        En línea
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 h-64 overflow-y-auto space-y-3">
                  {/* Bot Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-8 h-8 bg-cyber-violet/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="bg-cyber-base/50 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%]">
                      <p className="text-sm text-cyber-text-primary">
                        ¡Hola! Soy el asistente virtual de <span className="font-semibold">Future<span className="text-cyber-violet">IT</span></span>. ¿En qué puedo ayudarte hoy?
                      </p>
                    </div>
                  </motion.div>

                  {/* Quick Replies */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 ml-10"
                  >
                    {['Servicios', 'Precios', 'Portafolio'].map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setMessage(option)}
                        className="px-3 py-1.5 bg-cyber-violet/10 border border-cyber-violet/30 rounded-full text-xs text-cyber-violet hover:bg-cyber-violet hover:text-white transition-all duration-300"
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                </div>

                {/* Input */}
                <form onSubmit={handleChatSubmit} className="p-4 border-t border-cyber-violet/10">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      className="flex-1 px-4 py-2 bg-cyber-base/50 border border-cyber-violet/20 rounded-full text-sm text-cyber-text-primary placeholder-cyber-text-secondary/50 focus:outline-none focus:border-cyber-violet transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 bg-cyber-violet hover:bg-cyber-violet/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingActions;
