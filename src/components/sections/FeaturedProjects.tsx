
"use client";

import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedProjects() {
    // Show only first 4 projects
    const featured = projects.slice(0, 4);

    return (
        <section className="container mx-auto px-4 py-24">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">Proyectos Destacados</h2>
                    <p className="text-muted-foreground">Una selección de mis trabajos recientes.</p>
                </div>
                <Button variant="ghost" asChild className="hidden md:flex">
                    <Link href="/proyectos">Ver todos <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link href={`/proyectos#${project.id}`} className="group">
                            <Card className="overflow-hidden border-none shadow-none bg-transparent">
                                <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-muted">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader className="p-0 mb-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                            <CardDescription>{project.category} — {project.year}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <div className="mt-8 text-center md:hidden">
                <Button variant="outline" asChild>
                    <Link href="/proyectos">Ver todos los proyectos</Link>
                </Button>
            </div>
        </section>
    );
}
