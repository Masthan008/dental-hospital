import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const PatientInfoDetail = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('patientInfo');

  // This would normally come from a proper data source
  const sectionData = {
    'first-time-visit': {
      title: t('sections.firstTimeVisit.title'),
      content: [
        t('sections.firstTimeVisit.content.whatToExpect'),
        t('sections.firstTimeVisit.content.requiredDocuments'),
        t('sections.firstTimeVisit.content.preparationTips'),
        t('sections.firstTimeVisit.content.officeTour')
      ]
    },
    'insurance-payment': {
      title: t('sections.insurancePayment.title'),
      content: [
        t('sections.insurancePayment.content.acceptedInsurance'),
        t('sections.insurancePayment.content.paymentPlans'),
        t('sections.insurancePayment.content.financingOptions'),
        t('sections.insurancePayment.content.costEstimates')
      ]
    },
    // Add other sections as needed
  };

  const section = sectionId ? sectionData[sectionId as keyof typeof sectionData] : null;

  if (!section) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('notFound.message')}
          </p>
          <Button onClick={() => navigate('/patient-info')}>
            {t('notFound.backButton')}
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
          {t('backButton')}
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
          <div className="p-6 md:p-8 lg:p-12 space-y-6">
            <ul className="space-y-4">
              {section.content.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('needHelp.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('needHelp.message')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {t('needHelp.contactButton')}
                </Button>
                <Button variant="outline">
                  {t('needHelp.faqButton')}
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
