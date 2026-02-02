// components/EmotionalValidation.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function EmotionalValidation() {
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

    const bulletPoints = [
        "You wake up already feeling behind, even before the day begins",
        "You replay conversations and decisions, wondering if you said or did the wrong thing",
        "You feel like you're performing a version of yourself for everyone else",
        "Relaxing feels impossible—there's always something else that needs to be done",
        "You're successful by external measures, but something still feels off inside",
    ];

    return (
        <section
            id="support"
            className="section-padding-y bg-secondary-100"
            ref={sectionRef}
        >
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Image */}
                    <div
                        className={`
              aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden relative bg-secondary-200
              transition-all duration-1000 ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
                        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                    >
                        <Image
                            src="/images/sounds-familiar.jpg"
                            alt="A calm, reflective moment representing the feelings many clients experience"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <h2
                            className={`
                font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-8
                transition-all duration-1000 ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
                        >
                            Sound familiar?
                        </h2>

                        <ul className="space-y-3 mb-8">
                            {bulletPoints.map((point, index) => (
                                <li
                                    key={index}
                                    className={`
                    flex items-start gap-3 text-primary-600
                    transition-all duration-700 ease-out
                    motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                  `}
                                    style={{ transitionDelay: isVisible ? `${250 + index * 100}ms` : "0ms" }}
                                >
                                    <span className="text-accent-500 mt-1 shrink-0">—</span>
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <p
                            className={`
                text-primary-500 leading-relaxed
                transition-all duration-700 ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
                            style={{ transitionDelay: isVisible ? `${250 + bulletPoints.length * 100 + 150}ms` : "0ms" }}
                        >
                            These experiences are more common than you might think—especially
                            among driven, thoughtful people like you. The good news? You
                            don&apos;t have to white-knuckle your way through life. There&apos;s
                            another way forward.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}