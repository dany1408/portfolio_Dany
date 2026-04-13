
"use client";

import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Code, LineChart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Palette className="h-8 w-8 mb-4" />,
        title: "Branding & Identidad",
        description: "Creación de marcas memorables con un enfoque minimalista y atemporal.",
        price: "Desde $150 USD",
    },
    {
        icon: <Layout className="h-8 w-8 mb-4" />,
        title: "Diseño UI/UX",
        description: "Interfaces intuitivas y atractivas diseñadas pensando en el usuario final.",
        price: "Desde $200 USD",
    },
    {
        icon: <Code className="h-8 w-8 mb-4" />,
        title: "Desarrollo Web",
        description: "Sitios web rápidos, responsivos y optimizados con Next.js y Tailwind.",
        price: "Desde $300 USD",
    },
    {
        icon: <LineChart className="h-8 w-8 mb-4" />,
        title: "Estrategia Digital",
        description: "Soluciones para mejorar tu presencia online y automatizar procesos.",
        price: "Desde $100 USD",
    },
];

export function Services() {
    return (
        <section id="servicios" className="container mx-auto px-4 py-24 bg-muted/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Mis Servicios</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
                    Soluciones integrales para elevar tu marca al siguiente nivel.
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
                        <Card className="h-full hover:shadow-lg transition-shadow border-none bg-background/50 backdrop-blur">
                            <CardHeader>
                                <div className="text-primary">{service.icon}</div>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                                <p className="text-sm font-medium text-primary/80 mt-2">{service.price}</p>
                            </CardHeader>
                            <CardFooter className="mt-auto pt-6">
                                <Button asChild className="w-full group" variant="secondary">
                                    <a href="#contacto">
                                        Empezar proyecto
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
