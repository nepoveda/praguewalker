import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Philosophy from "@/app/components/Philosophy";
import Usps from "@/app/components/Usps";
import Tours from "@/app/components/Tours";
import Faq from "@/app/components/Faq";
import Reviews from "@/app/components/Reviews";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <> 
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Usps />
        <Tours />
        <Faq />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
