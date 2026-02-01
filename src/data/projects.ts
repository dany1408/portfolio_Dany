
export interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    role: string;
    tools: string[];
    description: string;
    highlights: string[];
    coverImage: string;
    gallery: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Rincon-ktracho",
        category: "Diseño de Logotipo",
        year: "2025",
        role: "Brand Designer",
        tools: ["Illustrator", "Photoshop"],
        description: "Rediseño de identidad para Rincón K-tracho, una marca gastronómica enfocada en parrilla y comida tradicional. Se desarrolló un sistema visual moderno y memorable, combinando un ícono ilustrado (personaje con sombrero) con el concepto de fuego/parrilla, reforzando la promesa de marca: sabor auténtico y tradición familiar.",
        highlights: ["Diseño de logotipo e isotipo (sistema adaptable)",
            "Definición de tipografía y estilo visual",
            "Aplicaciones para redes sociales y piezas promocionales",
            "Guía rápida de uso (versiones, fondos y legibilidad)"],
        coverImage: "/images/projects/proyecto1_Rincon-ktracho.jpg",
        gallery: [],
    },
    {
        id: "2",
        title: "GISMOLI",
        category: "Diseño de Logotipo / Identidad Visual",
        year: "2024",
        role: "Brand Designer",
        tools: ["Illustrator", "Photoshop"],
        description: "Diseño de identidad visual para GISMOLI, enfocada en una estética minimalista y contemporánea. Se construyó un monograma ‘GM’ dentro de un contenedor circular, optimizado para usos a pequeña escala y aplicaciones sobre producto (etiquetas, bordado y estampado), manteniendo legibilidad y consistencia en entornos digitales e impresos.",
        highlights: ["Monograma GM + logotipo (lockups horizontales/verticales)",
            "Sistema monocromático y versiones inversas",
            "Aplicaciones sobre merchandising (t-shirts / etiquetas)",
            "Lineamientos básicos de uso y proporciones"],
        coverImage: "/images/projects/proyecto2_gmoli.jpg",
        gallery: [],
    },
    {
        id: "3",
        title: "MoonStars",
        category: "Diseño de Logotipo / Identidad Visual",
        year: "2023",
        role: "Brand Designer",
        tools: ["Illustrator", "Photoshop"],
        description: "Diseño de logotipo para MoonStars, con un concepto nocturno y minimalista: un gato en silueta frente a la luna como elemento central. Se trabajó una composición limpia y memorable, con acento violeta tipo glow para reforzar el carácter moderno y digital de la marca, asegurando legibilidad y versatilidad en distintos fondos y tamaños.",
        highlights: ["Concepto e isotipo (gato + luna) con construcción simple",
            "Lockups y versiones: positivo/negativo/monocromo",
            "Acento cromático y estilo de iluminación (glow) para uso digital",
            "Aplicaciones base para redes y marca (avatar/portada)"],
        coverImage: "/images/projects/proyecto3moonstart.jpg",
        gallery: [],
    },
    {
        id: "4",
        title: "Manual de Marca - EduSalud",
        category: "Manual de Marca / Identidad Visual",
        year: "2025",
        role: "Visual Designer",
        tools: ["Illustrator"],
        description: "Diseño y maquetación de un manual de marca para EduSalud, estructurado para estandarizar el uso correcto de la identidad visual en piezas digitales e impresas. El documento integra lineamientos técnicos del imagotipo, sistema tipográfico, paleta cromática, estilo gráfico (iconografía e ilustración), fotografía, aplicaciones de marca y guía de voz y tono, asegurando consistencia en todos los puntos de contacto.",
        highlights: ["Estructura editorial por capítulos y tabla de contenido",
            "Normas del imagotipo: retícula, zona de seguridad, tamaños mínimos y usos prohibidos",
            "Sistema de color y tipografías con jerarquías",
            "Lineamientos de estilo: iconografía, ilustración, fotografía y composiciones",
            "Aplicaciones: papelería, piezas digitales y guías de formatos",
            "Sección de voz y tono para comunicación de marca"],
        coverImage: "/images/projects/proyecto4_libro de marca.jpg",
        gallery: [],
    },
    {
        id: "5",
        title: "Carrusel Promocional - Cielos Abiertos Express",
        category: "Diseño para Redes Sociales",
        year: "2024",
        role: "Social Media Designer",
        tools: ["Photoshop", "Illustrator"],
        description: "Diseño de carrusel promocional para redes sociales, desarrollado para comunicar servicios de envíos nacionales e internacionales y compras en línea. Se trabajó una narrativa por slides con mensajes cortos, jerarquía tipográfica clara y recursos visuales de logística (avión, contenedores, ubicación) para mejorar comprensión y conversión.",
        highlights: ["Carrusel 4 slides con storytelling y CTA",
            "Jerarquía tipográfica y composición optimizada para feed",
            "Adaptación a formato Instagram (consistencia entre piezas)",
            "Listo para pauta: enfoque en lectura rápida y alto contraste"],
        coverImage: "/images/projects/proyecto5_diseo_redes_sociales_3.jpg",
        gallery: [],
    },
    {
        id: "6",
        title: "EduToolkit - Gestión de Certificados",
        category: "Web App / Automatización de Procesos",
        year: "2026",
        role: "Full-stack Developer / Product Designer",
        tools: ["Next.js", "Tailwind", "Firebase", "Firestore", "Vercel"],
        description: "Plataforma web (panel administrativo) para centralizar la gestión de certificados de EduSalud. Permite organizar certificados por curso/cohorte, buscar por nombre/DNI/correo, filtrar por estado y año, administrar cursos, exportar/importar registros y monitorear estadísticas. Diseñada para agilizar operaciones internas y reducir errores en el control y entrega de certificados",
        highlights: ["Dashboard con búsqueda avanzada, filtros y agrupación por cursos/cohortes",
            "Estados operativos (ej. En archivo / Entregado) para trazabilidad",
            "Acciones administrativas: crear/editar, importar/exportar y gestión de cursos",
            "UI dark mode, componentes reutilizables y enfoque en eficiencia operativa"],
        coverImage: "/images/projects/proyecto6_edutoolkit-certificados.png",
        gallery: [],
    },
];
