
"use client";

import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, LineChart, Layout, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Palette className="h-7 w-7" />,
        title: "Diseño Gráfico",
        description: "Piezas visuales que comunican tu marca con claridad y estilo. Flyers, posts, banners, brochures e infografías.",
        price: "Desde $40 USD",
        tiempo: "24 – 72 horas",
        tag: "Entrega rápida",
        entregables: [
            "Archivos listos para impresión y digital",
            "Formatos PNG, PDF y editable",
            "Revisiones incluidas",
        ],
        popular: false,
    },
    {
        icon: <LineChart className="h-7 w-7" />,
        title: "Marketing Digital — Meta Ads",
        description: "Gestión profesional de campañas en Facebook e Instagram para generar leads y ventas reales.",
        price: "Desde $150 USD/mes",
        tiempo: "Inicio en 48 horas",
        tag: "Más solicitado",
        entregables: [
            "Setup de Business Manager y Píxel",
            "Creación y optimización de campañas",
            "Reporte mensual de resultados",
        ],
        popular: true,
    },
    {
        icon: <Palette className="h-7 w-7" />,
        title: "Branding & Identidad",
        description: "Marcas memorables construidas desde la estrategia. Logo, paleta, tipografía y manual de uso.",
        price: "Desde $200 USD",
        tiempo: "2 – 4 semanas",
        tag: "Especialidad en salud y educación",
        entregables: [
            "Logo en SVG, PNG y PDF",
            "Paleta de colores + tipografías",
            "Manual de marca básico",
        ],
        popular: false,
    },
    {
        icon: <Code className="h-7 w-7" />,
        title: "Desarrollo Web",
        description: "Sitios rápidos, modernos y optimizados con Next.js y Tailwind. Landing pages, sitios corporativos y e-commerce.",
        price: "Desde $350 USD",
        tiempo: "2 – 4 semanas",
        tag: "Stack Next.js + Tailwind",
        entregables: [
            "Diseño responsive y SEO básico",
            "Hosting y dominio configurados",
            "30 días de soporte post-lanzamiento",
        ],
        popular: false,
    },
    {
        icon: <Layout className="h-7 w-7" />,
        title: "Estrategia Digital & Redes",
        description: "Presencia online coherente con diseño + estrategia en un solo servicio. Community management y plan de contenido.",
        price: "Desde $120 USD/mes",
        tiempo: "Inicio inmediato",
        tag: "Diseño + estrategia en uno",
        entregables: [
            "Plan de contenido mensual",
            "Diseño de parrilla incluido",
            "Informe de métricas mensual",
        ],
        popular: false,
    },
];

export function Services() {
    return (
        <section id="servicios" className="container mx-auto px-4 py-24 bg-muted/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Servicios</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
                    No muestro precios fijos — cada proyecto es único.
                    <br />
                    Los valores son estimados de entrada. Escríbeme y te cotizo sin compromiso.
                </p>
                <a href="/servicios" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Ver todos los servicios
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className={`
                            relative h-full flex flex-col
                            border transition-all duration-300
                            hover:scale-[1.02] hover:shadow-lg
                            ${service.popular
                                ? 'border-primary border-2 shadow-md'
                                : 'border-border hover:border-primary/50'}
                            bg-background
                        `}>
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        Popular
                                    </span>
                                </div>
                            )}

                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        {service.icon}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <CardTitle className="text-lg">{service.title}</CardTitle>
                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">
                                            {service.tag}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-2xl font-bold text-primary">{service.price}</p>

                                <CardDescription className="text-sm leading-relaxed mt-1">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>

                            <div className="px-6 pb-4 flex-grow">
                                <div className="border-t border-border mb-4" />

                                <ul className="space-y-2">
                                    {service.entregables.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary font-bold mt-0.5">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <CardFooter className="flex flex-col gap-3 pt-2">
                                <div className="w-full flex items-center justify-center gap-1.5 text-xs text-muted-foreground bg-muted rounded-md py-1.5">
                                    <span>⏱</span>
                                    <span>{service.tiempo}</span>
                                </div>

                                <Button asChild className="w-full group" variant={service.popular ? "default" : "secondary"}>
                                    <a href="#contacto">
                                        Cotizar este servicio
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}

                <motion.div
                    className="md:col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card className="relative h-full flex flex-col border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background hover:shadow-xl hover:border-emerald-500 transition-all duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                Ahorra hasta $300 vs contratar por separado
                            </span>
                        </div>

                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-emerald-700 dark:text-emerald-400">Paquete Marca Completa</CardTitle>
                            </div>

                            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-500">Desde $500 USD</p>

                            <CardDescription className="text-sm leading-relaxed mt-1">
                                Todo lo que tu negocio necesita para arrancar con fuerza: marca, sitio web y presencia en redes. Un solo proveedor, cero fricciones.
                            </CardDescription>
                        </CardHeader>

                        <div className="px-6 pb-4 flex-grow">
                            <div className="border-t border-emerald-200 dark:border-emerald-800 mb-4" />

                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✓</span>
                                    Logo + Manual de Marca
                                </li>
                                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✓</span>
                                    Sitio Web profesional
                                </li>
                                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✓</span>
                                    1 mes de gestión de redes
                                </li>
                            </ul>
                        </div>

                        <CardFooter className="flex flex-col gap-3 pt-2">
                            <Button asChild className="w-full group bg-emerald-600 hover:bg-emerald-700 text-white">
                                <a href="#contacto">
                                    Quiero este paquete
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
