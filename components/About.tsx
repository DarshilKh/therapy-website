// components/About.tsx
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="section-padding-y bg-white"
        >
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Text */}
                    <div className="order-2 md:order-1">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-6">
                            Hi, I&apos;m Dr. Maya Reynolds
                        </h2>

                        <p className="text-primary-500 leading-relaxed mb-5">
                            I&apos;m a licensed clinical psychologist with over a decade of
                            experience helping adults work through anxiety, trauma, and the
                            unique challenges that come with high-pressure lives.
                        </p>

                        <p className="text-primary-500 leading-relaxed mb-5">
                            My clients are often entrepreneurs, creatives, and professionals
                            who are accomplished on the outside but struggling on the inside.
                            They&apos;re used to figuring things out on their own—but they&apos;ve
                            reached a point where that&apos;s no longer working.
                        </p>

                        <p className="text-primary-500 leading-relaxed mb-8">
                            My approach is warm, direct, and grounded in evidence-based methods.
                            I won&apos;t just nod and take notes—I&apos;ll work alongside you,
                            offering real tools and insights you can use right away. Together,
                            we&apos;ll get to the root of what&apos;s keeping you stuck and build
                            a path forward that actually fits your life.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="#credentials"
                            className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                border-2
                border-primary-800
                text-primary-800
                hover:bg-primary-800
                hover:text-white
                transition-colors
                duration-300
                text-sm
                font-medium
                tracking-wide
              "
                        >
                            View My Background
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
                    </div>

                    {/* Right: Images */}
                    <div className="order-1 md:order-2 relative">
                        {/* Main Large Image */}
                        <div className="aspect-square max-w-md mx-auto bg-secondary-100 rounded-3xl overflow-hidden relative shadow-lg">
                            <Image
                                src="/images/dr-maya-reynolds.png"
                                alt="Dr. Maya Reynolds, PsyD - Clinical Psychologist"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Overlapping Small Circle */}
                        <div
                            className="
                absolute
                -bottom-6
                -left-6
                md:bottom-8
                md:-left-8
                w-24
                h-24
                md:w-32
                md:h-32
                rounded-full
                bg-accent-100
                border-4
                border-white
                overflow-hidden
                shadow-md
              "
                        >
                            <Image
                                src="/images/office-2.jpeg"
                                alt="Therapy office detail"
                                fill
                                className="object-cover"
                                sizes="128px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}