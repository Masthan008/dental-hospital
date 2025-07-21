
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// Logo is served from the public directory
const logoPath = "/images/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.team'), path: "/team" },
    { name: t('nav.patientInfo', 'Patient Info'), path: "/patient-info" },
    { name: t('nav.gallery'), path: "/gallery" },
    { name: t('nav.blog'), path: "/blog" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            <span className="flex items-center">
              <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              {t('hero.emergency')}: +1 (555) 123-4567
            </span>
            <span className="flex items-center">
              <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              {t('footer.hours')}: 8AM-6PM
            </span>
          </div>
          <div className="hidden md:flex items-center">
            <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            123 Dental Street, City, ST 12345
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <img 
              src={logoPath}
              alt="SmileCure Dental Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'text-xl font-bold text-blue-700';
                fallback.textContent = 'SmileCure Dental';
                target.parentNode?.insertBefore(fallback, target.nextSibling);
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => navigate("/booking")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-1.5 text-sm rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setIsOpen(false);
                    }}
                    className="text-left text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-1.5"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => {
                    navigate("/booking");
                    setIsOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white mt-4"
                >
                  Book Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
