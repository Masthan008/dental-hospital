import { ReactNode, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

export const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  videoSource,
  overlayOpacity = 0.4,
  className = '',
  children,
  minHeight = '50vh',
}: HeroSectionProps) => {
  const { t } = useTranslation('common');
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented, showing fallback');
      });
    }
  }, []);
  
  const backgroundStyles = backgroundImage && !videoSource
    ? { 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : { 
        background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
      };

  return (
    <section 
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        minHeight,
        ...(videoSource ? {} : backgroundStyles)
      }}
    >
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
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
              zIndex: 1
            }}
          />
        </div>
      )}

      {/* Animated Background Pattern (only shown when there's no video) */}
      {!videoSource && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="space-y-6">
          {typeof title === 'string' ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
          ) : (
            title
          )}
          
          {subtitle && (
            typeof subtitle === 'string' ? (
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          )}
          
          {children && (
            <div className="pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
