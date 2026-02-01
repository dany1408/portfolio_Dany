
"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import Image from "next/image";

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
                    <h2 className="text-3xl font-bold tracking-tighter">Sobre mí</h2>
                    <p className="text-muted-foreground text-lg">
                        Soy Daniel Zavala, un diseñador multidisciplinario y desarrollador web apasionado por crear experiencias digitales que marcan la diferencia.
                    </p>
                    <p className="text-muted-foreground">
                        Con más de 4 años de experiencia, he ayudado a startups y empresas establecidas a transformar sus ideas en productos visualmente impactantes y funcionalmente robustos. Mi enfoque combina la precisión del código con la sensibilidad del diseño.
                    </p>
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
