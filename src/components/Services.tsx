import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Shield, 
  Stethoscope, 
  Heart, 
  Zap, 
  Baby, 
  Crown, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { services } from "@/data/services";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  color,
  onClick
}) => (
  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <CardHeader>
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${color} text-white mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto">
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
          {features.length > 3 && (
            <li className="text-sm text-blue-600">
              +{features.length - 3} more
            </li>
          )}
        </ul>
        <Button 
          variant="outline" 
          className="w-full mt-2 group"
          onClick={onClick}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

export const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  // Map the services data to include the appropriate icon components
  const serviceItems = services.map(service => ({
    ...service,
    icon: {
      'general-dentistry': Stethoscope,
      'cosmetic-dentistry': Sparkles,
      'restorative-dentistry': Shield,
      'orthodontics': Smile,
      'emergency-care': Zap,
      'pediatric-dentistry': Baby
    }[service.id] || Stethoscope,
    color: service.color || "from-blue-500 to-blue-600"
  }));

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title', 'Our Dental Services')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle', 'Comprehensive dental care for the whole family')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              onClick={() => handleServiceClick(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
