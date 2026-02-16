import Hero from "@/components/home/Hero/Hero";
import Navbar from "@/components/shared/Navbar/Navbar";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
         <Hero></Hero>
      </main>
    </div>
  );
}
