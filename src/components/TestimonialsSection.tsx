
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1494790108755-2616b68db45f?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Dr. Smith and his team are absolutely amazing! They made my root canal procedure completely painless and the results are fantastic. The office is so modern and comfortable.",
      treatment: "Root Canal Therapy"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I was terrified of dentists, but the team here made me feel so comfortable. My teeth whitening results exceeded my expectations. Highly recommend!",
      treatment: "Teeth Whitening"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The Invisalign treatment I received here changed my life. The staff was professional, and Dr. Johnson explained everything clearly. My smile is perfect now!",
      treatment: "Invisalign"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Emergency dental care at its best! When I broke my tooth, they saw me immediately and fixed it perfectly. The pain relief was instant. Thank you!",
      treatment: "Emergency Care"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have experienced our exceptional dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-blue-600/20" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Treatment Badge */}
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.treatment}
                  </div>

                  {/* Patient Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white cursor-pointer hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🎥</div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Watch Video Testimonials</h3>
                  <p className="text-blue-100 text-sm">See and hear from our happy patients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
