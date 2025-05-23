
import React from "react";
import { Button } from "@/components/ui/button";

const PropertyTypes = () => (
  <div className="mt-20 bg-cascade-ivory rounded-xl p-10">
    <h2 className="text-3xl font-bold text-center text-cascade-green mb-12 font-playfair">
      Valet trash services for multifamily residential communities
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="/lovable-uploads/da7f83cc-f5f7-4a4b-87da-b63169161e9e.png" 
            alt="Modern apartment complex with multiple buildings and landscaped grounds, showcasing clean and well-maintained residential spaces" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-cascade-green mb-3">Apartments</h3>
          <p className="text-cascade-slate mb-6">
            Multi-Family Apartment Complexes
          </p>
          <Button 
            className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white"
            onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request for Apartment Complex'}
          >
            Get a Quote
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="/lovable-uploads/1066462b-52a9-4848-a1a5-641162492cc7.png" 
            alt="Elegant townhomes with attached garages, representing a modern multi-family residential development" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-cascade-green mb-3">Townhomes & Multi-Family</h3>
          <p className="text-cascade-slate mb-6">
            Gated Communities, Townhouse Complexes, and Mixed-Use Residential Developments
          </p>
          <Button 
            className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white"
            onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request for Townhomes/Multi-Family Property'}
          >
            Get a Quote
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-48 bg-cascade-green/20"></div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-cascade-green mb-3">Senior Living</h3>
          <p className="text-cascade-slate mb-6">
            Assisted Living Communities, Hospice Centers, and Senior Living
          </p>
          <Button 
            className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white"
            onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request for Senior Living Community'}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyTypes;
