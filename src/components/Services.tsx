
import React from "react";
import { Button } from "@/components/ui/button";
import { Trash, Home, CheckCircle, Truck, Sparkles } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Service Introduction */}
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
              Comprehensive waste support services. Including doorstep trash pickup and recycling, 
              bulk trash pickup, trashouts, and more.
            </p>
            <Button
              size="lg"
              className="bg-cascade-green hover:bg-cascade-darkGreen text-white"
            >
              Request a Quote
            </Button>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                <span>Nightly Service Reports</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                <span>Recycling Programs Included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                <span>Pet Waste Stations</span>
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

        {/* Service Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-cascade-green mb-12 font-playfair">
            Comprehensive waste support services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Trash className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Valet Trash</h3>
              <p className="text-cascade-slate text-center mb-6">
                Professional doorstep collection three times weekly, maintaining clean hallways and common areas.
              </p>
              <div className="text-center">
                <Button variant="outline" className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Home className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Trash Out</h3>
              <p className="text-cascade-slate text-center mb-6">
                Complete removal of all trash and debris from vacant units, preparing them for new residents.
              </p>
              <div className="text-center">
                <Button variant="outline" className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Truck className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Bulk Hauling</h3>
              <p className="text-cascade-slate text-center mb-6">
                Efficient removal of large items and waste leveling services to keep your dumpster areas clean.
              </p>
              <div className="text-center">
                <Button variant="outline" className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Pressure Washing</h3>
              <p className="text-cascade-slate text-center mb-6">
                Professional cleaning of dumpster areas and community spaces to maintain a clean appearance.
              </p>
              <div className="text-center">
                <Button variant="outline" className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types Section */}
        <div className="mt-20 bg-cascade-ivory rounded-xl p-10">
          <h2 className="text-3xl font-bold text-center text-cascade-green mb-12 font-playfair">
            Valet trash services for multifamily residential communities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-cascade-green/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cascade-green mb-3">Apartments</h3>
                <p className="text-cascade-slate mb-6">
                  Multi-Family Apartment Complexes
                </p>
                <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
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
                <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                  Get a Quote
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-cascade-green/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cascade-green mb-3">College Residents</h3>
                <p className="text-cascade-slate mb-6">
                  Student Housing and Campus Dorm Communities
                </p>
                <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
