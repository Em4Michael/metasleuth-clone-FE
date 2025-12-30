// src/app/page.tsx (Home page - now with proper layout and Tailwind styling to match MetaSleuth's dark, modern, neon-accented look)
import Header from "@/components/ui/Header";
import Hero from "@/features/home/components/Hero";
import UseCases from "@/features/home/components/UseCases";
import Features from "@/features/home/components/Features";
import Tools from "@/features/home/components/Tools";
import API from "@/features/home/components/API";
import Testimonials from "@/features/home/components/Testimonials";
import Footer from "@/components/ui/Footer";
import VideoHero from "../features/home/components/VideoHero"
import TrustedPartners from "../features/home/components/TrustedPartners"
import CTASection from "@/features/home/components/CTASection";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <VideoHero />
      <UseCases />
      <Features />
      <Tools />
      <API />
      <TrustedPartners />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}