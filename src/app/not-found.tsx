import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-9xl font-extrabold tracking-tighter text-primary/20">404</h1>
            <h2 className="text-3xl font-bold tracking-tight mt-4">Página no encontrada</h2>
            <p className="text-muted-foreground mt-4 mb-8 max-w-[500px]">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <Button asChild size="lg">
                <Link href="/">Volver al inicio</Link>
            </Button>
        </div>
    );
}
