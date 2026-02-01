
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Mail } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string().email("Ingresa un correo electrónico válido."),
    phone: z.string().min(8, "Ingresa un número de teléfono válido (mínimo 8 dígitos)."),
    projectType: z.string().min(1, "Selecciona un tipo de proyecto."),
    message: z.string().min(10, "Cuéntame un poco más sobre el proyecto (mínimo 10 caracteres)."),
});

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            projectType: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }

            setIsSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contacto" className="container mx-auto px-4 py-24 md:py-32 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Empecemos a trabajar juntos.</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        ¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte a hacerlo realidad.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="font-semibold">danielzavala.hnz@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                            <p className="text-muted-foreground mb-6">Gracias por contactarme. Te responderé lo antes posible.</p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline">Enviar otro mensaje</Button>
                        </div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tu nombre" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="tu@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Teléfono / WhatsApp</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+504 9999-9999" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="projectType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tipo de Proyecto</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona una opción" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="branding">Branding</SelectItem>
                                                    <SelectItem value="web">Desarrollo Web</SelectItem>
                                                    <SelectItem value="social">Social Media</SelectItem>
                                                    <SelectItem value="other">Otro</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mensaje</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Cuéntame sobre tu proyecto..." className="min-h-[120px]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                </Button>
                            </form>
                        </Form>
                    )}
                </div>
            </div>
        </section>
    );
}
