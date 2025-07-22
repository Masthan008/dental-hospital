
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AboutPreview = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Award,
      title: "Excellence Award",
      description: "Recognized for outstanding dental care"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience"
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Your comfort and care is our priority"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and techniques"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Sri Ananth Dental Hospital</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 15 years, we've been dedicated to providing exceptional dental care in a comfortable, modern environment. Our team of experienced professionals uses the latest technology to ensure you receive the best possible treatment.
              </p>
              <p className="text-lg text-gray-600">
                We believe that everyone deserves a healthy, beautiful smile. That's why we offer comprehensive services, from routine cleanings to complex procedures, all delivered with compassion and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate("/about")}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
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

          {/* Right Column - Features Grid */}
          <div className="space-y-8">
            {/* Video Tour Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 text-white cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Take a Virtual Tour</h3>
                    <p className="text-blue-100">See our modern facilities and meet our team</p>
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

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
