
import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  brief: string;
  onLearnMore: (serviceId: string) => void;
}

const ServiceCard = ({ id, icon, title, brief, onLearnMore }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cascade-green transition-transform hover:scale-105">
      <div className="w-16 h-16 bg-cascade-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-cascade-slate text-center mb-4">{title}</h3>
      <p className="text-cascade-slate text-center mb-6">{brief}</p>
      <div className="text-center">
        <Button
          onClick={() => onLearnMore(id)}
          variant="outline"
          className="border-cascade-green text-cascade-green hover:bg-cascade-green hover:text-white"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
