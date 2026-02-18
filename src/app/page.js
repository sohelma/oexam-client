import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";
import Services from "@/components/home/Hero/Services";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Pricing from "@/components/home/Pricing/Pricing";
import Features from "@/components/home/Feature/Features";
import Commitment from "@/components/home/Commitment/Commitment";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Hero></Hero>
        <HowItWorks />
        <About/>
        <Services></Services>
        <Pricing />
        <Features />
        <Commitment/>
      </main>
      <Footer />
    </div>
  );
}
