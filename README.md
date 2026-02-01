
# Portafolio - Daniel Zavala

Portafolio moderno y minimalista desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## Tecnologías

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animaciones:** Framer Motion
- **Emails:** Resend
- **Formularios:** React Hook Form + Zod

## Instalación

1.  Clonar el repositorio (o descargar):
    ```bash
    git clone <tu-repo>
    cd my_pagweb
    ```

2.  Instalar dependencias:
    ```bash
    npm install
    ```

3.  Configurar variables de entorno:
    Renombra `.env.example` a `.env.local` (o crea uno) y añade:
    ```env
    RESEND_API_KEY=re_123456789
    CONTACT_TO_EMAIL=tu@email.com
    ```

4.  Iniciar servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Estructura del Proyecto

- `src/components/layout`: Header y Footer.
- `src/components/sections`: Secciones de la Home (Hero, Services, etc.).
- `src/components/ui`: Componentes base de shadcn.
- `src/data`: Datos estáticos (proyectos).
- `src/app/api/send`: Endpoint para envío de correos.

## Deploy en Vercel

1.  Sube el proyecto a GitHub.
2.  Importa el proyecto en Vercel.
3.  Configura las Environment Variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`).
4.  Deploy.

## Notas
- Los correos se envían usando la integración de Resend. Asegúrate de verificar tu dominio en Resend para producción, o usa el correo de prueba `onboarding@resend.dev` y envía solo a tu correo registrado durante desarrollo.
