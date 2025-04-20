
import React from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="py-20 bg-cascade-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cascade-green mb-4 font-playfair">
              Request Your Free Trial
            </h2>
            <p className="text-cascade-slate">
              Fill out the form below and our team will contact you within one business day to
              schedule your free trial week.
            </p>
          </div>
          
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-cascade-slate mb-2"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cascade-green"
                  required
                />
              </div>
              
              {/* Property Name Field */}
              <div>
                <label
                  htmlFor="property"
                  className="block text-sm font-medium text-cascade-slate mb-2"
                >
                  Property Name*
                </label>
                <input
                  type="text"
                  id="property"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cascade-green"
                  required
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-cascade-slate mb-2"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cascade-green"
                  required
                />
              </div>
              
              {/* Number of Units Field */}
              <div>
                <label
                  htmlFor="units"
                  className="block text-sm font-medium text-cascade-slate mb-2"
                >
                  Number of Units*
                </label>
                <input
                  type="number"
                  id="units"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cascade-green"
                  required
                />
              </div>
            </div>
            
            {/* Message Field */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-cascade-slate mb-2"
              >
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cascade-green"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-cascade-green hover:bg-cascade-darkGreen text-white font-bold py-3"
              >
                Request Free Trial
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
