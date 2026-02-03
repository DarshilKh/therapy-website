// components/Intro.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="intro"
            className="section-padding-y bg-white"
            ref={sectionRef}
        >
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Text - Animates SECOND on desktop */}
                    <div className="order-2 md:order-1">
                        <h2
                            className={`
                font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-6
                transition-all duration-[1400ms] ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
                            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
                        >
                            You deserve to feel at peace—not just get by
                        </h2>
                        <p
                            className={`
                text-primary-500 leading-relaxed text-lg mb-4
                transition-all duration-[1200ms] ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
                            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                        >
                            If you&apos;re reading this, you&apos;ve likely been carrying something
                            heavy for a while. Maybe it&apos;s the constant hum of anxiety, the
                            weight of past experiences you can&apos;t shake, or the exhaustion
                            that comes from always pushing yourself.
                        </p>
                        <p
                            className={`
                text-primary-500 leading-relaxed text-lg
                transition-all duration-[1200ms] ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
                            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
                        >
                            You&apos;ve probably tried managing on your own. And while that
                            strength has gotten you this far, it doesn&apos;t mean you have to
                            keep going alone. Therapy can help you find lasting relief—not
                            just temporary fixes.
                        </p>
                    </div>

                    {/* Right: Image - Animates FIRST */}
                    <div
                        className={`
              order-1 md:order-2
              aspect-[4/3] bg-secondary-100 rounded-lg overflow-hidden relative
              transition-all duration-[1400ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
                    >
                        <Image
                            src="/images/office-1.jpeg"
                            alt="Calm, sunlit therapy office in Santa Monica"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}