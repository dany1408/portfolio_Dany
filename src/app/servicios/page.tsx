
"use client";

import { motion } from "framer-motion";
import { serviceCategories, ServiceCategory } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2, ChevronDown, ChevronRight, ArrowRight, Clock, ShieldCheck, Package } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const servicePrices: Record<string, string> = {
    "logotipos": "Desde $200 USD",
    "identidad": "Desde $200 USD",
    "social-media": "Desde $40 USD",
    "educativos": "Desde $40 USD",
    "motion": "Desde $80 USD",
    "firma": "Desde $40 USD",
    "musica": "Desde $80 USD",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                >
                    Servicios
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
                >
                    Cada proyecto es único — por eso no hay precios fijos.
                    <br />
                    Estos son mis rangos de entrada. Escríbeme y te cotizo sin compromiso en menos de 24 horas.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">⚡ Respuesta en 24h</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">✓ Sin costos ocultos</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">★ 4+ años de experiencia</span>
                </motion.div>
            </section>

            {/* Why Me Section */}
            <section className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-border hover:shadow-lg transition-all">
                            <CardHeader className="pb-4">
                                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">Respuesta en 24h</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Te respondo rápido y arrancamos sin demoras. Tu tiempo vale.</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-primary border-2 shadow-md">
                            <CardHeader className="pb-4">
                                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">Experiencia en salud y educación</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">He trabajado con instituciones como EduSalud FCM-UNAH. Sé cómo comunicar en nichos exigentes.</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-border hover:shadow-lg transition-all">
                            <CardHeader className="pb-4">
                                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                                    <Package className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">Todo en un solo lugar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Diseño, web y marketing. No necesitas contratar 3 personas diferentes.</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Services Masonry Layout */}
            <section className="container mx-auto px-4 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {serviceCategories.map((category, index) => (
                        <ServiceCard key={category.id} category={category} index={index} priceFrom={servicePrices[category.id] || "Cotizar"} />
                    ))}
                </div>
            </section>

            {/* CTA Final Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">¿No encontraste lo que buscas?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Cuéntame tu proyecto y vemos cómo puedo ayudarte. La primera consulta es gratis.
                </p>
                <Button asChild size="lg" className="group">
                    <a href="/#contacto">
                        Hablemos de tu proyecto
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </section>
        </div>
    );
}

function ServiceCard({ category, index, priceFrom }: { category: ServiceCategory; index: number; priceFrom: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="h-full">
                    <Card
                        className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm pt-8 cursor-pointer group relative overflow-hidden hover:-translate-y-1"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardHeader className="text-center pb-8 relative z-10 flex-grow">
                            <div
                                className="mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-background to-muted border shadow-sm ring-1 ring-primary/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 p-4"
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className={cn(
                                            "object-contain drop-shadow-sm",
                                            (category.id === "logotipos" || category.id === "musica") && "dark:invert"
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <CardTitle className="leading-tight text-lg font-medium mb-1 group-hover:text-primary transition-colors">{category.title}</CardTitle>
                                <p className="text-sm font-semibold text-primary">{priceFrom}</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium opacity-60 group-hover:opacity-100 transition-opacity mt-2">Ver Detalles</p>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] w-[95vw] p-0 overflow-hidden bg-background border-border/50 shadow-2xl duration-300 sm:rounded-2xl gap-0 grid grid-cols-1 md:grid-cols-[300px_1fr]">
                {/* Visual Column (Left/Top) */}
                <div className="bg-muted/30 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                    <div className="h-40 w-40 relative z-10 p-4 transition-transform duration-700 hover:scale-105">
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className={cn(
                                "object-contain drop-shadow-md",
                                (category.id === "logotipos" || category.id === "musica") && "dark:invert"
                            )}
                        />
                    </div>
                    <DialogTitle className="text-2xl font-bold mt-6 relative z-10 leading-tight md:px-4">{category.title}</DialogTitle>
                    <p className="text-sm text-muted-foreground mt-2 relative z-10 px-4">
                        {category.description}
                    </p>
                    <div className="mt-4 relative z-10">
                        <p className="text-xl font-bold text-primary">{priceFrom}</p>
                        <div className="border-t border-border/40 my-4 mx-8" />
                        <p className="text-xs text-muted-foreground px-4">
                            Precio estimado de entrada. La cotización final depende del alcance.
                        </p>
                    </div>
                </div>

                {/* Content Column (Right/Bottom) */}
                <div className="p-6 md:p-8 max-h-[60vh] md:max-h-[80vh] overflow-y-auto">
                    <DialogHeader className="mb-6 sr-only">
                        <DialogTitle>Detalles del servicio</DialogTitle>
                        <DialogDescription>Información completa sobre {category.title}</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-8">
                        {category.items.map((item, i) => (
                            <div key={i} className="group/item">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                                        <ChevronRight className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-foreground tracking-tight group-hover/item:text-primary transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {item.deliverables && (
                                    <div className="pl-12">
                                        <div className="bg-muted/40 rounded-xl p-4 border border-border/40">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 opacity-70">Incluye:</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                                {item.deliverables.map((del, d) => (
                                                    <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                                                        <span>{del}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/40 sticky bottom-0 bg-background/95 backdrop-blur py-4">
                        <Button asChild className="w-full group/btn h-12 text-base" size="lg">
                            <a href="/#contacto">
                                Cotizar este servicio
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
