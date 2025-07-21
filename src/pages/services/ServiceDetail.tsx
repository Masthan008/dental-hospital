import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('services');

  // Find the service by ID
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('serviceNotFound.title', 'Service Not Found')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('serviceNotFound.message', 'The requested service could not be found.')}
          </p>
          <Button onClick={() => navigate('/services')}>
            {t('backToServices', 'Back to Services')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Button 
            variant="ghost" 
            className="mb-8 text-white hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back', 'Back')}
          </Button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('aboutService', 'About This Service')}
            </h2>
            <div className="prose max-w-none">
              {service.details?.map((detail, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {detail}
                </p>
              ))}
            </div>

            {service.features && (
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('serviceFeatures', 'Service Features')}
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {t('serviceSummary', 'Service Summary')}
              </h3>
              
              <div className="space-y-4">
                {service.duration && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {t('duration', 'Duration')}
                    </p>
                    <p className="mt-1 text-gray-900">{service.duration}</p>
                  </div>
                )}

                {service.price && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {t('startingFrom', 'Starting from')}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-blue-600">
                      {service.price}
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    size="lg"
                    onClick={() => navigate('/booking')}
                  >
                    {t('bookAppointment', 'Book Appointment')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
