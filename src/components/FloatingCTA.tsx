
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
        window.open("tel:+919494444027");
      },
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      description: "Chat with our support team",
      action: () => {
        setShowOptions(false);
        window.open("https://wa.me/919494444027");
      },
      color: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: MessageSquarePlus,
      label: "Quick Question",
      description: "Ask us anything about dental care",
      action: () => {
        setShowOptions(false);
        window.open("mailto:sriananthdentalhospital@gmail.com?subject=Quick%20Question");
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4" style={{ width: 'auto', maxWidth: '90vw' }}>
      <AnimatePresence>
        {isMounted && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2"
          >
            {showOptions && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="origin-bottom-right"
              >
                <Card className="p-2 shadow-lg rounded-xl w-56 bg-white/95 backdrop-blur-sm border border-gray-100">
                  <div className="space-y-2">
                    {actions.map((action, index) => (
                      <motion.div
                        key={action.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={action.action}
                      >
                        <div className={`p-1.5 rounded-full ${action.color} text-white mr-2`}>
                          <action.icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="font-medium text-xs">{action.label}</p>
                          {action.description && (
                            <p className="text-[10px] text-gray-500">{action.description}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative rounded-full shadow-md overflow-hidden",
                showOptions ? 'ring-2 ring-blue-500' : ''
              )}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => !showOptions && setIsHovered(false)}
            >
              <Button
                ref={buttonRef}
                size="sm"
                className={cn(
                  "rounded-full h-12 w-12 p-0 relative overflow-hidden transition-all duration-300 text-sm",
                  showOptions ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700',
                  isHovered ? 'w-32' : 'w-12'
                )}
                onClick={() => setShowOptions(!showOptions)}
                aria-label={showOptions ? 'Close menu' : 'Quick actions'}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={showOptions ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {showOptions ? (
                    <X className="h-4 w-4 text-white" />
                  ) : (
                    <motion.div
                      animate={isHovered ? { x: -16, opacity: 0 } : { x: 0, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className="absolute"
                    >
                      <MessageSquarePlus className="h-4 w-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
                <motion.span
                  className="whitespace-nowrap text-white text-xs font-medium"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{
                    opacity: isHovered && !showOptions ? 1 : 0,
                    x: isHovered && !showOptions ? 0 : 16,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  Need Help?
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
