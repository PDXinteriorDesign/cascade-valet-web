
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const ServiceModal = ({ open, onOpenChange, title, children }: ServiceModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl w-full rounded-lg p-0 bg-white">
      <DialogHeader className="p-6 px-8 border-b">
        <DialogTitle className="text-2xl text-cascade-green">{title}</DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" className="absolute right-4 top-4 text-cascade-green hover:text-cascade-darkGreen">Close</Button>
        </DialogClose>
      </DialogHeader>
      <div className="p-6 px-8 overflow-y-auto max-h-[70vh]">{children}</div>
    </DialogContent>
  </Dialog>
);

export default ServiceModal;

