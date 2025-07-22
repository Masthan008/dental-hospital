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

// Array of background images for the hero section with different dental themes
const heroImages = [
  '/images/hero/dentist-2589771.jpg',
  '/images/hero/dental-chair-and-equipment-patie.jpg',
  '/images/hero/all-on-4-dental-implants-belfast-8378579.jpg',
  '/images/hero/dental-clinic-modern-equipment.jpg',
  '/images/hero/dentist-examining-patient.jpg',
  '/images/hero/dental-care-professional.jpg',
  '/images/hero/dental-implants-treatment.jpg',
  '/images/hero/teeth-whitening-procedure.jpg',
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
  
  // Handle automatic image rotation with smooth transitions
  useEffect(() => {
    if (videoSource) return; // Don't rotate if video is being used
    
    const totalImages = heroImages.length;
    let animationTimeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    const changeImage = () => {
      setIsAnimating(true);
      animationTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
        setIsAnimating(false);
      }, 800); // Fade out duration
    };
    
    // Start the interval
    interval = setInterval(changeImage, 6000); // Change image every 6 seconds
    
    // Initial delay before starting the animation
    const startDelay = setTimeout(changeImage, 1000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(animationTimeout);
      clearTimeout(startDelay);
    };
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

  // Parallax effect on scroll
  useEffect(() => {
    if (videoSource) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoSource]);

  return (
    <section 
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        minHeight: `calc(${minHeight} + 100px)`, // Extra space for parallax
        ...backgroundStyles,
        position: 'relative',
      }}
    >
      {/* Background Images with Fade and Parallax Animation */}
      {!videoSource && heroImages.map((image, index) => (
        <div 
          key={index}
          className={`parallax-bg absolute inset-0 transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0,
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform, opacity',
          }}
          aria-hidden="true"
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

      {/* Content with scroll animation */}
      <div 
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform, opacity',
        }}
      >
        <div className="space-y-6">
          {typeof title === 'string' ? (
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {title}
            </h1>
          ) : (
            title
          )}
          
          {subtitle && (
            <p 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {subtitle}
            </p>
          )}
          
          {children && (
            <div 
              className="mt-8"
              data-aos="fade-up"
              data-aos-delay="500"
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
