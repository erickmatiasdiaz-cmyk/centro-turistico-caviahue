import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Extras from "@/components/Extras";
import Gallery from "@/components/Gallery";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowToBook from "@/components/HowToBook";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import CafeteriaSection from "@/components/CafeteriaSection";



export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Accommodations />
        <Extras />       
        <Gallery />
        <LocationSection />
        <TestimonialsSection />
        <HowToBook />        
        <CTASection />
        <CafeteriaSection />
        <Policies />
      </main>
      <Footer />
    </>
  );
}
