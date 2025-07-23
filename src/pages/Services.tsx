import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';
import { services } from "@/data/services";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const featuredServices = services.filter(service => service.popular);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={t('services.heroTitle', 'Our Dental Services')}
        subtitle={t('services.heroSubtitle', 'Comprehensive care for your entire family')}
        backgroundImage="/images/hero/services-bg.jpg"
      />

      {/* All Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/services/${service.id}`)}
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3) + 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${service.color || 'bg-blue-600'} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-green-600 font-semibold">
                      {service.price}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 transition-colors duration-200 p-0 h-auto font-medium text-blue-600 hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services/${service.id}`);
                    }}
                  >
                    {t('learnMore', 'Learn More')} <span>→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Services;
