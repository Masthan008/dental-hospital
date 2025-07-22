
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TestimonialsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const videoTestimonials = [
    {
      id: 1,
      title: "Sarah's Smile Transformation",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b68db45f?w=600&h=400&fit=crop&crop=face",
      duration: "2:45",
      views: "1.2K",
      name: "Sarah Johnson",
      rating: 5,
    },
    {
      id: 2,
      title: "Michael's Invisalign Journey",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face",
      duration: "3:12",
      views: "2.1K",
      name: "Michael Chen",
      rating: 5,
    },
  ];
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
            {t('whatOurPatientsSay', 'What Our')} <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('patientsSay', 'Patients Say')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('realStories', 'Real stories from real patients who have experienced our exceptional dental care.')}
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

        {/* Video Testimonials Preview */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {t('videoTestimonials', 'Video Testimonials')}
              </h2>
              <p className="text-gray-600 max-w-2xl">
                {t('watchPatientStories', 'Watch real patients share their dental journey and experience with our practice.')}
              </p>
            </div>
            <button 
              onClick={() => navigate('/video-testimonials')}
              className="px-6 py-2.5 bg-transparent border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {t('viewAllVideos', 'View All Videos')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoTestimonials.map((video) => (
              <Card 
                key={video.id} 
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/video-testimonials#video-${video.id}`)}
              >
                <div className="relative pt-[56.25%] bg-gray-100">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-7 w-7 text-blue-600 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{video.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{video.rating}.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                {t('shareYourStory', 'Share Your Smile Story')}
              </h3>
              <p className="text-blue-100 mb-6">
                {t('shareYourStoryDesc', "We'd love to hear about your experience with our dental care. Your feedback helps us improve and helps others find the care they need.")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => navigate('/testimonials/new')}
                >
                  {t('shareYourExperience', 'Share Your Experience')}
                </button>
                <button 
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                  onClick={() => navigate('/booking')}
                >
                  {t('bookAppointment', 'Book an Appointment')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
