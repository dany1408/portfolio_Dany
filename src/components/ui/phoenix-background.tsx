"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    duration: number;
    delay: number;
    size: number;
}

export const PhoenixBackground = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate static particles on client side to avoid hydration mismatch
        const particleCount = 20;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            duration: 15 + Math.random() * 20, // 15-35s
            delay: Math.random() * 20 * -1, // negative delay to start mid-animation
            size: 3 + Math.random() * 3, // 3-6px
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
            {/* Dark gradient removed as requested to avoid scrolling overlay */}

            {particles.map((particle) => {
                // Generate a random jagged polygon for each particle (Ash shard)
                const randomShape = Math.random() > 0.5
                    ? "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" // Octagon-ish
                    : "polygon(50% 0%, 0% 100%, 100% 100%)"; // Triangle shard

                // Better shard shape: Random polygon
                const r1 = Math.floor(Math.random() * 40);
                const r2 = Math.floor(Math.random() * 40) + 60;
                const r3 = Math.floor(Math.random() * 40) + 60;
                const r4 = Math.floor(Math.random() * 40);
                const clipPath = `polygon(${r1}% 0%, ${r2}% ${r1}%, 100% ${r3}%, ${r3}% 100%, ${r4}% ${r2}%, 0% ${r4}%)`;

                return (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-foreground/60"
                        initial={{
                            opacity: 0,
                            y: "110vh",
                            x: `${particle.x}vw`,
                            rotate: Math.random() * 360,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0.4, 0],
                            y: "-10vh",
                            x: [
                                `${particle.x}vw`,
                                `${particle.x + (Math.random() * 20 - 10)}vw`, // High turbulence
                                `${particle.x + (Math.random() * 20 - 10)}vw`,
                                `${particle.x + (Math.random() * 20 - 10)}vw`
                            ],
                            rotate: [0, 180, 360, 540], // Fast tumbling
                            scale: [1, 0.5, 1.2, 0.8]
                        }}
                        transition={{
                            duration: particle.duration * 0.8, // Faster, energetic
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "linear",
                            times: [0, 0.2, 0.5, 1]
                        }}
                        style={{
                            width: particle.size,
                            height: particle.size * (0.5 + Math.random() * 1.5),
                            clipPath: clipPath, // TRUE angular shards
                            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))", // Glow effect
                        }}
                    />
                );
            })}
        </div>
    );
};
