"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Daniel transformó nuestra identidad visual. El manual de marca que creó nos dio coherencia en todas nuestras comunicaciones. Profesional, puntual y con un ojo estético excepcional."
  },
  {
    text: "El logo que diseñó capturó exactamente lo que queríamos. El proceso fue ágil y las revisiones fueron rápidas. Totalmente recomendado."
  },
  {
    text: "Desde el branding hasta el sitio web, Daniel entregó todo con calidad premium. Sabe escuchar al cliente y traduce eso en diseño real."
  }
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">Lo que dicen mis clientes</h2>
        <p className="text-muted-foreground">Proyectos que hablan por sí solos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 border shadow-sm"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
