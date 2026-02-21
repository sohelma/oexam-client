import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";
import Services from "@/components/home/Hero/Services";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Pricing from "@/components/home/Pricing/Pricing";
import Features from "@/components/home/Feature/Features";
import Commitment from "@/components/home/Commitment/Commitment";
import FAQ from "@/components/home/FAQ/FAQ";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import Integration from "@/components/home/Integration/Integration";
import StatsSection from "@/components/home/States/States";
import NewsletterCTA from "@/components/home/NewsletterCTA/NewsletterCTA";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* banner to create first impression */}
        <Hero />

        {/* why we? */}
        <Features />
        <About />

        {/* useing system & service */}
        <HowItWorks />
        <Services />

        {/* Trust */}
        <StatsSection />
        <Integration />
        <Commitment />

        {/* Decision */}
        <Pricing />
        <Testimonials />

        {/* support and closing */}
        <FAQ />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
