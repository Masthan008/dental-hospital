
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  Shield, 
  Heart, 
  Download, 
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  DollarSign,
  Calendar,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PatientInfo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('patient-info');

  const infoSections = [
    {
      id: 'first-time-visit',
      icon: Calendar,
      title: t('sections.firstTimeVisit.title'),
      description: t('sections.firstTimeVisit.content.whatToExpect').substring(0, 80) + '...',
      features: [
        t('sections.firstTimeVisit.content.whatToExpect').split('.')[0] + '.',
        t('sections.firstTimeVisit.content.requiredDocuments').split('.')[0] + '.',
        t('sections.firstTimeVisit.content.preparationTips').split('.')[0] + '.',
        t('sections.firstTimeVisit.content.officeTour').split('.')[0] + '.'
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'insurance-payment',
      icon: CreditCard,
      title: t('sections.insurancePayment.title'),
      description: t('sections.insurancePayment.content.acceptedInsurance').substring(0, 80) + '...',
      features: [
        t('sections.insurancePayment.content.acceptedInsurance').split('.')[0] + '.',
        t('sections.insurancePayment.content.paymentPlans').split('.')[0] + '.',
        t('sections.insurancePayment.content.financingOptions').split('.')[0] + '.',
        t('sections.insurancePayment.content.costEstimates').split('.')[0] + '.'
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'patient-forms',
      icon: FileText,
      title: t('sections.patientForms.title'),
      description: t('sections.patientForms.content.description'),
      features: [
        t('sections.patientForms.content.medicalHistory'),
        t('sections.patientForms.content.insuranceForms'),
        t('sections.patientForms.content.consentForms'),
        t('sections.patientForms.content.registration')
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'treatment-instructions',
      icon: Heart,
      title: t('sections.treatmentInstructions.title'),
      description: t('sections.treatmentInstructions.content.description'),
      features: [
        t('sections.treatmentInstructions.content.preTreatment'),
        t('sections.treatmentInstructions.content.postCare'),
        t('sections.treatmentInstructions.content.recoveryTips'),
        t('sections.treatmentInstructions.content.emergencyContacts')
      ],
      color: "from-red-500 to-rose-500"
    },
    {
      id: 'covid-safety',
      icon: Shield,
      title: t('sections.covidSafety.title'),
      description: t('sections.covidSafety.content.description'),
      features: [
        t('sections.covidSafety.content.safetyMeasures'),
        t('sections.covidSafety.content.screeningProcess'),
        t('sections.covidSafety.content.ppeProtocols'),
        t('sections.covidSafety.content.cleanEnvironment')
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 'testimonials',
      icon: Users,
      title: t('sections.testimonials.title'),
      description: t('sections.testimonials.content.description'),
      features: [
        t('sections.testimonials.content.videoTestimonials'),
        t('sections.testimonials.content.writtenReviews'),
        t('sections.testimonials.content.beforeAfterPhotos'),
        t('sections.testimonials.content.successStories')
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const paymentOptions = [
    { name: "Cash", icon: DollarSign, description: "Pay at time of service" },
    { name: "Credit Cards", icon: CreditCard, description: "Visa, Mastercard, American Express" },
    { name: "CareCredit", icon: Heart, description: "Special financing for healthcare" },
    { name: "Insurance", icon: Shield, description: "Most dental insurance accepted" }
  ];

  const insuranceProviders = [
    "Delta Dental", "Cigna", "Aetna", "MetLife", "Blue Cross Blue Shield", 
    "Humana", "United Healthcare", "Guardian", "Principal", "Assurant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Patient Information
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about visiting DentalCare+. We're here to make your experience as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Info Sections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoSections.map((section, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{section.description}</p>
                  <ul className="space-y-2">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-blue-50 transition-colors duration-200 p-0 h-auto font-medium text-blue-600 hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/patient-info/${section.id}`);
                    }}
                  >
                    {t('learnMore')} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Insurance Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment & Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible payment options and work with most insurance providers to make dental care affordable.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Options */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Payment Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {paymentOptions.map((option, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <option.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{option.name}</h4>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Insurance Providers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Accepted Insurance</h3>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {insuranceProviders.map((provider, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{provider}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-800 font-medium">Don't see your insurance?</p>
                        <p className="text-sm text-blue-700">Contact us to verify coverage. We're constantly adding new providers.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Forms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Forms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save time by downloading and completing these forms before your visit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "New Patient Registration", type: "PDF", size: "2.1 MB" },
              { name: "Medical History Form", type: "PDF", size: "1.8 MB" },
              { name: "Insurance Information", type: "PDF", size: "1.2 MB" },
              { name: "Consent Forms", type: "PDF", size: "2.4 MB" },
              { name: "HIPAA Privacy Notice", type: "PDF", size: "1.5 MB" },
              { name: "Financial Policy", type: "PDF", size: "1.1 MB" },
              { name: "Emergency Contact Form", type: "PDF", size: "980 KB" },
              { name: "Post-Treatment Instructions", type: "PDF", size: "1.7 MB" }
            ].map((form, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{form.name}</h3>
                    <div className="flex justify-center space-x-2 mb-4">
                      <Badge variant="secondary">{form.type}</Badge>
                      <Badge variant="outline">{form.size}</Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our practice and services.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How often should I visit the dentist?",
                answer: "We recommend visiting every 6 months for routine cleanings and checkups. However, some patients may need more frequent visits based on their oral health needs."
              },
              {
                question: "Do you accept my insurance?",
                answer: "We accept most major dental insurance plans. Please call our office with your insurance information, and we'll verify your coverage and benefits."
              },
              {
                question: "What should I expect during my first visit?",
                answer: "Your first visit includes a comprehensive examination, digital X-rays, oral cancer screening, and discussion of your dental health goals and treatment options."
              },
              {
                question: "Do you offer emergency dental services?",
                answer: "Yes! We provide emergency dental care for urgent situations. Call our emergency line at (555) 987-6543 for immediate assistance."
              },
              {
                question: "What payment options do you offer?",
                answer: "We accept cash, credit cards, CareCredit, and most insurance plans. We also offer flexible payment plans for larger treatments."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to answer any questions and help you get started on your dental health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/booking")}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              variant="outline" 
              size="lg" 
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PatientInfo;
