

"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("Todos");

    const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];

    const filtered = activeFilter === "Todos"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6"
                >
                    <span>★</span>
                    <span>{projects.length} proyectos destacados entregados</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                >
                    Proyectos Destacados
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground max-w-[600px] mx-auto text-lg"
                >
                    Cada proyecto es una historia de transformación. Haz clic en cualquiera para ver el proceso completo.
                </motion.p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide justify-center flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border",
                            activeFilter === cat
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="cursor-pointer h-full">
                                        <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all border-border/60">
                                            <div className="relative aspect-video bg-muted overflow-hidden">
                                                <Image
                                                    src={project.coverImage}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {project.beforeImage && (
                                                    <div className="absolute top-3 left-3 z-10">
                                                        <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                                                            ↔ Antes / Después
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <p className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                                                        Ver proceso completo →
                                                    </p>
                                                </div>
                                            </div>
                                            <CardHeader>
                                                <div className="flex justify-between items-start mb-2">
                                                    <Badge variant="outline">{project.category}</Badge>
                                                    <span className="text-xs text-muted-foreground">{project.year}</span>
                                                </div>
                                                <CardTitle className="mb-2 line-clamp-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tools.slice(0, 3).map((tool) => (
                                                        <span key={tool} className="text-xs bg-muted/50 px-2 py-1 rounded">
                                                            {tool}
                                                        </span>
                                                    ))}
                                                    {project.tools.length > 3 && (
                                                        <span className="text-xs bg-muted/50 px-2 py-1 rounded">+{project.tools.length - 3}</span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                                                    <span className="text-primary">→</span> {project.role}
                                                </p>
                                            </CardContent>
                                            <CardFooter className="pt-0 pb-4 text-xs text-muted-foreground" />
                                        </Card>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[800px] w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
                                    <div className="relative w-full h-[200px] sm:h-[300px]">
                                        {project.beforeImage ? (
                                            <BeforeAfterSlider
                                                beforeSrc={project.beforeImage}
                                                afterSrc={project.coverImage}
                                                beforeLabel="Concepto"
                                                afterLabel="Final"
                                            />
                                        ) : (
                                            <Image
                                                src={project.coverImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <Badge className="bg-primary/90 hover:bg-primary">{project.category}</Badge>
                                                <Badge variant="secondary" className="backdrop-blur-md bg-background/30">{project.year}</Badge>
                                            </div>
                                            <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground drop-shadow-sm">{project.title}</DialogTitle>
                                            <p className="text-foreground/80 font-medium mt-1">{project.role}</p>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 space-y-8">
                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                                                    {project.role}
                                                </span>
                                                <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                                                    {project.year}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-3">Sobre el proyecto</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Resultados & Logros</h3>
                                                <ul className="space-y-3">
                                                    {project.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                                            <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Stack & Herramientas</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tools.map((tool) => (
                                                        <Badge key={tool} variant="outline" className="py-1">
                                                            {tool}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {project.link ? (
                                            <div className="pt-4 border-t">
                                                <Button asChild className="w-full sm:w-auto">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        Ver Proyecto en Vivo <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="pt-4 border-t">
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    ¿Te interesa un proyecto similar?
                                                </p>
                                                <Button asChild className="w-full sm:w-auto group">
                                                    <a href="/#contacto">
                                                        Cotizar proyecto similar
                                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                    </a>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-24 py-16 border-t border-border/40"
            >
                <h2 className="text-2xl font-bold mb-3">
                    ¿Tu proyecto podría ser el próximo?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Cuéntame tu idea y construimos algo que marque la diferencia.
                </p>
                <Button asChild size="lg" className="group">
                    <a href="/#contacto">
                        Hablemos
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </motion.div>
        </div>
    );
}
