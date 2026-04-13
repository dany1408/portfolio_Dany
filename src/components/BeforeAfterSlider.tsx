
"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
    beforeSrc: string;
    afterSrc: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel = "Antes", afterLabel = "Después" }: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const afterRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);

    const setPos = useCallback((x: number) => {
        if (!wrapRef.current || !afterRef.current || !dividerRef.current) return;
        const rect = wrapRef.current.getBoundingClientRect();
        const pct = (x - rect.left) / rect.width;
        const clamped = Math.max(0.02, Math.min(0.98, pct));
        afterRef.current.style.clipPath = `inset(0 ${(1 - clamped) * 100}% 0 0)`;
        dividerRef.current.style.left = `${clamped * 100}%`;
    }, []);

    const handleMouseDown = useCallback(() => {
        isDraggingRef.current = true;
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDraggingRef.current) {
            setPos(e.clientX);
        }
    }, [setPos]);

    const handleMouseUp = useCallback(() => {
        isDraggingRef.current = false;
    }, []);

    const handleTouchStart = useCallback(() => {
        isDraggingRef.current = true;
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (isDraggingRef.current && e.touches.length === 1) {
            setPos(e.touches[0].clientX);
        }
    }, [setPos]);

    const handleTouchEnd = useCallback(() => {
        isDraggingRef.current = false;
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div
            ref={wrapRef}
            className="relative w-full h-full overflow-hidden rounded-lg select-none cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                ref={afterRef}
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: "inset(0 50% 0 0)" }}
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
                ref={dividerRef}
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: "50%" }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
                    <span className="text-gray-500 text-lg font-bold">↔</span>
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
