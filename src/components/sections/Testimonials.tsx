
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Testimonios</h2>
                <p className="text-muted-foreground">Lo que dicen mis clientes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Placeholders */}
                <Card className="bg-muted/20 border-none">
                    <CardContent className="pt-6">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-muted-foreground mb-4">
                            "Trabajar con Daniel fue una experiencia excelente. Entendió perfectamente nuestra visión y la llevó al siguiente nivel con su diseño."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">EC</div>
                            <div>
                                <p className="font-semibold text-sm">Elena Castro</p>
                                <p className="text-xs text-muted-foreground">Fundadora, Studio K</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-muted/20 border-none">
                    <CardContent className="pt-6">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-muted-foreground mb-4">
                            "La nueva identidad visual que diseñó para nosotros ha tenido un impacto increíble en nuestras ventas. Totalmente recomendado."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">MR</div>
                            <div>
                                <p className="font-semibold text-sm">Miguel Reyes</p>
                                <p className="text-xs text-muted-foreground">Director, TechNova</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-muted/20 border-none">
                    <CardContent className="pt-6">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-muted-foreground mb-4">
                            "Profesionalismo puro. Entregó todo a tiempo y con una calidad excepcional. Definitivamente volveremos a trabajar juntos."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">SF</div>
                            <div>
                                <p className="font-semibold text-sm">Sofía Fernández</p>
                                <p className="text-xs text-muted-foreground">Marketing, FreshFood</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
