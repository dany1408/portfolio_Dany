
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function BrandTransformations() {
    return (
        <section className="container mx-auto px-4 py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Rediseño</h2>
                <p className="text-muted-foreground">Arrastra para ver el proceso de cada proyecto</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="space-y-4">
                    <div className="h-[380px] rounded-lg overflow-hidden shadow-lg">
                        <BeforeAfterSlider
                            beforeSrc="/images/projects/Kit-L.jpg"
                            afterSrc="/images/projects/Kit-R.jpg"
                            beforeLabel="Kit-L"
                            afterLabel="Kit-R"
                        />
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Rediseño completo de identidad visual — 2024
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="h-[380px] rounded-lg overflow-hidden shadow-lg">
                        <BeforeAfterSlider
                            beforeSrc="/images/projects/proyecto1_Rincon-ktracho.jpg"
                            afterSrc="/images/projects/proyecto1_Rincon-ktracho.jpg"
                            beforeLabel="Sin marca"
                            afterLabel="Rincón Ktracho"
                        />
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Creación de logotipo desde cero — 2025
                    </p>
                </div>
            </div>
        </section>
    );
}
