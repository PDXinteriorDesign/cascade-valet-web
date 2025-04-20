
import React from "react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section id="contact" className="py-16 bg-cascade-green">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
          Try Our Service Free for 1 Week
        </h2>
        <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
          Experience the difference doorstep trash collection makes for your community.
          No commitment required.
        </p>
        <Button
          size="lg"
          className="bg-white hover:bg-cascade-ivory text-cascade-green font-bold py-3 px-8 text-lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
