// components/OurOffice.tsx
import Image from "next/image";

export default function OurOffice() {
    return (
        <section
            id="office"
            className="section-padding-y bg-secondary-50"
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-6">
                        A Calm Space for Your Healing
                    </h2>
                    <p className="text-primary-500 leading-relaxed">
                        My Santa Monica office is designed to feel like a sanctuary—quiet,
                        private, and filled with natural light. From the moment you walk in,
                        you&apos;ll feel the difference. This is a space where you can exhale,
                        feel grounded, and focus entirely on yourself.
                    </p>
                </div>

                {/* Office Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Office Image 1 */}
                    <div className="aspect-[4/3] bg-secondary-200 rounded-lg overflow-hidden relative shadow-md">
                        <Image
                            src="/images/office-1.jpeg"
                            alt="Therapy office seating area with natural light"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Office Image 2 */}
                    <div className="aspect-[4/3] bg-secondary-200 rounded-lg overflow-hidden relative shadow-md">
                        <Image
                            src="/images/office-2.jpeg"
                            alt="Calm, private therapy space in Santa Monica"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12 p-8 bg-white rounded-lg border border-secondary-200">
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