import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Home, CheckCircle, Truck, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ServiceModal from "./ServiceModal";

const ServiceDetail = ({ 
  title, 
  isOpen, 
  onToggle, 
  children 
}: { 
  title: string; 
  isOpen: boolean; 
  onToggle: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-left p-4 bg-cascade-green/10 rounded-t-lg">
        <h4 className="text-xl font-semibold text-cascade-green">{title}</h4>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-cascade-green" />
        ) : (
          <ChevronDown className="h-5 w-5 text-cascade-green" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-white p-6 border border-t-0 border-cascade-green/20 rounded-b-lg">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

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

        {/* Service Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-cascade-green mb-12 font-playfair">
            Comprehensive waste support services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Valet Trash Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Trash className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Valet Trash</h3>
              <p className="text-cascade-slate text-center mb-6">
                Professional doorstep collection three times weekly, maintaining clean hallways and common areas.
              </p>
              <div className="text-center">
                <Button 
                  onClick={() => handleServiceOpen('valetTrash')} 
                  variant="outline"
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Trash Out Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Home className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Trash Out</h3>
              <p className="text-cascade-slate text-center mb-6">
                Complete removal of all trash and debris from vacant units, preparing them for new residents.
              </p>
              <div className="text-center">
                <Button 
                  onClick={() => handleServiceOpen('trashOut')} 
                  variant="outline"
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Bulk Hauling Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Truck className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Bulk Hauling</h3>
              <p className="text-cascade-slate text-center mb-6">
                Efficient removal of large items and waste leveling services to keep your dumpster areas clean.
              </p>
              <div className="text-center">
                <Button 
                  onClick={() => handleServiceOpen('bulkHauling')} 
                  variant="outline"
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Pressure Washing Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-8 w-8 text-cascade-green" />
              </div>
              <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">Pressure Washing</h3>
              <p className="text-cascade-slate text-center mb-6">
                Professional cleaning of dumpster areas and community spaces to maintain a clean appearance.
              </p>
              <div className="text-center">
                <Button 
                  onClick={() => handleServiceOpen('pressureWashing')} 
                  variant="outline"
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Modals for Each Service */}
        <ServiceModal open={openService === 'valetTrash'} onOpenChange={handleServiceClose} title="About Valet Trash">
          <div className="space-y-6">
            <p className="text-cascade-slate">
              Door-to-door scheduled trash and recycling pickup for multifamily communities. Valet trash and recycling is a premium amenity for residents, designed to streamline and simplify waste processes at your property. Our Cascade Bin Butlers walk doorstep to doorstep, collecting trash and recyclables to safely and cleanly dispose of them in your onsite waste facilities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">For Residents</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>No need to make long walks to dumpsters at night or in bad weather</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Cleaner hallways and better curb appeal</span>
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
                    <span>A trained maintenance member on every doorstep</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Maintenance of property appearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Increase in lease renewals</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="bg-cascade-ivory p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-cascade-green">Why Choose Cascade Bin Butlers?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Nationwide availability</span>
                    <p className="text-sm text-cascade-slate">We're committed to growing our footprint without sacrificing quality service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">99% show up rate</span>
                    <p className="text-sm text-cascade-slate">The stats don’t lie. We show up when we say we will—short and simple.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">5–7 day service options</span>
                    <p className="text-sm text-cascade-slate">Valet, bulk, trash outs—we do it all on a schedule that works for you.</p>
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
              </ul>
            </div>
            <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4">
              Request a Quote
            </Button>
          </div>
        </ServiceModal>
        <ServiceModal open={openService === 'trashOut'} onOpenChange={handleServiceClose} title="Trash Out Service">
          <div className="space-y-6">
            <p className="text-cascade-slate">
              This service is perfect for units left a total mess or with large junk by residents that needs to be removed near dumpsters. This saves your maintenance staff from needing to break down furniture and clean out units, reducing risk of injury lifting heavy items into trash bins. Our Cascade Bin Butlers staff will safely and promptly remove the items.
            </p>
            <p className="text-cascade-slate">
              Whether it's ROUTINE SCHEDULE or a ONE TIME PICK UP, we will remove junk from your property or individual units.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">One Time Pick Up</h4>
                <p className="text-cascade-slate font-medium">You Call Us as You Need Us!</p>
                <p className="text-cascade-slate mt-2">
                  Great for properties that only occasionally have items left on the property. We charge per item and in most cases, junk is hauled away within 72 hours or less from your call.
                </p>
                <Button className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                  Request Pickup
                </Button>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">Trash Out Services</h4>
                <p className="text-cascade-slate font-medium">Evicted Resident? Abandoned Property?</p>
                <p className="text-cascade-slate mt-2">
                  Whether a vacated property or evicted resident left belongings behind, Cascade Bin Butlers can help. Our crew will remove all large furniture and bag loose items to safely dispose of them.
                </p>
                <Button className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                  Get a Quote
                </Button>
              </Card>
            </div>
          </div>
        </ServiceModal>
        <ServiceModal open={openService === 'bulkHauling'} onOpenChange={handleServiceClose} title="Avoid Dumpster Weight Fees">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cascade-green">
              Bulk Trash Hauling and Waste Leveling for Residential Complexes
            </h3>
            <p className="text-cascade-slate">
              Dumpster weight fees, sometimes called "overage" or "tonnage" fees, are extra charges when a dumpster exceeds its specified weight limit. This impacts your monthly budget. Our professional trash levelers and haulers can be a cost-effective solution.
            </p>
            <div className="bg-cascade-ivory p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-cascade-green">No more dumpster weight fees!</h4>
              <h5 className="font-medium text-cascade-slate mb-2">What is the Benefit of Bulk Trash Hauling and Waste Leveling?</h5>
              <p className="text-cascade-slate">
                Cascade Bin Butlers specializes in maximizing the capacity of waste containers by leveling and compacting trash.
              </p>
              <p className="text-cascade-slate mt-3">
                If dumpsters are filled haphazardly, they fill prematurely and increase your costs. Our team uses equipment and techniques to redistribute and compress waste, maximizing usable space.
              </p>
              <p className="text-cascade-slate mt-3">
                This ensures every inch of your dumpster is utilized—reducing waste pickups and so avoiding unnecessary fees.
              </p>
            </div>
            <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4">
              Request a Quote
            </Button>
          </div>
        </ServiceModal>
        <ServiceModal open={openService === 'pressureWashing'} onOpenChange={handleServiceClose} title="Power Washing Services">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cascade-green">
              Recurring or One-Time Pressure Washing for Residential Buildings
            </h3>
            <p className="text-cascade-slate">
              Power washing uses pressurized water to remove dirt, mold, mildew, algae, stains, and other contaminants from residential building exteriors. We service apartment complexes, condos, assisted living, senior living, and college dorms.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">Reoccurring Power Washing</h4>
                <p className="text-cascade-slate font-medium">Schedule Recurring Pressure Washing</p>
                <p className="text-cascade-slate mt-2">
                  Maintain your residential complex's appearance on a schedule. We'll set a rate and schedule based on your needs—then handle the rest so you don't have to think about it.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-3 text-cascade-green">One-Time Power Washing</h4>
                <p className="text-cascade-slate font-medium">You Call Us When You Need Us</p>
                <p className="text-cascade-slate mt-2">
                  Great for properties unsure how often they need this service. Call us and we can be out within 72 hours or less—charged by your property's size and needs.
                </p>
              </Card>
            </div>
            <div className="bg-cascade-ivory p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-cascade-green">What Can Be Power Washed?</h4>
              <p className="text-cascade-slate mb-3">
                Exterior buildings—plus patios, balconies, courtyards, parking lots, dumpster areas, playgrounds, sidewalks, and more.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Patio/Balcony</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Courtyard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Parking Lot</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Dumpster Trash Area</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Playground</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-cascade-green mr-2 h-5 w-5" />
                  <span>Sidewalk</span>
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
