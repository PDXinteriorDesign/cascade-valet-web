
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Home, CheckCircle, Truck, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

  const toggleService = (service: string) => {
    if (openService === service) {
      setOpenService(null);
    } else {
      setOpenService(service);
    }
  };

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
                  onClick={() => toggleService('valetTrash')} 
                  variant="outline" 
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  {openService === 'valetTrash' ? 'Show Less' : 'Learn More'}
                </Button>
              </div>
              
              {openService === 'valetTrash' && (
                <div className="mt-6">
                  <ServiceDetail 
                    title="About Valet Trash" 
                    isOpen={true} 
                    onToggle={() => {}}
                  >
                    <div className="space-y-6">
                      <p className="text-cascade-slate">
                        Door-to-door scheduled trash and recycling pickup for multifamily communities.
                        Valet trash and recycling is a premium amenity for residents, designed to streamline 
                        and simplify waste processes at your property.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4">
                          <h4 className="text-lg font-semibold mb-3 text-cascade-green">For Residents</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>No more long walks to dumpsters at night or in bad weather</span>
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
                        <h4 className="text-lg font-semibold mb-3 text-cascade-green">Why Choose Us?</h4>
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
                              <p className="text-sm text-cascade-slate">The stats don't lie. We show up when we say we will—short and simple.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-cascade-green mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">5–7 day service options</span>
                              <p className="text-sm text-cascade-slate">Valet, bulk, trash outs—we do it all on a schedule that works for you.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                        Request a Quote
                      </Button>
                    </div>
                  </ServiceDetail>
                </div>
              )}
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
                  onClick={() => toggleService('trashOut')} 
                  variant="outline" 
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  {openService === 'trashOut' ? 'Show Less' : 'Learn More'}
                </Button>
              </div>
              
              {openService === 'trashOut' && (
                <div className="mt-6">
                  <ServiceDetail 
                    title="Trash Out Service" 
                    isOpen={true} 
                    onToggle={() => {}}
                  >
                    <div className="space-y-6">
                      <p className="text-cascade-slate">
                        This service is perfect for those units that are left a total mess or large junk 
                        left by residents that needs to be removed near dumpsters. This saves maintenance 
                        staff from needing to break down furniture and cleaning out units, saving your team 
                        time and reducing their risk of injury lifting heavy items into trash bins.
                      </p>
                      
                      <p className="text-cascade-slate">
                        Our staff will come remove the items safely and in a timely manner. Whether it is a 
                        ROUTINE SCHEDULE or a ONE TIME PICK UP we will remove the junk from your property or 
                        individual units.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4">
                          <CardContent className="p-0">
                            <h4 className="text-lg font-semibold mb-3 text-cascade-green">One Time Pick Up</h4>
                            <p className="text-cascade-slate font-medium">You Call Us as You Need Us!</p>
                            <p className="text-cascade-slate mt-2">
                              This is a great option for smaller properties that only occasionally have items left 
                              on the property. We charge per item and in most cases, junk is hauled away within 72 
                              hours or less from the time you call.
                            </p>
                            <Button className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                              Request Pickup
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="p-4">
                          <CardContent className="p-0">
                            <h4 className="text-lg font-semibold mb-3 text-cascade-green">Trash Out Services</h4>
                            <p className="text-cascade-slate font-medium">Evicted Resident? Abandoned Property?</p>
                            <p className="text-cascade-slate mt-2">
                              Whether it is a vacated property or an evicted resident that left belongings behind, 
                              Cascade Bin Butlers can help. Our crew will come and remove all large furniture and bag 
                              loose items to safely dispose of them.
                            </p>
                            <Button className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                              Get a Quote
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </ServiceDetail>
                </div>
              )}
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
                  onClick={() => toggleService('bulkHauling')} 
                  variant="outline" 
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  {openService === 'bulkHauling' ? 'Show Less' : 'Learn More'}
                </Button>
              </div>
              
              {openService === 'bulkHauling' && (
                <div className="mt-6">
                  <ServiceDetail 
                    title="Avoid Dumpster Weight Fees" 
                    isOpen={true} 
                    onToggle={() => {}}
                  >
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-cascade-green">Bulk Trash Hauling and Waste Leveling for Residential Complexes</h3>
                      <p className="text-cascade-slate">
                        Dumpster weight fees, often referred to as "overage charges" or "tonnage fees", 
                        are additional fees charged by a city, municipality, or waste disposal company 
                        when a rented dumpster exceeds a specified weight limit.
                      </p>
                      <p className="text-cascade-slate">
                        As a property manager, these fees can negatively impact your monthly budget. 
                        If you are looking for ways to save money for your complex, hiring professional 
                        trash levelers could be a cost-effective choice.
                      </p>
                      
                      <div className="bg-cascade-ivory p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4 text-cascade-green">No more dumpster weight fees!</h4>
                        <h5 className="font-medium text-cascade-slate mb-2">What is the Benefit of Bulk Trash Hauling and Waste Leveling?</h5>
                        <p className="text-cascade-slate">
                          Cascade Bin Butlers specializes in maximizing the capacity of waste containers 
                          by ensuring that trash is evenly distributed and compacted.
                        </p>
                        <p className="text-cascade-slate mt-3">
                          Often, when dumpsters are filled haphazardly, they can quickly appear full even 
                          when there's still usable space. This premature filling can lead to increased 
                          waste disposal costs and inefficient use of resources.
                        </p>
                        <p className="text-cascade-slate mt-3">
                          Our Waste Leveling and Bulk Hauling team uses specialized equipment and techniques 
                          to redistribute the waste evenly within the container, compressing it to create 
                          more space for additional garbage.
                        </p>
                        <p className="text-cascade-slate mt-3">
                          By ensuring that every inch of the dumpster is effectively utilized, property 
                          managers now have an eco-friendly and cost-effective solution. Now reducing the 
                          frequency of waste pickups and additional dumpster weight fees.
                        </p>
                      </div>
                      
                      <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                        Request a Quote
                      </Button>
                    </div>
                  </ServiceDetail>
                </div>
              )}
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
                  onClick={() => toggleService('pressureWashing')} 
                  variant="outline" 
                  className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
                >
                  {openService === 'pressureWashing' ? 'Show Less' : 'Learn More'}
                </Button>
              </div>
              
              {openService === 'pressureWashing' && (
                <div className="mt-6">
                  <ServiceDetail 
                    title="Power Washing Services" 
                    isOpen={true} 
                    onToggle={() => {}}
                  >
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-cascade-green">
                        Recurring or One-Time Pressure Washing for Residential Buildings
                      </h3>
                      <p className="text-cascade-slate">
                        Power washing, also known as pressure washing, is a cleaning method that uses 
                        pressurized water to remove dirt, mold, mildew, algae, stains, and other 
                        contaminants from the exterior surfaces of residential buildings.
                      </p>
                      
                      <p className="text-cascade-slate">
                        We service multifamily living facilities including apartment complexes, condominiums, 
                        assisted living facilities, senior living facilities, and college dorm buildings.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4">
                          <CardContent className="p-0">
                            <h4 className="text-lg font-semibold mb-3 text-cascade-green">Reoccurring Power Washing</h4>
                            <p className="text-cascade-slate font-medium">Schedule Reoccurring Pressure Washing</p>
                            <p className="text-cascade-slate mt-2">
                              This is a great option to maintain the appearance of your residential complex. 
                              We establish a rate based on your complex size and needs, show up on your desired 
                              dates, power wash the property in a timely manner, and according to your set 
                              schedule we will be out again without any needed assistance or added stress to you.
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="p-4">
                          <CardContent className="p-0">
                            <h4 className="text-lg font-semibold mb-3 text-cascade-green">One Time Power Washing</h4>
                            <p className="text-cascade-slate font-medium">You Call Us When You Need Us</p>
                            <p className="text-cascade-slate mt-2">
                              This is a great option for properties that aren't quite sure how often they need 
                              power washing on their building or property. Call us up when needed and we can be 
                              out within 72 hours or less! We charge based on the size and your exact property needs.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="bg-cascade-ivory p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-3 text-cascade-green">What Can Be Power Washed?</h4>
                        <p className="text-cascade-slate mb-3">
                          We can power wash more than the exterior of your residential buildings
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
                      
                      <Button className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white">
                        Request a Quote
                      </Button>
                    </div>
                  </ServiceDetail>
                </div>
              )}
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
