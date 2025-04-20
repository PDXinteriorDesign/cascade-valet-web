
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
              Premium Valet Trash Service
            </h2>
            <p className="text-cascade-slate mb-8 text-lg">
              At Cascade Bin Butlers, we provide a discreet, reliable valet trash service that 
              enhances the living experience in your community. Our professional staff collects 
              trash from residents' doorsteps three times per week, maintaining the cleanliness 
              and appeal of your property.
            </p>
            <div className="bg-cascade-ivory p-6 rounded-lg border-l-4 border-cascade-green">
              <h3 className="font-bold text-xl mb-4 text-cascade-green">How It Works:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cascade-green mr-3 mt-1">✓</span>
                  <span>Residents place tied trash bags outside their door during designated hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cascade-green mr-3 mt-1">✓</span>
                  <span>Our uniformed staff quietly collects bags three times per week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cascade-green mr-3 mt-1">✓</span>
                  <span>No bins required — we handle everything with professional care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cascade-green mr-3 mt-1">✓</span>
                  <span>Service times are customized to your community's needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

