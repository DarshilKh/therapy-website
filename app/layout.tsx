// app/layout.tsx

import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

/* ================================================
   FONT CONFIGURATION

   Next.js 16 / React 19 compatible font loading
   ================================================ */
const headingFont = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-heading",
    display: "swap",
});

const bodyFont = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
    display: "swap",
});

/* ================================================
   METADATA (Next.js App Router)
   ================================================ */
export const metadata: Metadata = {
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
    description:
        "Licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy for high-achieving professionals. In-person sessions in Santa Monica and telehealth throughout California.",
};

/* ================================================
   ROOT LAYOUT
   ================================================ */
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
        <body className="antialiased font-body">
        {children}
        </body>
        </html>
    );
}