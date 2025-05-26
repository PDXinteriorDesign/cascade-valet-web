
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ServiceModal from "./ServiceModal";

interface ServiceModalsProps {
  openService: string | null;
  onServiceClose: () => void;
}

const ServiceModals = ({ openService, onServiceClose }: ServiceModalsProps) => {
  return (
    <>
      {/* Valet Trash Modal */}
      <ServiceModal
        open={openService === "valetTrash"}
        onOpenChange={onServiceClose}
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
          <Button 
            className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4"
            onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request - Valet Trash Service'}
          >
            Request a Quote
          </Button>
        </div>
      </ServiceModal>

      {/* Trash Out Modal */}
      <ServiceModal
        open={openService === "trashOut"}
        onOpenChange={onServiceClose}
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
              <Button 
                className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white"
                onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request - One Time Pickup'}
              >
                Request Pickup
              </Button>
            </Card>
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-3 text-cascade-green">Trash Out Services</h4>
              <p className="text-cascade-slate font-medium mb-2">Evicted Resident? Abandoned Property?</p>
              <p className="text-cascade-slate">
                If a vacated or evicted resident left belongings, Cascade Bin Butlers can help. Our crew removes all large furniture and ensures safe, complete disposal.
              </p>
              <Button 
                className="mt-4 w-full bg-cascade-green hover:bg-cascade-darkGreen text-white"
                onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request - Trash Out Service'}
              >
                Get a Quote
              </Button>
            </Card>
          </div>
        </div>
      </ServiceModal>

      {/* Bulk Hauling Modal */}
      <ServiceModal
        open={openService === "bulkHauling"}
        onOpenChange={onServiceClose}
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
          <Button 
            className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4"
            onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request - Bulk Hauling Service'}
          >
            Request a Quote
          </Button>
        </div>
      </ServiceModal>

      {/* Pressure Washing Modal */}
      <ServiceModal
        open={openService === "pressureWashing"}
        onOpenChange={onServiceClose}
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
                Maintain your property's appearance on your timeline. We'll set a rate and schedule, then keep your property clean and cared for, visit after visit.
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
          <Button 
            className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white mt-4"
            onClick={() => window.location.href = 'mailto:info@cascadebinbutlers.com?subject=Quote Request - Pressure Washing Service'}
          >
            Request a Quote
          </Button>
        </div>
      </ServiceModal>
    </>
  );
};

export default ServiceModals;
