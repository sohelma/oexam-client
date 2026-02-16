import Hero from "@/components/home/Hero/Hero";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
         <Hero></Hero>
      </main>
      <Footer/>
    </div>
  );
}
