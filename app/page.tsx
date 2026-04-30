import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Philosophy from "@/app/components/Philosophy";
import Usps from "@/app/components/Usps";
import Tours from "@/app/components/Tours";
import Faq from "@/app/components/Faq";
import Reviews from "@/app/components/Reviews";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

import Head from 'next/head';

export default function Home() {
  return (
    <> 
      <Head>
        <title>Prague Walker</title>
        <meta property="og:title" content="Prague Walker" />
        <meta property="og:description" content="Explore Prague with our guided tours." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://praguewalker.example.com" />
      </Head>
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
