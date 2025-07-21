
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, MapPin, AlertTriangle, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate = useNavigate();

  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: "Severe Tooth Pain",
      description: "Immediate relief for acute dental pain and discomfort",
      action: "Call Now"
    },
    {
      icon: Heart,
      title: "Dental Trauma",
      description: "Emergency treatment for knocked-out or broken teeth",
      action: "Emergency Care"
    },
    {
      icon: Shield,
      title: "Swelling & Infection",
      description: "Urgent treatment for dental infections and abscesses",
      action: "Urgent Visit"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Dental Emergency?
          </h1>
          <p className="text-xl lg:text-2xl mb-8">
            Don't wait. Get immediate dental care when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency: (555) 123-4567
            </Button>
            <Button 
              onClick={() => navigate("/booking")}
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full transition-all duration-300"
            >
              Book Urgent Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Services</h2>
            <p className="text-xl text-gray-600">
              We're here to help with urgent dental situations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                  <Clock className="mr-2 h-6 w-6 text-red-600" />
                  Emergency Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">24/7 On-Call</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends:</span>
                  <span className="font-semibold">24/7 On-Call</span>
                </div>
                <div className="flex justify-between">
                  <span>Holidays:</span>
                  <span className="font-semibold">24/7 On-Call</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                  <MapPin className="mr-2 h-6 w-6 text-red-600" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  123 Dental Street<br />
                  Healthcare City, HC 12345
                </p>
                <p className="text-sm text-gray-500">
                  Located in the heart of Healthcare City with easy parking and accessibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Emergency;
