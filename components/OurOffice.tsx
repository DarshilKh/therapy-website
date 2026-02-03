// components/OurOffice.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OurOffice() {
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

    return (
        <section
            id="office"
            className="section-padding-y bg-secondary-50"
            ref={sectionRef}
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2
                        className={`
              font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-6
              transition-all duration-[1400ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
                    >
                        A Calm Space for Your Healing
                    </h2>
                    <p
                        className={`
              text-primary-500 leading-relaxed
              transition-all duration-[1200ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
                        style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
                    >
                        My Santa Monica office is designed to feel like a sanctuary—quiet,
                        private, and filled with natural light. From the moment you walk in,
                        you&apos;ll feel the difference. This is a space where you can exhale,
                        feel grounded, and focus entirely on yourself.
                    </p>
                </div>

                {/* Office Images - Animate FIRST */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Office Image 1 */}
                    <div
                        className={`
              aspect-[4/3] bg-secondary-200 rounded-lg overflow-hidden relative shadow-md
              transition-all duration-[1400ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
                        style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                    >
                        <Image
                            src="/images/office-1.jpeg"
                            alt="Therapy office seating area with natural light"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Office Image 2 */}
                    <div
                        className={`
              aspect-[4/3] bg-secondary-200 rounded-lg overflow-hidden relative shadow-md
              transition-all duration-[1400ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
                        style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                    >
                        <Image
                            src="/images/office-2.jpeg"
                            alt="Calm, private therapy space in Santa Monica"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Additional Info - Animates LAST */}
                <div
                    className={`
            text-center mt-12 p-8 bg-white rounded-lg border border-secondary-200
            transition-all duration-[1000ms] ease-out
            motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
                    style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
                >
                    <h3 className="font-heading text-xl font-medium text-primary-900 mb-3">
                        In-Person & Telehealth Options
                    </h3>
                    <p className="text-primary-500 max-w-xl mx-auto">
                        In-person sessions are available at my Santa Monica office.
                        For clients located elsewhere in California, I offer secure
                        video sessions that provide the same quality of care from
                        wherever you are.
                    </p>
                </div>
            </div>
        </section>
    );
}