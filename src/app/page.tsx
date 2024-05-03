import Navbar from "@/components/ui/layout/Navbar";
import Hero from "@/components/ui/body/Hero";
import About from "@/components/ui/body/About";
import Works from "@/components/ui/body/Works";
import Services from "@/components/ui/body/Services";
import Footer from "@/components/ui/layout/Footer";
import VerticalLines from "@/components/ui/assets/VerticalLines";
import CustomCursor from "@/components/ui/assets/CustomCursor";
import Loader from "@/components/ui/assets/Loader";


export default function Home() {
  return (
    <>
    <Loader/>
    <main className="cursor-none">
      <CustomCursor />
      <VerticalLines/>
      {/* <FloatingEl/> */}
      <Navbar />
      <Hero />
      <About />
      <Works />   
      <Services /> 
      <Footer />
    </main>
     
    </>
  );
}
