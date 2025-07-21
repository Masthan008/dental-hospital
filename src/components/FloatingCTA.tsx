
import { useState, useEffect, useRef } from "react";
import { Calendar, Phone, MessageCircle, X, ArrowUp, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCTAAction {
  icon: React.ElementType;
  label: string;
  action: () => void;
  color: string;
  description?: string;
}

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts to avoid SSR issues with animations
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowOptions(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Close options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  if (!isMounted) return null;

  const actions: FloatingCTAAction[] = [
    {
      icon: Calendar,
      label: "Book Appointment",
      description: "Schedule a visit with our dental experts",
      action: () => {
        setShowOptions(false);
        navigate("/booking");
      },
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Phone,
      label: "Emergency Call",
      description: "Available 24/7 for dental emergencies",
      action: () => {
        setShowOptions(false);
        window.open("tel:+1234567890");
      },
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      description: "Chat with our support team",
      action: () => {
        setShowOptions(false);
        window.open("https://wa.me/1234567890");
      },
      color: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: MessageSquarePlus,
      label: "Quick Question",
      description: "Ask us anything about dental care",
      action: () => {
        setShowOptions(false);
        // Implement your quick question modal or chat here
        console.log("Quick question clicked");
      },
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Back to top button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={cn(
            "w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg",
            "hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          )}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Main CTA */}
      {/* Options Menu */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4"
          >
            <Card className="w-72 p-3 space-y-2 shadow-xl bg-white/95 backdrop-blur-sm">
              <h3 className="text-sm font-medium text-gray-700 px-2 py-1">How can we help you today?</h3>
              <div className="space-y-2">
                {actions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.action}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
                      "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    )}
                  >
                    <div className={`p-2 rounded-full ${action.color} text-white`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{action.label}</div>
                      {action.description && (
                        <div className="text-xs text-gray-500">{action.description}</div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        className={cn(
          "relative flex items-center justify-center rounded-full h-16 w-16 shadow-xl",
          "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
          "text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200",
          showOptions && "rotate-45"
        )}
        onClick={() => setShowOptions(!showOptions)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={showOptions ? 'Close menu' : 'Quick actions'}
        aria-expanded={showOptions}
        initial={false}
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotate: showOptions ? 45 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <motion.span
          className="absolute"
          initial={false}
          animate={{ rotate: showOptions ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {showOptions ? (
            <X className="h-6 w-6" />
          ) : (
            <motion.span
              initial={false}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              className="text-xl font-bold"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </motion.span>
      </motion.button>
    </div>
  );
};
