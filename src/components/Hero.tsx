
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[340px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cascade-green/80 to-cascade-slate/50 backdrop-blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in">
          Doorstep Trash Pickup for Communities That Care
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto animate-slide-up">
          Quiet. Reliable. Locally Owned.
        </p>
        <Button
          size="lg"
          className="bg-white text-cascade-green hover:bg-cascade-ivory font-bold py-3 px-8 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
        >
          Schedule Free Trial
        </Button>
      </div>

      {/* SVG Curve at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 md:h-24 lg:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C273.178 89.8366 630.678 119.053 1440 0V90H0V0Z"
            fill="#fff"
          />
        </svg>
      </div>
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
