
"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Descubrimiento",
        description: "Entendemos tus objetivos, audiencia y valores de marca para definir el camino.",
    },
    {
        number: "02",
        title: "Estrategia",
        description: "Diseñamos un plan de acción y estructura visual que se alinee con tu visión.",
    },
    {
        number: "03",
        title: "Desarrollo",
        description: "Construimos la solución con atención al detalle y las mejores prácticas.",
    },
    {
        number: "04",
        title: "Lanzamiento",
        description: "Pruebas finales, optimización y entrega de tu proyecto listo para el mundo.",
    },
];

export function Process() {
    return (
        <section className="container mx-auto px-4 py-24 border-t">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Mi Proceso</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                    Un flujo de trabajo estructurado para garantizar resultados excepcionales.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center p-6 rounded-lg bg-background border hover:border-primary/50 transition-colors"
                    >
                        <span className="text-5xl font-bold text-foreground/20 mb-4 font-mono">{step.number}</span>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
