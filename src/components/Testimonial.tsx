
import React from "react";
import { cn } from "@/lib/utils";

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 mx-auto mb-6 text-cascade-green/30"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391C14.017 10.645 16.62 8 19.652 8v3.826c-.641 0-1.022.5-1.022 1.413V21h-4.613zm-7.983 0v-7.391C6.034 10.645 8.637 8 11.669 8v3.826c-.641 0-1.022.5-1.022 1.413V21H6.034z" />
          </svg>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-cascade-slate mb-8 font-playfair italic">
            "Cascade Bin Butlers has transformed our property management. Their reliable service has eliminated resident complaints about trash and given us one less thing to worry about."
          </blockquote>
          
          <div className="flex items-center justify-center mb-6">
            <div className={cn(
              "w-12 h-12 bg-cascade-green/20 rounded-full flex items-center justify-center text-cascade-green font-bold",
              "mr-4"
            )}>
              JD
            </div>
            <div className="text-left">
              <p className="font-bold text-cascade-green">Jane Doe</p>
              <p className="text-cascade-slate text-sm">Property Manager, Cedar Heights Apartments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
