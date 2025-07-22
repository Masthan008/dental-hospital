import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Phone, Calendar, Award, GraduationCap, Briefcase, Calendar as CalendarIcon } from 'lucide-react';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HeroSection } from '@/components/HeroSection';
import { useTranslation } from 'react-i18next';
import { doctors } from '@/data/doctors';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);
  
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
        backgroundImage="/images/hero/team-bg.jpg"
        minHeight="50vh"
        className="bg-blue-900/90"
      />
      <main className="pt-12">
        {/* Our Dentists */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('team.ourDentists', 'Our Expert Dentists')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('team.dentistsDescription', 'Board-certified dentists with extensive experience in general and cosmetic dentistry')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {doctors.map((doctor, index) => (
                <Card 
                  key={doctor.id}
                  className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 cursor-pointer overflow-hidden"
                  onClick={() => handleDoctorClick(doctor.id)}
                  data-aos="fade-up"
                  data-aos-delay={150 * (index % 2) + 100}
                >
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                    <p className="text-blue-300">{doctor.title}</p>
                  </div>
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
                          <span className="font-medium text-gray-900">{doctor.rating}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-gray-600">{doctor.reviews} reviews</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                            Experience
                          </h4>
                          <p className="text-gray-600 ml-6">{doctor.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                            Education
                          </h4>
                          <p className="text-gray-600 ml-6">{doctor.education}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" />
                            Availability
                          </h4>
                          <p className="text-gray-600 ml-6">{doctor.availability}</p>
                        </div>
                        <div className="pt-2">
                          <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {doctor.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {doctor.achievements && doctor.achievements.length > 0 && (
                          <div className="pt-2">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-blue-600" />
                              Qualifications
                            </h4>
                            <div className="space-y-2">
                              {doctor.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                                  <span className="text-sm text-gray-600">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardFooter className="border-t p-4">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/booking?doctorId=${doctor.id}`);
                        }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment with {doctor.name.split(' ')[0]}
                      </Button>
                    </CardFooter>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('team.ourStaff', 'Our Support Staff')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('team.staffDescription', 'Meet the friendly faces that make our practice special')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {staff.map((member, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={150 * (index % 3) + 100}
                >
                  <div className="relative h-64">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-blue-300">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                      {member.experience} experience
                    </div>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('team.readyToMeet', 'Ready to Meet Our Team?')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('team.ctaDescription', 'Schedule your consultation today and experience the difference our caring team can make.')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate('/booking')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('team.bookAppointment', 'Book an Appointment')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.contactUs', 'Contact Us')}
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

export default Team;
