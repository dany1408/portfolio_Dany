import { Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-8 bg-muted/20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Daniel Zavala. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-4">

                    <Link href="https://www.instagram.com/danny_zhnz/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniel-zavala-hernandez-498bb1232/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:danielzavala.hnz@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
