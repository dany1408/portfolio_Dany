
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Keyla Rodríguez",
        initials: "KR",
        company: "EduSalud FCM-UNAH",
        text: "Daniel transformó nuestra identidad visual. El manual de marca que creó nos dio coherencia en todas nuestras comunicaciones. Profesional, puntual y con un ojo estético excepcional."
    },
    {
        name: "Carlos Mejía",
        initials: "CM",
        company: "Rincón Ktracho",
        text: "El logo que diseñó capturó exactamente lo que queríamos. El proceso fue ágil y las revisiones fueron rápidas. Totalmente recomendado."
    },
    {
        name: "Andrea Molina",
        initials: "AM",
        company: "MoonStars Brand",
        text: "Desde el branding hasta el sitio web, Daniel entregó todo con calidad premium. Sabe escuchar al cliente y traduce eso en diseño real."
    }
];

export function Testimonials() {
    return (
        <section className="container mx-auto px-4 py-24 bg-muted/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Testimonios</h2>
                <p className="text-muted-foreground">Lo que dicen mis clientes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-background/50 backdrop-blur border-none">
                        <CardContent className="pt-6">
                            <Quote className="h-8 w-8 text-primary/50 mb-4" />
                            <p className="text-muted-foreground mb-4">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
