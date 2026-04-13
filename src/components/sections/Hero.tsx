"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-36 
      flex flex-col items-center text-center relative min-h-[90vh] 
      justify-center">

      {/* Badge animado */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 bg-primary/10 
          text-primary text-sm font-medium px-4 py-1.5 
          rounded-full mb-8 border border-primary/20"
      >
        <span className="h-2 w-2 rounded-full bg-primary 
          animate-pulse" />
        Disponible para nuevos proyectos
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold 
          tracking-tighter mb-6 bg-clip-text text-transparent 
          bg-gradient-to-r from-foreground to-foreground/60"
      >
        Daniel Zavala
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted-foreground 
          mb-4 max-w-[600px] mx-auto leading-relaxed"
      >
        Diseño Gráfico & Desarrollo Web.
        <br />
        <span className="text-foreground font-medium">
          Marcas que generan confianza. Sitios que convierten.
        </span>
      </motion.p>

      {/* Ubicación */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-muted-foreground mb-10"
      >
        📍 Tegucigalpa, Honduras — proyectos en toda LATAM
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
      >
        <Button size="lg" asChild className="group h-12 px-8">
          <Link href="/proyectos">
            Ver mis trabajos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform 
              group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="h-12 px-8">
          <Link href="#contacto">Cotizar proyecto</Link>
        </Button>
      </motion.div>

      {/* Stats rápidos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8 
          text-center border-t border-border/40 pt-10 w-full 
          max-w-lg mx-auto"
      >
        {[
          { value: "15+", label: "Proyectos" },
          { value: "4+", label: "Años" },
          { value: "100%", label: "Satisfacción" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
