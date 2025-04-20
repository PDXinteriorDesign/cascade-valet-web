
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonial from "@/components/Testimonial";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // This helps with SEO by setting the document title
    document.title = "Cascade Bin Butlers | Premium Valet Trash Service Vancouver, WA";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonial />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
