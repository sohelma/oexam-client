import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
        <Hero></Hero>
        <HowItWorks />
        <About/>
      </main>
      <Footer/>
    </div>
  );
}
