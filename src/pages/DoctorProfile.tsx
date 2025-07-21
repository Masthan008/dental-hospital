import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Award, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  GraduationCap,
  Heart,
  ArrowLeft
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

// Import the doctors data from the data directory
import { doctors } from "@/data/doctors";

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const doctor = doctors.find(doc => doc.id === parseInt(id || ''));

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Doctor not found</h1>
            <Button onClick={() => navigate('/team')} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Doctor Header */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
            </Button>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
                />
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{doctor.availability}</span>
                  </div>
                  
                  <Button className="w-full mt-4" onClick={() => navigate('/booking')}>
                    <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 lg:w-3/4 mt-6 md:mt-0">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{doctor.name}</h1>
                <p className="text-xl text-blue-600 mt-2">{doctor.title}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {doctor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Education</h3>
                      <p className="text-gray-600">{doctor.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Experience</h3>
                      <p className="text-gray-600">{doctor.experience} of experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. {doctor.name.split(' ')[1]}</h2>
                  <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
                </div>
                
                {doctor.achievements && doctor.achievements.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {doctor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Treatments Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Treatments & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctor.specialties.map((treatment, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center">
                    <Heart className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">{treatment}</h3>
                  </div>
                  <p className="mt-3 text-gray-600">
                    Comprehensive {treatment.toLowerCase()} services tailored to your needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
