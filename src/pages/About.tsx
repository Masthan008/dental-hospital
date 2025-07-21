
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield, Play, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const achievements = [
    { icon: Award, title: "Best Dental Practice 2023", description: "Recognized by State Dental Association" },
    { icon: Users, title: "10,000+ Happy Patients", description: "Serving the community since 2008" },
    { icon: Heart, title: "Patient Choice Award", description: "Top-rated for patient satisfaction" },
    { icon: Shield, title: "Advanced Technology", description: "State-of-the-art equipment" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in every treatment we provide."
    },
    {
      title: "Compassion",
      description: "Your comfort and well-being are at the heart of everything we do."
    },
    {
      title: "Innovation",
      description: "We embrace the latest technology and techniques for better outcomes."
    },
    {
      title: "Integrity",
      description: "We believe in honest, transparent communication with our patients."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={t('about.heroTitle', 'About Our Practice')}
        subtitle={t('about.heroSubtitle', 'Compassionate care for your entire family')}
        backgroundImage="/images/hero/dentist-2589771.jpg"
        minHeight="50vh"
        className="bg-blue-900/90"
      />
      <main className="pt-12">
        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">About DentalCare+</h1>
                <p className="text-xl text-gray-600">
                  Creating beautiful, healthy smiles for over 15 years with compassionate care and cutting-edge technology.
                </p>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Founded in 2008 by Dr. Sarah Johnson, DentalCare+ began with a simple mission: to provide exceptional dental care in a comfortable, welcoming environment. What started as a small practice has grown into a comprehensive dental clinic serving thousands of patients.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation, from being the first practice in the area to offer digital X-rays to pioneering minimally invasive procedures. We've always believed that staying at the forefront of dental technology allows us to provide better care for our patients.
                  </p>
                  <p>
                    Today, we're proud to be a trusted partner in our community's oral health, with a team of skilled professionals dedicated to helping you achieve and maintain your best smile.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Take a Virtual Tour</h3>
                        <p className="text-blue-100">See our state-of-the-art facilities</p>
                      </div>
                      <Button 
                        size="icon" 
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-16 h-16"
                      >
                        <Play className="h-8 w-8 text-white" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape the experience we create for our patients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud of the recognition we've received and the trust our patients place in us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    To provide exceptional dental care through innovative treatments, compassionate service, and a commitment to helping every patient achieve optimal oral health and a confident smile.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-lg text-cyan-100 leading-relaxed">
                    To be the leading dental practice in our community, known for excellence in patient care, advanced technology, and creating lasting relationships built on trust and outstanding results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied patients who have made DentalCare+ their trusted dental home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/booking")}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Visit
              </Button>
              <Button 
                onClick={() => navigate("/team")}
                variant="outline" 
                size="lg" 
                className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;
