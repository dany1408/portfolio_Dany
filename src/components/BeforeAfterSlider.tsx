
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
    beforeSrc: string;
    afterSrc: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel = "Antes", afterLabel = "Después" }: Props) {
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const newPosition = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setPosition(newPosition);
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 1) handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (isDragging) handleMove(e.clientX);
        };
        window.addEventListener("mouseup", handleGlobalMouseUp);
        window.addEventListener("mousemove", handleGlobalMouseMove);
        return () => {
            window.removeEventListener("mouseup", handleGlobalMouseUp);
            window.removeEventListener("mousemove", handleGlobalMouseMove);
        };
    }, [isDragging, handleMove]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden rounded-lg select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            <div className="absolute inset-0">
                <Image
                    src={afterSrc}
                    alt={afterLabel}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>
            
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
            >
                <Image
                    src={beforeSrc}
                    alt={beforeLabel}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    <div className="flex gap-1">
                        <span className="w-0.5 h-3 bg-gray-400 rounded-full" />
                        <span className="w-0.5 h-3 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>

            <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                {beforeLabel}
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                {afterLabel}
            </div>
        </div>
    );
}
