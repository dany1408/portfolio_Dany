
"use client";

import { projects } from "@/data/projects";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Mis Proyectos</h1>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                    Una colección de trabajos seleccionados que demuestran mi pasión por el diseño y el desarrollo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Dialog key={project.id}>
                        <DialogTrigger asChild>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="cursor-pointer h-full"
                            >
                                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all border-border/60">
                                    <div className="relative aspect-video bg-muted overflow-hidden">
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <p className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">Ver Detalles</p>
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
                                    </CardContent>
                                    <CardFooter className="pt-0 pb-4 text-xs text-muted-foreground">
                                        {/* Optional footer content or remove if clean look desired */}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px] w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
                            <div className="relative w-full h-[200px] sm:h-[300px] bg-muted">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
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
                                    <h3 className="text-lg font-semibold mb-3">Sobre el proyecto</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Highlights</h3>
                                        <ul className="space-y-3">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
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

                                {project.link && (
                                    <div className="pt-4 border-t">
                                        <Button asChild className="w-full sm:w-auto">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                Ver Proyecto en Vivo <ExternalLink className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
