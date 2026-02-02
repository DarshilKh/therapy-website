// components/Specialties.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Specialties() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const specialties = [
        {
            id: 1,
            title: "Anxiety & Panic Therapy",
            description:
                "Break free from constant worry, racing thoughts, and panic attacks. Learn practical tools to calm your nervous system and respond to stress with clarity instead of fear.",
            image: "/images/anxiety-panic.jpg",
        },
        {
            id: 2,
            title: "Trauma & EMDR Therapy",
            description:
                "Process difficult memories that still affect you today. EMDR helps your brain heal naturally, reducing the emotional charge of past experiences so you can move forward.",
            image: "/images/trauma.jpg",
        },
        {
            id: 3,
            title: "Burnout & High-Pressure Professionals",
            description:
                "Reclaim your energy and sense of purpose. Address the perfectionism, overwork, and self-criticism patterns that lead to chronic exhaustion and disconnection.",
            image: "/images/burnout.jpg",
        },
    ];

    return (
        <section
            id="specialties"
            ref={sectionRef}
            className="section-padding-y bg-secondary-50"
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`
                            font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-4
                            transition-all duration-1000 ease-out
                            motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                        `}
                    >
                        How I Can Help
                    </h2>

                    <p
                        className={`
                            text-primary-500 max-w-2xl mx-auto
                            transition-all duration-700 ease-out
                            motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                        `}
                        style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
                    >
                        I specialize in helping high-achieving adults who are tired of just
                        surviving and ready to start thriving.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {specialties.map((item, index) => (
                        <div
                            key={item.id}
                            className={`
                                bg-white border border-secondary-200
                                px-8 py-10 text-center
                                transition-all duration-700 ease-out
                                hover:border-accent-300
                                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                            `}
                            style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms" }}
                        >
                            {/* Title */}
                            <h3 className="font-heading text-xl font-medium text-primary-900 mb-6">
                                {item.title}
                            </h3>

                            {/* Circular Image - Fixed with object-cover */}
                            <div className="mb-8 flex justify-center">
                                <div className="w-48 h-48 rounded-full bg-secondary-100 overflow-hidden relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="192px"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-primary-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}