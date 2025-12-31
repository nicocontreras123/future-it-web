# 🚀 Setup Rápido - FutureIT Landing Page

## Requisitos Previos
- Node.js 18+ instalado
- npm o yarn

## Instalación

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Verificar que el logo existe
Asegúrate de que el archivo `logo.png` esté en la carpeta `/public/`.

### 3. Iniciar Servidor de Desarrollo
```bash
npm run dev
```

El sitio se abrirá automáticamente en `http://localhost:3000`

### 4. Build para Producción
```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `/dist/`

### 5. Preview del Build
```bash
npm run preview
```

## 📱 Estructura de Componentes

```
src/
├── components/
│   ├── Layout.jsx           ← Contenedor principal
│   ├── Navbar.jsx           ← Header sticky
│   ├── Hero.jsx             ← Sección hero con animaciones
│   ├── Services.jsx         ← Grid de servicios
│   ├── Technology.jsx       ← Stack tech + proceso
│   ├── AboutUs.jsx          ← Sobre nosotros
│   ├── ContactForm.jsx      ← Formulario de contacto
│   ├── FloatingActions.jsx  ← WhatsApp + Chat
│   └── Footer.jsx           ← Footer
├── App.jsx                  ← App principal
├── main.jsx                 ← Entry point
└── index.css                ← Estilos globales
```

## 🎨 Personalización Rápida

### Cambiar Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  'cyber': {
    'base': '#0B0D17',      // Tu color base
    'violet': '#A855F7',    // Tu color de acento
    'surface': '#1A1D2B',   // Color de superficie
    // ...
  }
}
```

### Cambiar Logo
Reemplaza `/public/logo.png` con tu logo (formato PNG recomendado)

### Cambiar Tipografías
Edita las fuentes en:
1. `src/index.css` (importación de Google Fonts)
2. `tailwind.config.js` (configuración de Tailwind)

### Modificar Contenido
Cada componente está en su propio archivo en `src/components/`.
Simplemente abre el archivo y edita el contenido.

## 📞 Configurar WhatsApp
En `FloatingActions.jsx`, línea 15:
```javascript
href="https://wa.me/TU_NUMERO_AQUI"
```

## 📧 Configurar Formulario
El formulario actualmente muestra un `alert()` al enviar.
Para conectarlo a un backend:
1. Abre `ContactForm.jsx`
2. Busca la función `handleSubmit` (línea ~57)
3. Reemplaza el `console.log` y `alert` con tu API call

Ejemplo:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // ... validación ...

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  // Manejar respuesta...
};
```

## ⚡ Tips de Performance

1. **Lazy Loading de Imágenes**: Si agregas imágenes, usa `loading="lazy"`
2. **Optimizar Build**: El build automáticamente minifica y optimiza
3. **Lighthouse**: Ejecuta auditorías de Lighthouse para métricas

## 🐛 Troubleshooting

### Error: "Cannot find module 'framer-motion'"
```bash
npm install framer-motion
```

### Error: Tailwind no funciona
1. Verifica que `postcss.config.js` existe
2. Reinicia el servidor de desarrollo

### Fuentes no se cargan
Verifica tu conexión a internet (las fuentes se cargan desde Google Fonts)

## 📦 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta /dist/ a Netlify
```

### GitHub Pages
1. Instala `gh-pages`: `npm install -g gh-pages`
2. Build: `npm run build`
3. Deploy: `gh-pages -d dist`

## 🎯 Checklist de Lanzamiento

- [ ] Logo personalizado en `/public/logo.png`
- [ ] Colores ajustados (si necesario)
- [ ] Contenido actualizado en cada componente
- [ ] WhatsApp configurado con número real
- [ ] Formulario conectado a backend/email
- [ ] Meta tags SEO revisados en `index.html`
- [ ] Imágenes optimizadas
- [ ] Test en móvil, tablet y desktop
- [ ] Test de performance con Lighthouse
- [ ] Build de producción generado
- [ ] Deploy realizado

---

**¡Todo listo para lanzar!** 🚀

Si tienes dudas, revisa el `README.md` para más detalles.
