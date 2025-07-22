import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VideoTestimonials = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const videoTestimonials = [
    {
      id: 1,
      title: "Sarah's Smile Transformation",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b68db45f?w=600&h=400&fit=crop&crop=face",
      duration: "2:45",
      views: "1.2K",
      date: "2 weeks ago",
      name: "Sarah Johnson",
      role: "Marketing Executive",
      rating: 5,
      treatment: "Dental Implants"
    },
    {
      id: 2,
      title: "Michael's Invisalign Journey",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face",
      duration: "3:12",
      views: "2.1K",
      date: "1 month ago",
      name: "Michael Chen",
      role: "Software Engineer",
      rating: 5,
      treatment: "Invisalign"
    },
    {
      id: 3,
      title: "Emily's Perfect Smile",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop&crop=face",
      duration: "4:30",
      views: "3.4K",
      date: "2 months ago",
      name: "Emily Rodriguez",
      role: "Teacher",
      rating: 5,
      treatment: "Teeth Whitening"
    },
    {
      id: 4,
      title: "David's Emergency Care Experience",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
      duration: "2:15",
      views: "1.8K",
      date: "3 weeks ago",
      name: "David Thompson",
      role: "Business Owner",
      rating: 5,
      treatment: "Emergency Care"
    },
    {
      id: 5,
      title: "Jennifer's Veneers Story",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=face",
      duration: "3:45",
      views: "2.7K",
      date: "1 month ago",
      name: "Jennifer Lee",
      role: "Graphic Designer",
      rating: 5,
      treatment: "Porcelain Veneers"
    },
    {
      id: 6,
      title: "Robert's Full Mouth Reconstruction",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop&crop=face",
      duration: "5:20",
      views: "4.2K",
      date: "2 months ago",
      name: "Robert Wilson",
      role: "Architect",
      rating: 5,
      treatment: "Full Mouth Reconstruction"
    }
  ];

  const featuredTestimonial = videoTestimonials[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">
              {t('videoTestimonials.title', 'Video Testimonials')}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Video */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('featuredTestimonial', 'Featured Testimonial')}
          </h2>
          <Card className="overflow-hidden group">
            <div className="relative pt-[56.25%] bg-gray-100">
              <img 
                src={featuredTestimonial.thumbnail} 
                alt={featuredTestimonial.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-10 w-10 text-blue-600 fill-current ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                {featuredTestimonial.duration}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{featuredTestimonial.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span>{featuredTestimonial.views} views</span>
                    <span>•</span>
                    <span>{featuredTestimonial.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <img 
                  src={featuredTestimonial.thumbnail} 
                  alt={featuredTestimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{featuredTestimonial.name}</p>
                  <p className="text-sm text-gray-500">{featuredTestimonial.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {featuredTestimonial.treatment}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Video Testimonials */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('allTestimonials', 'All Video Testimonials')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative pt-[56.25%] bg-gray-100">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-blue-600 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <Quote className="h-10 w-10 mx-auto mb-4 text-white/50" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('shareYourStory', 'Share Your Smile Story')}
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('shareYourStoryDesc', "We'd love to hear about your experience with our dental care. Your feedback helps us improve and helps others find the care they need.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => navigate('/testimonials/new')}
            >
              {t('shareYourExperience', 'Share Your Experience')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/booking')}
            >
              {t('bookAppointment', 'Book an Appointment')}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoTestimonials;
