
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  AlertCircle,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    { id: "general", name: "General Dentistry", duration: "60 min", price: "$89" },
    { id: "cosmetic", name: "Cosmetic Consultation", duration: "30 min", price: "$149" },
    { id: "orthodontics", name: "Orthodontic Consultation", duration: "45 min", price: "$99" },
    { id: "cleaning", name: "Teeth Cleaning", duration: "45 min", price: "$129" },
    { id: "emergency", name: "Emergency Care", duration: "30 min", price: "$199" },
    { id: "checkup", name: "Routine Checkup", duration: "30 min", price: "$79" }
  ];

  const doctors = [
    { 
      id: "gireesha", 
      name: "Dr. Gireesha Reddy", 
      specialty: "General & Cosmetic Dentistry", 
      rating: 4.9,
      image: "/images/doctors/dr-gireesha-reddy.jpg"
    },
    { 
      id: "srujan", 
      name: "Dr. P Srujan Kumar", 
      specialty: "Periodontist & Implantologist", 
      rating: 4.9,
      image: "/images/doctors/dr-srujan-kumar.jpg"
    }
  ];

  const availableDates = [
    { date: "2024-01-15", day: "Mon", dayNum: "15" },
    { date: "2024-01-16", day: "Tue", dayNum: "16" },
    { date: "2024-01-17", day: "Wed", dayNum: "17" },
    { date: "2024-01-18", day: "Thu", dayNum: "18" },
    { date: "2024-01-19", day: "Fri", dayNum: "19" },
    { date: "2024-01-22", day: "Mon", dayNum: "22" },
    { date: "2024-01-23", day: "Tue", dayNum: "23" }
  ];

  const availableTimes = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const steps = [
    { number: 1, title: "Select Service", description: "Choose your treatment" },
    { number: 2, title: "Choose Doctor", description: "Select your preferred dentist" },
    { number: 3, title: "Pick Date & Time", description: "Select appointment slot" },
    { number: 4, title: "Your Information", description: "Complete your details" },
    { number: 5, title: "Confirmation", description: "Review and confirm" }
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedService === service.id 
                      ? 'ring-2 ring-blue-500 bg-blue-50' 
                      : 'bg-white/80 backdrop-blur-sm border-0 shadow-lg'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                        {service.price}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Doctor</h2>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card 
                  key={doctor.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedDoctor === doctor.id 
                      ? 'ring-2 ring-blue-500 bg-blue-50' 
                      : 'bg-white/80 backdrop-blur-sm border-0 shadow-lg'
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Available Dates</h3>
              <div className="grid grid-cols-7 gap-2">
                {availableDates.map((date) => (
                  <Card 
                    key={date.date}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedDate === date.date 
                        ? 'ring-2 ring-blue-500 bg-blue-50' 
                        : 'bg-white/80 backdrop-blur-sm border-0 shadow-lg'
                    }`}
                    onClick={() => setSelectedDate(date.date)}
                  >
                    <CardContent className="p-3 text-center">
                      <p className="text-sm font-medium text-gray-900">{date.day}</p>
                      <p className="text-lg font-bold text-gray-900">{date.dayNum}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Available Times</h3>
                <div className="grid grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`transition-all duration-300 ${
                        selectedTime === time 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                          : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input 
                        placeholder="John" 
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <Input 
                      type="date" 
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Provider
                    </label>
                    <select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 px-4 py-2">
                      <option>Select insurance...</option>
                      <option>Delta Dental</option>
                      <option>Cigna</option>
                      <option>Aetna</option>
                      <option>MetLife</option>
                      <option>Blue Cross Blue Shield</option>
                      <option>Other</option>
                      <option>Self-Pay</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit
                    </label>
                    <Textarea 
                      placeholder="Please describe your dental concerns or the reason for this appointment..." 
                      rows={3}
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        const selectedServiceDetails = services.find(s => s.id === selectedService);
        const selectedDoctorDetails = doctors.find(d => d.id === selectedDoctor);
        const selectedDateDetails = availableDates.find(d => d.date === selectedDate);
        
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
              <p className="text-gray-600">Your appointment has been scheduled successfully.</p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{selectedServiceDetails?.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Doctor:</span>
                    <span className="font-medium">{selectedDoctorDetails?.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{selectedDateDetails?.day}, Jan {selectedDateDetails?.dayNum}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedServiceDetails?.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-medium">{selectedServiceDetails?.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What's Next?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• You'll receive a confirmation email with appointment details</li>
                      <li>• Please arrive 15 minutes early for your appointment</li>
                      <li>• Bring your insurance card and ID</li>
                      <li>• Contact us if you need to reschedule</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Schedule your visit in just a few simple steps. Choose your preferred time, doctor, and service.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'mr-4' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.number 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.number}
                  </div>
                  <div className="text-center mt-2">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <div className="text-sm text-gray-500">
                  Step {currentStep} of {steps.length}
                </div>
                
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !selectedService) ||
                    (currentStep === 2 && !selectedDoctor) ||
                    (currentStep === 3 && (!selectedDate || !selectedTime)) ||
                    currentStep === 5
                  }
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  {currentStep === 4 ? 'Confirm Appointment' : 'Next'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Booking;
