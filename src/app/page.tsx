import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { BrandTransformations } from "@/components/sections/BrandTransformations";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Services />
        <FeaturedProjects />
        <BrandTransformations />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
