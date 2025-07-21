
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 987-6543"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Dental Street", "City, ST 12345"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@dentalcareplus.com", "appointments@dentalcareplus.com"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to schedule your appointment? We're here to help you achieve the smile of your dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp Card */}
            <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp Us</h3>
                    <p className="text-green-100 text-sm">Quick questions? Message us directly!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
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
                        Email
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
                      Service Interested In
                    </label>
                    <select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 px-4 py-2">
                      <option>Select a service...</option>
                      <option>General Dentistry</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Orthodontics</option>
                      <option>Emergency Care</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your dental needs..." 
                      rows={4}
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
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
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600">Interactive map will be embedded here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
