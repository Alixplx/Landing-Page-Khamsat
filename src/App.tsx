import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
