// components/Footer.tsx
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950">
            {/* Top Section */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <h3 className="font-heading text-2xl text-white mb-4">
                            Dr. Maya Reynolds
                        </h3>
                        <p className="text-primary-400 text-sm leading-relaxed">
                            Licensed Clinical Psychologist specializing in anxiety, trauma,
                            and burnout therapy for high-achieving professionals.
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-primary-400">
                            <li>
                                <a
                                    href="mailto:hello@drmayareynolds.com"
                                    className="hover:text-accent-400 transition-colors"
                                >
                                    hello@drmayareynolds.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+13105551234"
                                    className="hover:text-accent-400 transition-colors"
                                >
                                    (310) 555-1234
                                </a>
                            </li>
                            <li className="pt-2 text-primary-500 text-sm">
                                123 Ocean Avenue, Suite 400
                                <br />
                                Santa Monica, CA 90401
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Hours */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
                            Office Hours
                        </h4>
                        <ul className="space-y-3 text-primary-400 text-sm">
                            <li className="flex justify-between">
                                <span>Monday – Thursday</span>
                                <span>9am – 6pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Friday</span>
                                <span>9am – 3pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday – Sunday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#specialties"
                                    className="text-primary-400 hover:text-accent-400 transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-primary-400 hover:text-accent-400 transition-colors"
                                >
                                    About Dr. Reynolds
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#office"
                                    className="text-primary-400 hover:text-accent-400 transition-colors"
                                >
                                    Our Office
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-primary-400 hover:text-accent-400 transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-primary-400 hover:text-accent-400 transition-colors"
                                >
                                    Book Consultation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black/20 py-6">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-500 text-sm">
                        <p>
                            © {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-primary-300 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-primary-300 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-primary-300 transition-colors">
                                Good Faith Estimate
                            </a>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-primary-600 text-xs mt-6 text-center md:text-left">
                        This website is for informational purposes only and does not constitute
                        medical advice. If you are in crisis, please call 988 (Suicide & Crisis Lifeline)
                        or go to your nearest emergency room.
                    </p>
                </div>
            </div>
        </footer>
    );
}