import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "@/components/ui/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center">
            <Image 
              src="/cascade-bin-butlers-logo.png" 
              alt="Cascade Bin Butlers Logo" 
              width={200} 
              height={60}
              className={cn(
                "transition-all duration-300",
                isScrolled ? "filter brightness-100" : "filter brightness-0 invert"
              )}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className={cn(
            "transition-colors hover:text-cascade-green font-medium",
            isScrolled ? "text-cascade-slate" : "text-white"
          )}>
            Home
          </a>
          <a href="#services" className={cn(
            "transition-colors hover:text-cascade-green font-medium",
            isScrolled ? "text-cascade-slate" : "text-white"
          )}>
            Services
          </a>
          <a href="#benefits" className={cn(
            "transition-colors hover:text-cascade-green font-medium",
            isScrolled ? "text-cascade-slate" : "text-white"
          )}>
            Benefits
          </a>
          <a href="#contact" className={cn(
            "transition-colors hover:text-cascade-green font-medium",
            isScrolled ? "text-cascade-slate" : "text-white"
          )}>
            Contact
          </a>
          <Button
            size="sm"
            className="bg-cascade-green hover:bg-cascade-darkGreen text-white ml-4"
          >
            Free Trial
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center"
          aria-label="Open mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={isScrolled ? "#2c5f2d" : "white"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-cascade-slate hover:text-cascade-green font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-cascade-slate hover:text-cascade-green font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="text-cascade-slate hover:text-cascade-green font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="text-cascade-slate hover:text-cascade-green font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              size="sm"
              className="bg-cascade-green hover:bg-cascade-darkGreen text-white w-full"
            >
              Free Trial
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
