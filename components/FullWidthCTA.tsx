// components/FullWidthCTA.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function FullWidthCTA() {
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
            id="contact"
            className="section-padding-y bg-primary-900"
            ref={sectionRef}
        >
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto">
                    {/* Heading */}
                    <h2
                        className={`
              font-heading text-3xl md:text-4xl font-semibold text-white mb-6
              transition-all duration-[1400ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
                    >
                        Ready to Feel Like Yourself Again?
                    </h2>

                    {/* Supporting Text */}
                    <p
                        className={`
              text-primary-300 leading-relaxed mb-10 text-lg
              transition-all duration-[1200ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
                        style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
                    >
                        Taking the first step is often the hardest part. I offer a free
                        15-minute consultation so we can talk about what you&apos;re going
                        through and whether we&apos;d be a good fit. No pressure, no
                        commitment—just a conversation.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="mailto:hello@drmayareynolds.com?subject=Therapy%20Consultation%20Request"
                        className={`
              inline-flex 
              items-center 
              gap-3
              px-10 
              py-5
              bg-accent-500
              text-white
              hover:bg-accent-600
              transition-all
              duration-300
              text-base
              font-medium
              tracking-wide
              shadow-lg
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
                        style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                    >
                        Schedule Your Free Consultation
                        <svg
                            className="w-5 h-5"
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

                    {/* Additional Contact Info */}
                    <div
                        className={`
              mt-10 pt-10 border-t border-primary-700
              transition-all duration-[1000ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
                        style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                    >
                        <p className="text-primary-400 text-sm mb-4">
                            Prefer to reach out directly?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-300">
                            <a
                                href="mailto:hello@drmayareynolds.com"
                                className="hover:text-white transition-colors"
                            >
                                hello@drmayareynolds.com
                            </a>
                            <span className="hidden sm:inline text-primary-600">|</span>
                            <a
                                href="tel:+13105551234"
                                className="hover:text-white transition-colors"
                            >
                                (310) 555-1234
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}