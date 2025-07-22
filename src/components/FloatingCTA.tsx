
import { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, Instagram, Facebook, Youtube, X, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const floatingRef = useRef<HTMLDivElement>(null);

  // Set mounted state after component mounts to avoid SSR issues with animations
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Handle click outside to close the floating CTA
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (floatingRef.current && !floatingRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Toggle visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close the menu when scrolling up
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isMounted) return null;

  const primaryActions = [
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.location.href = "tel:+919494444027",
      color: "bg-blue-600 hover:bg-blue-700",
      hoverColor: "hover:bg-blue-700"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/919494444027", "_blank", "noopener,noreferrer"),
      color: "bg-green-600 hover:bg-green-700",
      hoverColor: "hover:bg-green-700"
    }
  ];

  const socialActions = [
    {
      icon: Instagram,
      label: "Instagram",
      action: () => window.open("https://instagram.com/sriananthdentalhospital", "_blank", "noopener,noreferrer"),
      color: "bg-pink-600 hover:bg-pink-700",
      hoverColor: "hover:bg-pink-700"
    },
    {
      icon: Facebook,
      label: "Facebook",
      action: () => window.open("https://facebook.com/sriananthdentalhospital", "_blank", "noopener,noreferrer"),
      color: "bg-blue-800 hover:bg-blue-900",
      hoverColor: "hover:bg-blue-900"
    },
    {
      icon: Youtube,
      label: "YouTube",
      action: () => window.open("https://youtube.com/@sriananthdentalhospital", "_blank", "noopener,noreferrer"),
      color: "bg-red-600 hover:bg-red-700",
      hoverColor: "hover:bg-red-700"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div ref={floatingRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
          {/* Social Media Buttons */}
          <AnimatePresence>
            {(isOpen || !isVisible) && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  height: 'auto',
                  transition: { 
                    opacity: { duration: 0.2 },
                    height: { duration: 0.3 }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20, 
                  height: 0,
                  transition: { 
                    opacity: { duration: 0.1 },
                    height: { duration: 0.2 }
                  }
                }}
                className="flex flex-col items-end space-y-3 overflow-hidden"
              >
                {socialActions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.05 }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 10,
                      transition: { duration: 0.1 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      x: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      action.action();
                    }}
                    className={`
                      w-12 h-12 rounded-full shadow-lg text-white 
                      ${action.color}
                      flex items-center justify-center relative group
                      transition-all duration-200
                    `}
                    aria-label={action.label}
                  >
                    <action.icon className="h-5 w-5" />
                    <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Primary Actions */}
          <div className="flex flex-col items-end space-y-3">
            {primaryActions.map((action) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.1 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  x: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
                className={`
                  w-12 h-12 rounded-full shadow-lg text-white 
                  ${action.color}
                  flex items-center justify-center relative group
                  transition-all duration-200
                `}
                aria-label={action.label}
              >
                <action.icon className="h-5 w-5" />
                <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {action.label}
                </span>
              </motion.button>
            ))}

            {/* Toggle Button */}
            <motion.button
              onClick={toggleMenu}
              className={`
                w-12 h-12 rounded-full shadow-lg text-white 
                bg-gray-800 hover:bg-gray-900
                flex items-center justify-center relative group
                transition-all duration-200
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <ChevronUp className="h-5 w-5" />
              )}
              <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {isOpen ? "Close" : "Quick Links"}
              </span>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
