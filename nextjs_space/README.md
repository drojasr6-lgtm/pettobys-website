# 🐕 Pettobys - Sitio Web de Comida Saludable para Perros

Sitio web moderno y profesional para la marca Pettobys, especializada en comida saludable y natural para perros con tecnología de manufactura avanzada Industria 5.0.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Prisma** - ORM para base de datos
- **PostgreSQL** - Base de datos
- **Framer Motion** - Animaciones

## 📁 Estructura del Proyecto

```
nextjs_space/
├── app/                      # App Router de Next.js
│   ├── api/                  # Rutas API
│   │   ├── contact/          # Endpoint de contacto
│   │   └── products/         # Endpoint de productos
│   ├── contacto/             # Página de contacto
│   ├── productos/            # Página de productos
│   ├── sobre-nosotros/       # Página sobre nosotros
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Página de inicio
│   └── globals.css           # Estilos globales
├── components/               # Componentes reutilizables
│   ├── home/                 # Componentes de página de inicio
│   ├── ui/                   # Componentes UI (shadcn/ui)
│   ├── header.tsx            # Header del sitio
│   ├── footer.tsx            # Footer del sitio
│   └── product-card.tsx      # Tarjeta de producto
├── lib/                      # Utilidades
│   ├── db.ts                 # Configuración de Prisma
│   ├── types.ts              # Tipos TypeScript
│   └── utils.ts              # Funciones auxiliares
├── prisma/                   # Schema de base de datos
│   └── schema.prisma         # Modelos de datos
├── public/                   # Archivos estáticos
│   ├── products/             # Imágenes de productos
│   └── pettobys-logo.jpg     # Logo de la marca
└── scripts/                  # Scripts de utilidad
    └── seed.ts               # Poblar base de datos
```

## 🎨 Características

### Páginas

1. **Inicio** (`/`)
   - Hero section con branding
   - Sección de beneficios
   - Productos destacados
   - Tecnología e innovación
   - Llamados a la acción

2. **Productos** (`/productos`)
   - Catálogo completo de 8 productos
   - Filtros por categoría (Res, Pollo, Pavo, Cordero)
   - Búsqueda de productos
   - Información nutricional detallada

3. **Sobre Nosotros** (`/sobre-nosotros`)
   - Misión y valores
   - Proceso de manufactura (10 etapas)
   - Tecnología Industria 5.0
   - Compromiso con calidad y sostenibilidad

4. **Contacto** (`/contacto`)
   - Formulario de contacto funcional
   - Información de contacto (Bogotá, Colombia)
   - Horarios de atención

### Características Técnicas

- ✅ **Responsive Design** - Optimizado para móvil, tablet y desktop
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Performance** - Imágenes optimizadas con Next.js Image
- ✅ **Animaciones** - Transiciones suaves con Framer Motion
- ✅ **Base de Datos** - PostgreSQL con Prisma ORM
- ✅ **API Routes** - Endpoints para productos y contacto
- ✅ **TypeScript** - Código con tipado fuerte

## 🛠️ Instalación Local

### Prerequisitos

- Node.js 18+ instalado
- Yarn package manager
- PostgreSQL (local o remoto)

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd nextjs_space
   ```

2. **Instalar dependencias**
   ```bash
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env
   cp .env.example .env
   
   # Editar .env con tu DATABASE_URL
   ```

4. **Configurar base de datos**
   ```bash
   # Crear schema
   yarn prisma db push
   
   # Poblar con datos iniciales
   yarn prisma db seed
   ```

5. **Ejecutar en desarrollo**
   ```bash
   yarn dev
   ```

6. **Abrir en navegador**
   ```
   http://localhost:3000
   ```

## 🚀 Despliegue

### Vercel (Recomendado)

Ver archivo `INSTRUCCIONES_DESPLIEGUE.md` para guía detallada paso a paso.

**Resumen rápido:**

1. Sube el código a GitHub
2. Importa el proyecto en Vercel
3. Configura `DATABASE_URL` en variables de entorno
4. Deploy automático

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Incluye PostgreSQL gratis
- **Render**: Opción alternativa

## 📊 Base de Datos

### Modelos

**Product**
- id, name, description, category
- ingredients, nutritionalInfo
- presentation, price
- imageUrl, createdAt, updatedAt

**ContactSubmission**
- id, name, email, phone, message
- createdAt

### Seeding

El proyecto incluye 8 productos de ejemplo:
- 3 recetas de res
- 3 recetas de pollo
- 1 receta de pavo
- 1 receta de cordero

## 🎯 Para Uso en Clase

### Puntos Clave para Presentación

1. **Arquitectura Moderna**: Next.js 14 con App Router
2. **Tecnología Full-Stack**: Frontend + Backend + Base de Datos
3. **Industria 5.0**: Integración de conceptos avanzados
4. **UX/UI**: Diseño profesional con Tailwind CSS
5. **Performance**: Optimizaciones de Next.js
6. **Responsive**: Funciona en todos los dispositivos

### Demos Sugeridas

- Mostrar responsive design (móvil/desktop)
- Filtrar productos por categoría
- Enviar formulario de contacto
- Explicar proceso de manufactura
- Destacar tecnología Industria 5.0

## 📞 Información de Contacto

**Pettobys**
- Ubicación: Bogotá, Colombia
- Teléfono: +57 321 456 7890
- Email: info@pettobys.com

## 📄 Licencia

Proyecto educativo - Libre para uso académico

## 🙏 Créditos

Desarrollado como proyecto de clase usando:
- Next.js
- React
- Tailwind CSS
- Prisma
- PostgreSQL

---

**Desarrollado con ❤️ para el mejor amigo del hombre 🐕**
