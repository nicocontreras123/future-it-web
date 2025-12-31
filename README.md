# FutureIT Landing Page

Landing Page de alta gama para la consultora FutureIT, desarrollada con React, Tailwind CSS y Framer Motion.

## Características

- **Diseño Cyber-Luxury**: Estética futurista con efectos de neón y glassmorphism
- **Animaciones Elegantes**: Scroll-reveal y micro-interacciones con Framer Motion
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Componentes Modulares**: Arquitectura limpia y mantenible
- **Performance Optimizado**: Lazy loading y optimizaciones de rendimiento

## Paleta de Colores

- **Fondo Base**: `#0B0D17` (Negro-Violeta)
- **Acento**: `#A855F7` (Cyber Violet Neón)
- **Superficie/Cards**: `#1A1D2B` (Azul Noche)
- **Texto Primario**: `#FFFFFF`
- **Texto Secundario**: `#94A3B8`

## Estructura del Proyecto

```
src/
├── components/
│   ├── Layout.jsx          # Estructura principal
│   ├── Navbar.jsx          # Header sticky con backdrop-blur
│   ├── Hero.jsx            # Sección de impacto con animaciones
│   ├── Services.jsx        # Grid de servicios con hover glow
│   ├── Technology.jsx      # Stack tecnológico y proceso
│   ├── AboutUs.jsx         # Sección sobre el equipo
│   ├── ContactForm.jsx     # Formulario con glassmorphism
│   ├── FloatingActions.jsx # WhatsApp + Chat flotante
│   └── Footer.jsx          # Footer con enlaces y redes
├── App.jsx
├── main.jsx
└── index.css
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Build para producción:
```bash
npm run build
```

## Tecnologías

- **React 18**: Framework UI
- **Tailwind CSS**: Styling y diseño responsive
- **Framer Motion**: Animaciones y transiciones
- **Vite**: Build tool y dev server
- **Orbitron + Manrope**: Tipografías personalizadas

## Componentes Principales

### Navbar
Header sticky con efecto backdrop-blur, navegación responsive y menú móvil.

### Hero
Sección de impacto con:
- Background de red neuronal abstracto
- Animaciones de entrada escalonadas
- CTAs con efectos hover
- Stats destacados

### Services
Grid de 6 servicios con:
- Cards glassmorphic
- Efectos glow en hover
- Badges de tecnologías
- Animaciones scroll-reveal

### Technology
Muestra stack tecnológico y proceso de 6 pasos con:
- Grid de tecnologías por categoría
- Timeline visual del proceso
- Badges de confianza

### AboutUs
Narrativa sobre el equipo con:
- Historia de la empresa
- Cards del equipo
- Grid de valores
- CTA de contacto

### ContactForm
Formulario completo con:
- Validación en tiempo real
- Diseño glassmorphism
- Información de contacto
- Enlaces a redes sociales

### FloatingActions
- **WhatsApp**: Botón con efecto pulse infinito (derecha)
- **Chat Widget**: Chat flotante interactivo (izquierda)

### Footer
Footer completo con:
- Logo y descripción
- Enlaces organizados por categorías
- Redes sociales
- Newsletter
- Copyright

## Personalización

### Colores
Modifica los colores en `tailwind.config.js`:

```javascript
colors: {
  'cyber': {
    'base': '#0B0D17',
    'violet': '#A855F7',
    'surface': '#1A1D2B',
    // ...
  }
}
```

### Tipografías
Cambia las fuentes en `tailwind.config.js` y `src/index.css`.

### Logo
Coloca tu logo en `/public/logo.png`.

## Notas Importantes

- La partícula "IT" en "FutureIT" siempre aparece en color Cyber Violet (#A855F7)
- Todas las animaciones usan `whileInView` para activarse en scroll
- El diseño es mobile-first y totalmente responsive
- Los efectos de glassmorphism usan `backdrop-blur` para mejor rendimiento

## Soporte

Para cualquier consulta o soporte técnico, contacta al equipo de desarrollo.

---

**Desarrollado con** ❤️ **por FutureIT**
