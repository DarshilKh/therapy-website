// components/Hero.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-32 pb-16 md:pt-24 md:pb-0 bg-secondary-50"
            ref={sectionRef}
        >
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
                    {/* Left: Hero Image */}
                    <div
                        className={`
              order-2 md:order-1
              transition-all duration-1000 ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
                        style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                    >
                        <div
                            className="
                relative
                w-full
                max-w-md
                mx-auto
                md:mx-0
                aspect-[3/4]
                bg-secondary-200
                rounded-t-full
                overflow-hidden
                shadow-lg
              "
                        >
                            <Image
                                src="/images/dr-maya-reynolds.png"
                                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <h1
                            className={`
                font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-950 mb-6 leading-tight
                transition-all duration-1000 ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
                        >
                            Anxiety & Trauma Therapy in Santa Monica, CA
                        </h1>

                        <p
                            className={`
                text-lg md:text-xl text-primary-500 mb-10 max-w-md mx-auto md:mx-0 leading-relaxed
                transition-all duration-700 ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
                            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
                        >
                            Find relief from anxiety, heal from trauma, and reclaim your life
                            with compassionate, evidence-based therapy.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className={`
                inline-flex 
                items-center 
                gap-3
                px-8 
                py-4
                bg-accent-600
                text-white
                hover:bg-accent-700
                transition-all
                duration-300
                text-sm
                font-medium
                tracking-wide
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
                            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
                        >
                            Schedule a Free Consultation
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>

                        <p
                            className={`
                mt-6 text-sm text-primary-400
                transition-all duration-700 ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
                            style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
                        >
                            Licensed Clinical Psychologist • EMDR Certified • California PSY#12345
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}