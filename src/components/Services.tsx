import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Home, CheckCircle, Truck, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import ServiceModal from "./ServiceModal";

const SERVICES = [
  {
    id: "valetTrash",
    icon: <Trash className="h-8 w-8 text-cascade-green" />,
    title: "Valet Trash",
    brief: "Premium doorstep trash & recycling collection three times weekly for multifamily communities.",
  },
  {
    id: "trashOut",
    icon: <Home className="h-8 w-8 text-cascade-green" />,
    title: "Trash Out",
    brief: "Complete removal of trash and junk from units, saving your team time and reducing risk.",
  },
  {
    id: "bulkHauling",
    icon: <Truck className="h-8 w-8 text-cascade-green" />,
    title: "Bulk Hauling",
    brief: "Efficient removal of large items and waste leveling to keep dumpsters accessible.",
  },
  {
    id: "pressureWashing",
    icon: <Sparkles className="h-8 w-8 text-cascade-green" />,
    title: "Pressure Washing",
    brief: "Professional cleaning for community spaces, enhancing curb appeal and cleanliness.",
  },
];

const Services = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  const handleServiceOpen = (service: string) => setOpenService(service);
  const handleServiceClose = () => setOpenService(null);

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
              Comprehensive waste support services: doorstep trash pickup, recycling, bulk trash, trash outs, and more—all delivered with local care.
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

        {/* Service Categories Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-cascade-green mb-12 font-playfair">
            Comprehensive Waste Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">{service.title}</h3>
                <p className="text-cascade-slate text-center mb-6">{service.brief}</p>
                <div className="text-center">
                  <Button
                    onClick={() => handleServiceOpen(service.id)}
                    variant="outline"
                    className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Modals */}
        <ServiceModal
          open={openService === "valetTrash"}
          onOpenChange={handleServiceClose}
          title="About Valet Trash"
        >
          <div className="space-y-6">
            <p className="text-cascade-slate">
              Door-to-door scheduled trash & recycling collection for multifamily communities. Valet trash and recycling is a premium amenity, designed to simplify waste management at your property. Our Cascade Bin Butlers walk doorstep to doorstep, collecting trash and recyclables for safe, clean disposal in your on-site facilities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">For Residents</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>No more long walks to the dumpsters at night or in bad weather</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Cleaner hallways, better community curb appeal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Crime deterrent</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">For Property Managers</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Increase net operating income</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>A trained maintenance member at every doorstep</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Maintenance of property appearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Boost lease renewals</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="bg-cascade-ivory p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-cascade-green">Why Cascade Bin Butlers?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Nationwide availability</span>
                    <p className="text-sm text-cascade-slate">Growing our footprint without sacrificing quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">99% show up rate</span>
                    <p className="text-sm text-cascade-slate">We show up when we say we will, every time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">5–7 day service options</span>
                    <p className="text-sm text-cascade-slate">Valet, bulk, trash outs—all on your schedule.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Recycling Programs Included</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Fully Licensed and Insured</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Background Checked Staff</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Doorstep Pickup</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Weekly Reports</span>
                  </div>
                </li>
              </ul>
            </div>
            <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4">
              Request a Quote
            </Button>
          </div>
        </ServiceModal>

        <ServiceModal
          open={openService === "trashOut"}
          onOpenChange={handleServiceClose}
          title="Trash Out Service"
        >
          <div className="space-y-6">
            <p className="text-cascade-slate">
              This service is perfect for units left a total mess or with large junk near dumpsters. Save your staff time and reduce risk: Cascade Bin Butlers will safely remove all items, quickly and reliably.
            </p>
            <p className="text-cascade-slate">
              Whether it's on a routine schedule or a one-time pickup, we remove junk from your property or individual units—priced affordably and performed promptly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">One Time Pick Up</h4>
                <p className="text-cascade-slate font-medium mb-2">You Call Us as You Need Us!</p>
                <p className="text-cascade-slate">
                  Perfect for properties that only occasionally have unwanted items. We charge per item and haul junk away within 72 hours or less from your call.
                </p>
                <Button className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                  Request Pickup
                </Button>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">Trash Out Services</h4>
                <p className="text-cascade-slate font-medium mb-2">Evicted Resident? Abandoned Property?</p>
                <p className="text-cascade-slate">
                  If a vacated or evicted resident left belongings, Cascade Bin Butlers can help. Our crew removes all large furniture and ensures safe, complete disposal.
                </p>
                <Button className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                  Get a Quote
                </Button>
              </Card>
            </div>
          </div>
        </ServiceModal>

        <ServiceModal
          open={openService === "bulkHauling"}
          onOpenChange={handleServiceClose}
          title="Avoid Dumpster Weight Fees"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cascade-green">
              Bulk Trash Hauling and Waste Leveling for Residential Complexes
            </h3>
            <p className="text-cascade-slate">
              Dumpster weight fees ("overage" or "tonnage" fees) can wreck your budget. Cascade Bin Butlers maximize your dumpster capacity through expert trash leveling and hauling—so you avoid unnecessary costs.
            </p>
            <div className="bg-cascade-ivory p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-cascade-green">No more dumpster weight fees!</h4>
              <h5 className="font-medium text-cascade-slate mb-2">How does it work?</h5>
              <p className="text-cascade-slate">
                We use equipment and techniques to redistribute and compress waste—maximizing usable space in every dumpster. If containers are filled haphazardly, they appear full too soon, driving up costs and service frequency.
              </p>
              <p className="text-cascade-slate mt-3">
                Our service ensures dumpsters are always efficient and accessible: reducing your pickups and avoiding fees.
              </p>
            </div>
            <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4">
              Request a Quote
            </Button>
          </div>
        </ServiceModal>

        <ServiceModal
          open={openService === "pressureWashing"}
          onOpenChange={handleServiceClose}
          title="Power Washing Services"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cascade-green">
              Recurring or One-Time Pressure Washing for Residential Buildings
            </h3>
            <p className="text-cascade-slate">
              Power washing uses high-pressure water to remove dirt, mold, and more from your residential exteriors. We serve apartments, condos, assisted and senior living facilities, and college dorms.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">Recurring Power Washing</h4>
                <p className="text-cascade-slate font-medium mb-2">Set Your Schedule—We Handle the Rest</p>
                <p className="text-cascade-slate">
                  Maintain your property’s appearance on your timeline. We'll set a rate and schedule, then keep your property clean and cared for, visit after visit.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">One-Time Power Washing</h4>
                <p className="text-cascade-slate font-medium mb-2">Call Us When You Need Us</p>
                <p className="text-cascade-slate">
                  Unsure how often you need it? Schedule as needed—usually within 72 hours or less, priced by your property specs.
                </p>
              </Card>
            </div>
            <div className="bg-cascade-ivory p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-cascade-green">What Can Be Power Washed?</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Exterior Buildings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Patios / Balconies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Courtyards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Parking Lots</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Dumpster Areas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Playgrounds</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Sidewalks</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4">
              Request a Quote
            </Button>
          </div>
        </ServiceModal>

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
                <h3 className="text-xl font-bold text-cascade-green mb-3">Townhomes & Multi-Family</h3>
                <p className="text-cascade-slate mb-6">
                  Gated Communities, Townhouse Complexes, and Mixed-Use Residential Developments
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
