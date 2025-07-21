import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Phone, Mail, MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HeroSection } from '@/components/HeroSection';
import { useTranslation } from 'react-i18next';
import { doctors } from '@/data/doctors';

const Team = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  
  // Function to handle doctor card click
  const handleDoctorClick = (doctorId: number) => {
    navigate(`/team/doctor/${doctorId}`);
  };

  const staff = [
    {
      name: "Jennifer Martinez",
      role: "Dental Hygienist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      bio: "Jennifer specializes in gentle cleanings and patient education.",
      experience: "5+ years"
    },
    {
      name: "Robert Kim",
      role: "Dental Assistant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Robert ensures all procedures run smoothly and patients are comfortable.",
      experience: "3+ years"
    },
    {
      name: "Emily Chen",
      role: "Patient Coordinator",
      image: "https://images.unsplash.com/photo-1573496359570-3a6f8a9f1a1e?w=300&h=300&fit=crop&crop=face",
      bio: "Emily helps patients with scheduling and insurance questions.",
      experience: "4+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={t('team.heroTitle', 'Meet Our Dental Team')}
        subtitle={t('team.heroSubtitle', 'Experienced professionals dedicated to your smile')}
        backgroundImage="/images/hero/dental-team.jpg"
        minHeight="50vh"
        className="bg-blue-900/90"
      />

      {/* Doctors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our skilled dentists who bring years of expertise and a passion for dental excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card 
                key={doctor.id} 
                className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => handleDoctorClick(doctor.id)}
              >
                <CardContent className="p-0">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-blue-600">{doctor.title}</p>
                      </div>
                      <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">{doctor.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <span key={idx} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{doctor.experience} experience</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Support Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team works behind the scenes to ensure your visit is comfortable and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600">{member.role}</p>
                      <p className="text-sm text-gray-500 mt-1">{member.experience} experience</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Meet Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your consultation today and experience the difference our caring team can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate('/booking')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book an Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
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

export default Team;
