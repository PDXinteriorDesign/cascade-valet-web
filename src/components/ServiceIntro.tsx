
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ServiceIntro = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-cascade-green/10 rounded-full z-0"></div>
          <img
            src="/lovable-uploads/01712071-758f-42d8-8fec-2a19b4def486.png"
            alt="Cascade Bin Butlers Premium Valet Trash Service Logo"
            className="rounded-lg shadow-xl w-full h-[500px] object-contain relative z-10 bg-cascade-green"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cascade-green/10 rounded-full z-0"></div>
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-cascade-green mb-6 font-playfair">
          Premium Valet Trash & Bulk Removal
        </h2>
        <p className="text-cascade-slate mb-8 text-lg">
          Comprehensive waste support services: doorstep trash pickup, recycling, bulk trash, trash outs, and more—all delivered with local care.
        </p>
        <Button
          size="lg"
          className="bg-cascade-green hover:bg-cascade-darkGreen text-white"
          onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request'}
        >
          Request a Quote
        </Button>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
            <span>Weekly Reports</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
            <span>Recycling Programs Included</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
            <span>Fully Licensed and Insured</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
            <span>Background Checked Staff</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
            <span>Doorstep Pickup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
