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

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.featuredServices', 'Our Featured Services')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.featuredDescription', 'Discover our most popular dental treatments and services')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/services/${service.id}`)}
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3) + 100}
              >
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white z-10">
                  {t('popular', 'Popular')}
                </Badge>
                
                {/* Service Image */}
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
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{t('whatsIncluded', "What's Included:")}</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 3} {t('moreServices', 'more services')}
                        </li>
                      )}
                    </ul>
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

      {/* All Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.allServices', 'All Our Services')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.allDescription', 'Comprehensive dental care for your entire family')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color || 'bg-blue-600'} mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-600 hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services/${service.id}`);
                    }}
                  >
                    {t('learnMore', 'Learn More')} <span>→</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('cta.title', 'Ready to Transform Your Smile?')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            {t('cta.description', 'Book your appointment today and experience the best in dental care')}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
            onClick={() => navigate('/booking')}
          >
            {t('bookAppointment', 'Book an Appointment')}
          </Button>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Services;
