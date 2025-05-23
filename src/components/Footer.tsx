
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cascade-slate text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Cascade Bin Butlers</h3>
            <p className="mb-6">
              Premium valet trash service for apartments, HOAs, and condos in Vancouver, WA.
              Doorstep trash pickup that's quiet, reliable, and locally owned.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cascade-ivory transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cascade-ivory transition-colors">Services</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-cascade-ivory transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cascade-ivory transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Vancouver, WA</p>
              <p className="mb-2">
                <a href="tel:+15032085299" className="hover:text-cascade-ivory transition-colors">
                  (503) 208-5299
                </a>
              </p>
              <p>
                <a href="mailto:info@cascadebinbutlers.com" className="hover:text-cascade-ivory transition-colors">
                  info@cascadebinbutlers.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Cascade Bin Butlers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-cascade-ivory transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-cascade-ivory transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
