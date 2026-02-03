// components/ProfessionalBackground.tsx
"use client";

import { useState, useEffect, useRef } from "react";

export default function ProfessionalBackground() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

    const credentials = [
        {
            title: "Education",
            content: [
                "Doctor of Psychology (PsyD) in Clinical Psychology — Pepperdine University, Graduate School of Education and Psychology",
                "Master of Arts in Clinical Psychology — Pepperdine University",
                "Bachelor of Arts in Psychology, Magna Cum Laude — University of California, Los Angeles (UCLA)",
            ],
        },
        {
            title: "Licensure",
            content: [
                "Licensed Clinical Psychologist — California Board of Psychology",
                "License #PSY12345 (verify at www.psychboard.ca.gov)",
                "Authorized to provide telehealth services throughout California",
            ],
        },
        {
            title: "Specialized Training & Certifications",
            content: [
                "EMDR Certified Therapist — EMDR International Association (EMDRIA)",
                "Advanced Training in Complex Trauma — Trauma Research Foundation",
                "Cognitive Behavioral Therapy (CBT) Certification",
                "Mindfulness-Based Stress Reduction (MBSR) Teacher Training",
                "Gottman Method Couples Therapy — Level 1 Training",
            ],
        },
        {
            title: "Professional Memberships",
            content: [
                "American Psychological Association (APA)",
                "California Psychological Association (CPA)",
                "EMDR International Association (EMDRIA)",
                "Anxiety and Depression Association of America (ADAA)",
            ],
        },
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="credentials"
            className="section-padding-y bg-secondary-50"
            ref={sectionRef}
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2
                        className={`
              font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-3
              transition-all duration-[1400ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
                    >
                        Professional Background
                    </h2>
                    <p
                        className={`
              text-primary-500 max-w-xl mx-auto
              transition-all duration-[1200ms] ease-out
              motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
                        style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
                    >
                        Credentials matter when choosing a therapist. Here&apos;s my
                        educational background and training.
                    </p>
                </div>

                {/* Accordion */}
                <div className="max-w-3xl mx-auto">
                    {credentials.map((item, index) => (
                        <div
                            key={index}
                            className={`
                border-b border-secondary-200 bg-white first:rounded-t-lg last:rounded-b-lg
                transition-all duration-[1000ms] ease-out
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
                            style={{ transitionDelay: isVisible ? `${500 + index * 150}ms` : "0ms" }}
                        >
                            <button
                                type="button"
                                onClick={() => toggleItem(index)}
                                className="
                  w-full
                  py-5
                  px-6
                  flex
                  items-center
                  justify-between
                  text-left
                  group
                "
                                aria-expanded={openIndex === index}
                            >
                <span className="text-base text-primary-900 pr-8 group-hover:text-accent-600 transition-colors font-medium">
                  {item.title}
                </span>
                                <span
                                    className={`
                    text-xl
                    shrink-0 
                    transition-transform
                    duration-300
                    ${openIndex === index ? "rotate-45 text-accent-600" : "text-primary-400"}
                  `}
                                >
                  +
                </span>
                            </button>

                            <div
                                className={`
                  overflow-hidden 
                  transition-all 
                  duration-300
                  ${openIndex === index ? "max-h-80 pb-5" : "max-h-0"}
                `}
                            >
                                <ul className="space-y-2 px-6">
                                    {item.content.map((line, lineIndex) => (
                                        <li
                                            key={lineIndex}
                                            className="text-primary-500 leading-relaxed flex items-start gap-3 text-sm"
                                        >
                                            <span className="text-accent-500 mt-0.5">•</span>
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}