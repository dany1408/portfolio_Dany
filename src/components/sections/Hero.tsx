"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 
      min-h-[90vh] flex items-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 
        lg:gap-16 items-center w-full">

        {/* Columna izquierda — texto */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          
          {/* Badge disponible */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/10 
              text-primary text-sm font-medium px-4 py-1.5 
              rounded-full mb-8 border border-primary/20"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Disponible para nuevos proyectos
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold 
              tracking-tighter mb-6 bg-clip-text text-transparent 
              bg-gradient-to-r from-foreground to-foreground/60"
          >
            Daniel<br />Zavala
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground 
              mb-2 leading-relaxed"
          >
            Diseño Gráfico, Marketing & Desarrollo Web.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg md:text-xl font-semibold 
              text-foreground mb-4"
          >
            Marcas que generan confianza.<br />
            Sitios que convierten.
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
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-8 border-t border-border/40 pt-8 w-full"
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
        </div>

        {/* Columna derecha — imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          {/* Imagen principal */}
          <div className="relative rounded-2xl overflow-hidden 
            aspect-[4/3] w-full shadow-2xl">
            <Image
              src="/images/projects/head foto.jpg"
              alt="Daniel Zavala — espacio de trabajo creativo"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t 
              from-background/20 to-transparent" />
          </div>

          {/* Card flotante — disponibilidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute -bottom-4 -left-4 bg-background 
              border border-border/60 rounded-xl p-4 shadow-lg 
              flex items-center gap-3 backdrop-blur"
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 
              flex items-center justify-center text-primary font-bold 
              text-sm shrink-0">
              DZ
            </div>
            <div>
              <p className="text-sm font-semibold">Daniel Zavala</p>
              <p className="text-xs text-muted-foreground">
                Brand & Web Designer
              </p>
            </div>
          </motion.div>

          {/* Card flotante — proyectos */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="absolute -top-4 -right-4 bg-background 
              border border-border/60 rounded-xl px-4 py-3 
              shadow-lg backdrop-blur"
          >
            <p className="text-xs text-muted-foreground">Proyectos entregados</p>
            <p className="text-2xl font-bold text-primary">15+</p>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
