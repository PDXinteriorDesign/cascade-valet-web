
import React from "react";
import { Check, Home, Trash, BadgeCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-cascade-ivory">
      <div className="container mx-auto px-4 md:px-6">
        {/* Why Property Managers Love Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cascade-green mb-8 font-playfair">
            Why Property Managers Love Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-cascade-green/10 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cascade-slate">Reduced Maintenance Burden</h3>
              <p className="text-cascade-slate">
                Our service eliminates trash overflow issues, reducing the workload on your maintenance staff
                and keeping common areas cleaner.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-cascade-green/10 rounded-full flex items-center justify-center">
                <Trash className="w-8 h-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cascade-slate">Cleaner Shared Spaces</h3>
              <p className="text-cascade-slate">
                With regular collection directly from residents' doors, trash doesn't pile up in
                hallways or around dumpsters, enhancing property appeal.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-cascade-green/10 rounded-full flex items-center justify-center">
                <BadgeCheck className="w-8 h-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cascade-slate">Trusted Local Ownership</h3>
              <p className="text-cascade-slate">
                As a locally owned Vancouver business, we provide personal attention and responsive
                service that national companies can't match.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width Benefits Highlight */}
        <div className="bg-cascade-green text-white rounded-xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-playfair">
            Services Designed for Community Living
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>3x Weekly Collection Schedule</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>No Bins Required</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Professional Uniformed Staff</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Flexible Service Hours</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Electronic Service Verification</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Fully Insured & Background Checked</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Holiday Schedule Accommodation</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Property Manager Dashboard</p>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>Same Day Issue Resolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
