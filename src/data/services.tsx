export interface ServiceItem {
    title: string;
    description: string;
    deliverables?: string[];
}

export interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    image: string; // Path to SVG file
    items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        id: "logotipos",
        title: "Diseño de logotipos",
        description: "Creación de marcas únicas y memorables.",
        image: "/images/services/Icono1.svg",
        items: [
            {
                title: "Diseño de Logotipo Personalizado",
                description: "Un buen logotipo no solo identifica: transmite valores, personalidad y propósito. Diseño logotipos que capturan la esencia de tu marca, combinando estética y funcionalidad.",
                deliverables: ["Análisis visual", "Propuestas de diseño", "Archivos finales en diversos formatos"]
            }
        ]
    },
    {
        id: "identidad",
        title: "Identidad visual y manual de marca",
        description: "Tu marca es mucho más que un logo: es una experiencia visual que debe ser clara, coherente y reconocible en todos los puntos de contacto. Te ayudo a construir una identidad visual sólida que represente tu esencia y conecte con tu público. Incluye el desarrollo de logotipo, paleta de colores, tipografías, estilos gráficos y un manual de marca que asegura su uso correcto y profesional.",
        image: "/images/services/Icono_2.svg",
        items: [
            {
                title: "Manual de Marca (básico o completo)",
                description: "Guía que documenta la identidad visual de una marca, asegurando coherencia en su aplicación.",
            },
            {
                title: "Manual de Identidad Visual",
                description: "Detalla logotipo, colores, tipografía, usos correctos e incorrectos, diagramación y estilo visual. Es ideal para empresas que buscan una presencia gráfica sólida y profesional.",
            },
            {
                title: "Manual de Aplicaciones",
                description: "Ejemplos de uso del logo en papelería, redes sociales, uniformes, empaques, banners, etc. Se adapta a los puntos de contacto específicos de la marca.",
            },
            {
                title: "Guía Rápida de Marca",
                description: "Versión simplificada para emprendedores o uso interno rápido. Incluye paleta de colores, logo y tipografías principales.",
            },
            {
                title: "Brand Book (Libro de Marca)",
                description: "Versión extendida que, además de lo visual, incluye propósito, valores, tono de voz, personalidad de marca y posicionamiento.",
            },
            {
                title: "Manual de Redes Sociales",
                description: "Estilo gráfico para contenidos digitales: tipos de publicaciones, plantilla de post, tono de comunicación, paleta para RRSS, etc.",
            }
        ]
    },
    {
        id: "social-media",
        title: "Diseño para redes sociales",
        description: "Piezas visuales pensadas para captar atención, transmitir valor y mantener coherencia gráfica en tus canales digitales. Ya sea que necesites contenidos educativos, promocionales o de marca personal, diseño publicaciones que se adaptan a tus objetivos y reflejan tu identidad.",
        image: "/images/services/Icono3.svg",
        items: [
            {
                title: "Posts estáticos",
                description: "Diseños individuales con imagen y mensaje claro para publicaciones de contenido, promoción o branding.",
            },
            {
                title: "Carruseles",
                description: "Secuencia de imágenes para explicar, educar o contar historias de forma visual y atractiva.",
            },
            {
                title: "Plantillas personalizadas",
                description: "Diseños editables en Canva o Illustrator para que el cliente publique contenido de forma coherente.",
            },
            {
                title: "Historias (Stories)",
                description: "Diseño de piezas verticales para Instagram, Facebook o WhatsApp con llamadas a la acción (CTA).",
            },
            {
                title: "Banners promocionales para campañas",
                description: "Imágenes para anuncios en Facebook Ads, Google Display, WhatsApp Business y más.",
            },
            {
                title: "Portadas de perfil y destacadas",
                description: "Diseño de portada para Facebook, portadas de reels, guías y highlights (resaltados) de Instagram.",
            },
            {
                title: "Calendarios visuales de contenido",
                description: "Propuesta gráfica por semana o mes para mantener una línea coherente en la comunicación visual.",
            }
        ]
    },
    {
        id: "educativos",
        title: "Materiales educativos y promocionales",
        description: "Diseños creados para informar, enseñar o promover con claridad y creatividad. Ya sea para una campaña institucional, una clase, un taller o una estrategia de redes sociales, adapto cada pieza a tus objetivos y a tu público. Trabajo con profesionales, marcas e instituciones que necesitan comunicar visualmente de forma efectiva.",
        image: "/images/services/Icono4.svg",
        items: [
            {
                title: "Infografías",
                description: "Resumen visual de temas complejos (salud, nutrición, derechos, procesos, etc.).",
            },
            {
                title: "Presentaciones educativas (PowerPoint, PDF)",
                description: "Diseño de diapositivas claras, visuales y didácticas para clases, talleres o conferencias.",
            },
            {
                title: "Cartillas o guías ilustradas",
                description: "Documentos gráficos con instrucciones o contenidos paso a paso, ideales para campañas sociales.",
            },
            {
                title: "Pósters académicos",
                description: "Diagramación para congresos, ferias científicas o eventos educativos.",
            },
            {
                title: "Material descargable para cursos online",
                description: "PDFs, hojas de trabajo, plantillas, actividades gráficas.",
            },
            {
                title: "Afiches o flyers impresos y digitales",
                description: "Piezas visuales para promover eventos, campañas o productos.",
            },
            {
                title: "Piezas para redes sociales",
                description: "Visuales de promoción para Instagram, Facebook, LinkedIn, WhatsApp.",
            },
            {
                title: "Banners y lonas para eventos",
                description: "Diseño para ferias, stands, talleres o presentaciones públicas.",
            },
            {
                title: "Certificados personalizados",
                description: "Diseño de diplomas y reconocimientos para eventos o cursos.",
            },
            {
                title: "Brochures y trípticos",
                description: "Diseño plegable para explicar servicios, proyectos o instituciones.",
            },
            {
                title: "Stickers o elementos visuales para impresión",
                description: "Aplicables a campañas educativas o promocionales.",
            }
        ]
    },
    {
        id: "motion",
        title: "Motion graphics y edición de video",
        description: "El movimiento genera impacto. A través de animaciones, títulos dinámicos, reels y clips editados, doy vida a tus ideas para que comuniquen con fuerza y claridad en entornos digitales. Ya sea para redes sociales, presentaciones institucionales o contenido educativo, trabajo cada pieza con ritmo visual, identidad de marca y enfoque en el mensaje que querés transmitir.",
        image: "/images/services/Icono5.svg",
        items: [
            {
                title: "Edición de Reels y TikToks",
                description: "Edición dinámica para contenido vertical de alto impacto, captando la atención en los primeros segundos.",
            },
            {
                title: "Animación de Logotipo (Logo Reveal)",
                description: "Dale vida a tu marca con una animación de entrada memorable para tus videos.",
            },
            {
                title: "Videos Promocionales (Ads)",
                description: "Piezas publicitarias diseñadas para convertir y comunicar ofertas o lanzamientos.",
            },
            {
                title: "Intros y Outros para YouTube",
                description: "Creación de cabezotes de entrada y cierre para mantener la identidad en tu canal.",
            },
            {
                title: "Subtitulado y Textos Dinámicos",
                description: "Animación de textos (Kinetic Typography) para reforzar el mensaje y mejorar la retención.",
            },
            {
                title: "Edición de Video Corporativo",
                description: "Montaje profesional para testimonios, resúmenes de eventos o presentaciones de empresa.",
            }
        ]
    },
    {
        id: "firma",
        title: "Diseño de Firma de Correo Interactivo",
        description: "Una firma de correo profesional es más que un cierre: es una extensión visual de tu marca. Diseño firmas personalizadas con enlaces interactivos, integración de logotipo, datos de contacto, colores corporativos y, si lo necesitás, versión en HTML para que puedas implementarla fácilmente en Gmail, Outlook o cualquier otro cliente de correo. Ideal para equipos, consultorios, empresas y profesionales independientes.",
        image: "/images/services/Icono6.svg",
        items: [
            {
                title: "Firma Básica (Interactiva)",
                description: "Diseño limpio y profesional con tus datos de contacto y enlaces a redes sociales.",
            },
            {
                title: "Firma Corporativa (Interactiva)",
                description: "Solución completa con integración de marca, disclaimer legal y código HTML listo para usar.",
            }
        ]
    },
    {
        id: "musica",
        title: "Producción Musical Creativa",
        description: "El diseño no solo se ve: también se escucha. Ofrezco producción musical básica y diseño sonoro para piezas digitales, contenido audiovisual y proyectos personales. Desde intros para videos hasta música de fondo para reels, cada pieza se crea con intención, ritmo y estilo propio.",
        image: "/images/services/Icono7.svg",
        items: [
            {
                title: "Loops y fondos musicales originales",
                description: "Ideal para reels, intros de YouTube, podcast y videos institucionales.",
            },
            {
                title: "Diseño sonoro para animaciones",
                description: "Sonidos a medida para motion graphics, efectos de entrada/salida o interacciones visuales.",
            },
            {
                title: "Música para identidad audiovisual",
                description: "Cortinas musicales o fragmentos de marca sonora para video branding.",
            },
            {
                title: "Postproducción básica de audio",
                description: "Limpieza de voz, ecualización y ambientación musical para videos, clases grabadas o podcasts.",
            }
        ]
    }
];
