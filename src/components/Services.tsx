
import React, { useState } from "react";
import { Trash, Home, Truck, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";
import ServiceIntro from "./ServiceIntro";
import ServiceModals from "./ServiceModals";
import PropertyTypes from "./PropertyTypes";

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
        <ServiceIntro />

        {/* Service Categories Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-cascade-green mb-12 font-playfair">
            Comprehensive Waste Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                brief={service.brief}
                onLearnMore={handleServiceOpen}
              />
            ))}
          </div>
        </div>

        {/* Service Modals */}
        <ServiceModals openService={openService} onServiceClose={handleServiceClose} />

        {/* Property Types Section */}
        <PropertyTypes />
      </div>
    </section>
  );
};

export default Services;
