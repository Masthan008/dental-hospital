import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { HeroSection } from './HeroSection';

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <HeroSection
      title={t('hero.title')}
      subtitle={t('hero.subtitle')}
      videoSource="/lovable-uploads/21936-322869299.mp4"
      minHeight="100vh"
      className="bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-cyan-800/90"
      overlayOpacity={0.6}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={() => navigate("/booking")}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <Calendar className="h-6 w-6" />
          {t('hero.ctaPrimary')}
        </Button>
        <Button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          variant="outline"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
        >
          {t('hero.ctaSecondary')}
        </Button>
      </div>
    </HeroSection>
  );
};
