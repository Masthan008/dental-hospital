import { ReactNode, useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  backgroundImage?: string;
  videoSource?: string;
  overlayOpacity?: number;
  className?: string;
  children?: ReactNode;
  minHeight?: string;
}

// Array of background images for the hero section
const heroImages = [
  '/images/hero/dentist-2589771.jpg',
  '/images/hero/dental-chair-and-equipment-patie.jpg',
  '/images/hero/all-on-4-dental-implants-belfast-8378579.jpg',
];

export const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  videoSource,
  overlayOpacity = 0.4,
  className = '',
  children,
  minHeight = '80vh',
}: HeroSectionProps) => {
  const { t } = useTranslation('common');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Handle automatic image rotation
  useEffect(() => {
    if (videoSource) return; // Don't rotate if video is being used
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsAnimating(false);
      }, 1000); // Match this with the CSS transition duration
    }, 8000); // Change image every 8 seconds
    
    return () => clearInterval(interval);
  }, [videoSource]);
  
  // Ensure video plays and loops
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented, showing fallback');
      });
    }
  }, []);
  
  const backgroundStyles = videoSource
    ? { 
        background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
      }
    : { 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity}))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

  return (
    <section 
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        minHeight,
        ...backgroundStyles,
        position: 'relative',
      }}
    >
      {/* Background Images with Fade Animation */}
      {!videoSource && heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          zIndex: 1
        }}
      />

      {/* Video Background */}
      {videoSource && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="space-y-6">
          {typeof title === 'string' ? (
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {title}
            </h1>
          ) : (
            <div data-aos="fade-up" data-aos-delay="100">
              {title}
            </div>
          )}
          
          {subtitle && (
            typeof subtitle === 'string' ? (
              <p 
                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                {subtitle}
              </p>
            ) : (
              <div data-aos="fade-up" data-aos-delay="200">
                {subtitle}
              </div>
            )
          )}
          
          {children && (
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              data-aos-duration="800"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
