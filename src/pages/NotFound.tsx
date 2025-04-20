
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found | Cascade Bin Butlers";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-cascade-ivory py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-cascade-green mb-6 font-playfair">404</h1>
          <p className="text-2xl md:text-3xl text-cascade-slate mb-8">
            Oops! We couldn't find that page
          </p>
          <p className="text-cascade-slate mb-10 max-w-md mx-auto">
            The page you're looking for may have been moved or doesn't exist.
            Let's get you back on track.
          </p>
          <Button
            size="lg"
            className="bg-cascade-green hover:bg-cascade-darkGreen text-white"
            asChild
          >
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
