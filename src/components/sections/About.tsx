
"use client";

import { Button } from "@/components/ui/button";
import { MoveRight, Award, Clock, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import Image from "next/image";

const metrics = [
    { icon: Award, value: "15+", label: "Proyectos entregados" },
    { icon: Clock, value: "4+", label: "Años de experiencia" },
    { icon: Heart, value: "100%", label: "Clientes satisfechos" },
];

export function About() {
    return (
        <section id="sobre-mi" className="container mx-auto px-4 py-24 bg-muted/30">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="aspect-square bg-muted rounded-lg w-full max-w-[400px] mx-auto overflow-hidden relative">
                        <Image
                            src="/images/MARCA-2025-2k.jpg"
                            alt="Daniel Zavala"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter">Hola, soy Daniel Zavala</h2>
                    <p className="text-muted-foreground text-lg">
                        Especialista en Marketing y Diseño Gráfico con más de 4 años de trayectoria ayudando a marcas e instituciones en Honduras y Latinoamérica a consolidar su identidad. Mi enfoque combina la estrategia de mercado con una ejecución visual sólida para transformar ideas en proyectos con propósito y coherencia.
                    </p>
                    <p className="text-muted-foreground">
                        Me dedico a construir marcas desde su base, diseñando estrategias digitales que funcionan y sistemas de comunicación efectivos. Complemento mi perfil con el desarrollo web, lo que me permite no solo proyectar la imagen de una marca, sino construir su infraestructura digital de manera integral y eficiente.
                    </p>
                    <p className="text-muted-foreground font-medium">
                        Mi filosofía es simple: diseño con intención, marketing basado en resultados y una comunicación directa para que cada proyecto alcance su máximo potencial.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-4 text-center bg-background/50 backdrop-blur border-none">
                                    <metric.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                                    <p className="text-2xl font-bold">{metric.value}</p>
                                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="pt-4">
                        <Button variant="link" asChild className="p-0 h-auto font-semibold text-lg">
                            <Link href="/proyectos">
                                Explora mi trabajo <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
