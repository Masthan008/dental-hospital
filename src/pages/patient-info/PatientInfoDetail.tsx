import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const PatientInfoDetail = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('patient-info');

  // Get all section data from translations
  const sectionData = {
    'first-time-visit': {
      title: t('sections.firstTimeVisit.title'),
      content: [
        { 
          title: t('sections.firstTimeVisit.content.whatToExpect'),
          description: t('sections.firstTimeVisit.content.whatToExpect')
        },
        { 
          title: t('sections.firstTimeVisit.content.requiredDocuments'),
          description: t('sections.firstTimeVisit.content.requiredDocuments')
        },
        { 
          title: t('sections.firstTimeVisit.content.preparationTips'),
          description: t('sections.firstTimeVisit.content.preparationTips')
        },
        { 
          title: t('sections.firstTimeVisit.content.officeTour'),
          description: t('sections.firstTimeVisit.content.officeTour')
        }
      ]
    },
    'insurance-payment': {
      title: t('sections.insurancePayment.title'),
      content: [
        { 
          title: t('sections.insurancePayment.content.acceptedInsurance'),
          description: t('sections.insurancePayment.content.acceptedInsurance')
        },
        { 
          title: t('sections.insurancePayment.content.paymentPlans'),
          description: t('sections.insurancePayment.content.paymentPlans')
        },
        { 
          title: t('sections.insurancePayment.content.financingOptions'),
          description: t('sections.insurancePayment.content.financingOptions')
        },
        { 
          title: t('sections.insurancePayment.content.costEstimates'),
          description: t('sections.insurancePayment.content.costEstimates')
        }
      ]
    },
    'patient-forms': {
      title: t('sections.patientForms.title'),
      content: [
        { 
          title: t('sections.patientForms.content.medicalHistory'),
          description: t('sections.patientForms.content.medicalHistory')
        },
        { 
          title: t('sections.patientForms.content.insuranceForms'),
          description: t('sections.patientForms.content.insuranceForms')
        },
        { 
          title: t('sections.patientForms.content.consentForms'),
          description: t('sections.patientForms.content.consentForms')
        },
        { 
          title: t('sections.patientForms.content.registration'),
          description: t('sections.patientForms.content.registration')
        }
      ]
    },
    'treatment-instructions': {
      title: t('sections.treatmentInstructions.title'),
      content: [
        { 
          title: t('sections.treatmentInstructions.content.preTreatment'),
          description: t('sections.treatmentInstructions.content.preTreatment')
        },
        { 
          title: t('sections.treatmentInstructions.content.postCare'),
          description: t('sections.treatmentInstructions.content.postCare')
        },
        { 
          title: t('sections.treatmentInstructions.content.recoveryTips'),
          description: t('sections.treatmentInstructions.content.recoveryTips')
        },
        { 
          title: t('sections.treatmentInstructions.content.emergencyContacts'),
          description: t('sections.treatmentInstructions.content.emergencyContacts')
        }
      ]
    },
    'covid-safety': {
      title: t('sections.covidSafety.title'),
      content: [
        { 
          title: t('sections.covidSafety.content.safetyMeasures'),
          description: t('sections.covidSafety.content.safetyMeasures')
        },
        { 
          title: t('sections.covidSafety.content.screeningProcess'),
          description: t('sections.covidSafety.content.screeningProcess')
        },
        { 
          title: t('sections.covidSafety.content.ppeProtocols'),
          description: t('sections.covidSafety.content.ppeProtocols')
        },
        { 
          title: t('sections.covidSafety.content.cleanEnvironment'),
          description: t('sections.covidSafety.content.cleanEnvironment')
        }
      ]
    },
    'testimonials': {
      title: t('sections.testimonials.title'),
      content: [
        { 
          title: t('sections.testimonials.content.videoTestimonials'),
          description: t('sections.testimonials.content.videoTestimonials')
        },
        { 
          title: t('sections.testimonials.content.writtenReviews'),
          description: t('sections.testimonials.content.writtenReviews')
        },
        { 
          title: t('sections.testimonials.content.beforeAfterPhotos'),
          description: t('sections.testimonials.content.beforeAfterPhotos')
        },
        { 
          title: t('sections.testimonials.content.successStories'),
          description: t('sections.testimonials.content.successStories')
        }
      ]
    }
  };

  const section = sectionId ? sectionData[sectionId as keyof typeof sectionData] : null;

  if (!section) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            onClick={() => navigate('/patient-info')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Patient Info
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/patient-info')}
          className="flex items-center gap-2 text-blue-600 hover:bg-blue-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Patient Info
        </Button>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-12 text-white">
            <h1 className="text-4xl font-bold">{section.title}</h1>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 lg:p-12 space-y-8">
            {section.content.map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                {index < section.content.length - 1 && <hr className="border-gray-100" />}
              </div>
            ))}
            
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need More Information?
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any questions or need further assistance, please don't hesitate to contact our friendly staff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+919494444027'}
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientInfoDetail;
