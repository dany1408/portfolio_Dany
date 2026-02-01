
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8 max-w-7xl">
                <div className="flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold text-xl">DZ</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
                        <Link href="/proyectos" className="transition-colors hover:text-foreground/80 text-foreground/60">Proyectos</Link>
                        <Link href="/servicios" className="transition-colors hover:text-foreground/80 text-foreground/60">Servicios</Link>
                        <Link href="/#contacto" className="transition-colors hover:text-foreground/80 text-foreground/60">Contacto</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button variant="default" size="sm" asChild>
                        <Link href="/#contacto">Cotizar</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
