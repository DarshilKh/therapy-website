// components/Intro.tsx
import Image from "next/image";

export default function Intro() {
    return (
        <section
            id="intro"
            className="section-padding-y bg-white"
        >
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-6">
                            You deserve to feel at peace—not just get by
                        </h2>
                        <p className="text-primary-500 leading-relaxed text-lg mb-4">
                            If you&apos;re reading this, you&apos;ve likely been carrying something
                            heavy for a while. Maybe it&apos;s the constant hum of anxiety, the
                            weight of past experiences you can&apos;t shake, or the exhaustion
                            that comes from always pushing yourself.
                        </p>
                        <p className="text-primary-500 leading-relaxed text-lg">
                            You&apos;ve probably tried managing on your own. And while that
                            strength has gotten you this far, it doesn&apos;t mean you have to
                            keep going alone. Therapy can help you find lasting relief—not
                            just temporary fixes.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="aspect-[4/3] bg-secondary-100 rounded-lg overflow-hidden relative">
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