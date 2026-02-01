
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Daniel Zavala
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
                    Diseño Gráfico & Desarrollo Web.
                    <br />
                    Fusionando estética minimalista con funcionalidad premium.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg" asChild>
                        <Link href="/proyectos">
                            Ver trabajos <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#contacto">Cotizar proyecto</Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
