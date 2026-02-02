// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Specialties from "@/components/Specialties";
import EmotionalValidation from "@/components/EmotionalValidation";
import About from "@/components/About";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import FullWidthCTA from "@/components/FullWidthCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Intro />
                <Specialties />
                <EmotionalValidation />
                <About />
                <OurOffice />
                <FAQ />
                <ProfessionalBackground />
                <FullWidthCTA />
            </main>

            <Footer />
        </>
    );
}