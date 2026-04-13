
"use client";

import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Code, LineChart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Palette className="h-7 w-7" />,
        title: "Branding & Identidad",
        description: "Construyo marcas que generan confianza desde el primer vistazo.",
        price: "Desde $150 USD",
        tiempo: "2–3 semanas",
        entregables: [
            "Logo en SVG, PNG y PDF",
            "Paleta de colores + tipografías",
            "Manual de marca básico",
        ],
        popular: false,
    },
    {
        icon: <Layout className="h-7 w-7" />,
        title: "Diseño UI/UX",
        description: "Interfaces que el usuario entiende en 3 segundos y no abandona.",
        price: "Desde $200 USD",
        tiempo: "1–2 semanas",
        entregables: [
            "Wireframes y prototipo en Figma",
            "Diseño de pantallas responsive",
            "Handoff listo para desarrollo",
        ],
        popular: false,
    },
    {
        icon: <Code className="h-7 w-7" />,
        title: "Desarrollo Web",
        description: "Sitios rápidos, modernos y optimizados con Next.js + Tailwind.",
        price: "Desde $300 USD",
        tiempo: "2–4 semanas",
        entregables: [
            "Sitio responsive con SEO básico",
            "Hosting y dominio configurados",
            "30 días de soporte post-lanzamiento",
        ],
        popular: true,
    },
    {
        icon: <LineChart className="h-7 w-7" />,
        title: "Estrategia Digital",
        description: "Presencia online coherente que trabaja para ti las 24 horas.",
        price: "Desde $100 USD",
        tiempo: "1 semana",
        entregables: [
            "Auditoría de redes y web actual",
            "Plan de contenido mensual",
            "Configuración de herramientas clave",
        ],
        popular: false,
    },
];

export function Services() {
    return (
        <section id="servicios" className="container mx-auto px-4 py-24 bg-muted/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Mis Servicios</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
                    No solo diseño o código — entrego resultados medibles para tu marca.
                </p>
                <a href="/servicios" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Ver todos los servicios
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            hover:scale-[1.02] hover:shadow-xl
                            ${service.popular
                                ? 'border-primary shadow-md'
                                : 'border-border hover:border-primary/50'}
                            bg-background
                        `}>

                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground
                                        text-xs font-semibold px-3 py-1 rounded-full">
                                        Popular
                                    </span>
                                </div>
                            )}

                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
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
                                <div className="w-full flex items-center justify-center gap-1.5
                                    text-xs text-muted-foreground bg-muted rounded-md py-1.5">
                                    <span>⏱</span>
                                    <span>Entrega estimada: {service.tiempo}</span>
                                </div>

                                <Button asChild className="w-full group"
                                    variant={service.popular ? "default" : "secondary"}>
                                    <a href="#contacto">
                                        Cotizar este servicio
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
