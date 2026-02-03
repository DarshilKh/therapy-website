// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#specialties", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#office", label: "Office" },
        { href: "#faq", label: "FAQ" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50
        bg-secondary-50
        transition-shadow duration-300
        ${isScrolled ? "shadow-sm" : ""}
      `}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between py-5 md:py-6">
                    {/* Site Name */}
                    <a
                        href="#hero"
                        className="font-heading text-xl md:text-2xl text-primary-900 hover:text-primary-700 transition-colors"
                    >
                        Dr. Maya Reynolds
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-primary-700 hover:text-accent-600 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="
                px-5 py-2.5
                bg-accent-600
                text-white
                text-sm
                font-medium
                hover:bg-accent-700
                transition-colors
                rounded-sm
              "
                        >
                            Book Consultation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-primary-800 hover:text-primary-600 p-2"
                        aria-label="Toggle menu"
                        type="button"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-6 border-t border-secondary-200">
                        <div className="pt-4 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-primary-700 hover:text-accent-600 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="
                  block
                  mt-4
                  px-5 py-3
                  bg-accent-600
                  text-white
                  text-center
                  font-medium
                  hover:bg-accent-700
                  transition-colors
                "
                            >
                                Book Consultation
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}