
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Navigation,
  Car,
  Bus,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Main Office", value: "+1 (555) 123-4567" },
        { label: "Emergency Line", value: "+1 (555) 987-6543" },
        { label: "Insurance Queries", value: "+1 (555) 456-7890" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        { label: "Address", value: "123 Dental Street" },
        { label: "City", value: "Downtown, ST 12345" },
        { label: "Floor", value: "2nd Floor, Suite 200" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 4:00 PM" },
        { label: "Sunday", value: "Closed" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General Info", value: "info@dentalcareplus.com" },
        { label: "Appointments", value: "appointments@dentalcareplus.com" },
        { label: "Billing", value: "billing@dentalcareplus.com" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const directions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available in our building garage. Enter from Main Street.",
      details: ["Valet parking available", "Handicap accessible", "EV charging stations"]
    },
    {
      icon: Bus,
      title: "Public Transit",
      description: "Multiple bus routes stop within 2 blocks. Metro station is 5 minutes away.",
      details: ["Bus routes: 15, 23, 45", "Metro: Blue Line", "Bike racks available"]
    },
    {
      icon: Navigation,
      title: "Navigation",
      description: "Use GPS coordinates: 40.7128° N, 74.0060° W for precise location.",
      details: ["Landmark: City Hall", "Near Central Park", "Opposite City Library"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              We're here to help! Reach out to us with questions, to schedule an appointment, or in case of dental emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-sm">
                          <p className="text-gray-500">{detail.label}</p>
                          <p className="font-medium text-gray-900">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
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
                          Phone
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
                        Subject *
                      </label>
                      <select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 px-4 py-2">
                        <option>General Question</option>
                        <option>Appointment Request</option>
                        <option>Insurance Inquiry</option>
                        <option>Treatment Information</option>
                        <option>Emergency</option>
                        <option>Billing Question</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us how we can help you..." 
                        rows={5}
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="newsletter" className="rounded" />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        I'd like to receive dental health tips and news
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Directions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                        <p className="text-gray-600">Google Maps integration will be embedded here</p>
                        <Button 
                          className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                          onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Get Here</h3>
                <div className="space-y-4">
                  {directions.map((direction, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <direction.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{direction.title}</h4>
                            <p className="text-gray-600 text-sm mb-3">{direction.description}</p>
                            <ul className="space-y-1">
                              {direction.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-red-500 to-rose-500 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <AlertCircle className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Dental Emergency?</h2>
                <p className="text-xl mb-6">
                  Don't wait! Call our emergency line immediately for urgent dental care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('tel:+15559876543')}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency: (555) 987-6543
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300"
                    onClick={() => window.open('https://wa.me/15559876543', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Emergency
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Contact Options</h2>
            <p className="text-xl text-gray-600">Choose the most convenient way to reach us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-green-100 mb-4">Speak directly with our team</p>
                <p className="font-semibold">(555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-blue-100 mb-4">Send us a detailed message</p>
                <p className="font-semibold">info@dentalcareplus.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-purple-100 mb-4">Chat with us instantly</p>
                <p className="font-semibold">Message Us Now</p>
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

export default Contact;
