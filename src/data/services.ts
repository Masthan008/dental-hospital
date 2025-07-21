import { Stethoscope, Sparkles, Shield, Smile, Zap, Baby, Crown, Heart } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  duration: string;
  price: string;
  image: string;
  details?: string[];
  popular?: boolean;
  color?: string;
}

export const services: Service[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Comprehensive preventive and restorative care for the whole family.',
    icon: Stethoscope,
    features: [
      'Regular Cleanings & Check-ups',
      'Dental Exams & X-rays',
      'Fillings & Restorations',
      'Gum Disease Treatment',
      'Root Canal Therapy',
      'Tooth Extractions'
    ],
    duration: '30-90 minutes',
    price: 'From $89',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Our general dentistry services are designed to maintain optimal oral health for patients of all ages. We focus on preventive care to help you avoid dental problems before they start.',
      'Regular dental check-ups are essential for maintaining good oral health. During these visits, we perform professional cleanings, thorough examinations, and oral cancer screenings.',
      'We use the latest technology and techniques to provide comfortable and effective treatments for all your dental needs, from simple cleanings to more complex procedures.'
    ],
    popular: true
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our cosmetic dental treatments.',
    icon: Sparkles,
    features: [
      'Teeth Whitening',
      'Porcelain Veneers',
      'Dental Bonding',
      'Invisalign Clear Aligners',
      'Gum Contouring',
      'Smile Makeovers'
    ],
    duration: '1-3 hours',
    price: 'From $299',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Transform your smile with our comprehensive cosmetic dentistry services. Whether you\'re looking for subtle changes or a complete smile makeover, we have the solutions to help you achieve the smile you\'ve always wanted.',
      'Our cosmetic treatments are customized to your unique needs and goals, using high-quality materials and advanced techniques for natural-looking, long-lasting results.',
      'We offer a range of options to address various cosmetic concerns, from teeth whitening for a brighter smile to porcelain veneers for correcting chips, gaps, or misalignments.'
    ],
    popular: true
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with our orthodontic solutions.',
    icon: Zap,
    features: [
      'Traditional Braces',
      'Invisalign Clear Aligners',
      'Lingual Braces',
      'Retainers',
      'Early Treatment',
      'Adult Orthodontics'
    ],
    duration: '12-24 months',
    price: 'From $3,999',
    image: 'https://images.unsplash.com/photo-1629909613807-0f474baa822b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Achieve a straighter, healthier smile with our comprehensive orthodontic treatments. We offer a variety of options to suit different needs and lifestyles, from traditional braces to virtually invisible aligners.',
      'Our orthodontic treatments are suitable for patients of all ages, with early intervention options for children and discreet solutions for adults.',
      'We use the latest technology, including digital impressions and 3D treatment planning, to ensure precise, comfortable, and efficient treatment.'
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care designed specifically for children.',
    icon: Baby,
    features: [
      'Child-Friendly Environment',
      'Preventive Care',
      'Dental Sealants',
      'Fluoride Treatments',
      'Habit Counseling',
      'Emergency Care'
    ],
    duration: '30-60 minutes',
    price: 'From $79',
    image: 'https://images.unsplash.com/photo-1577898226791-5c3b9a0b7c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Our pediatric dental services are designed to make dental visits fun and stress-free for children. We create a welcoming environment where kids can feel comfortable and at ease.',
      'We focus on preventive care and education to help children develop good oral hygiene habits that will last a lifetime.',
      'Our team is specially trained to work with children of all ages, from toddlers to teenagers, and we offer a range of treatments to meet their unique dental needs.'
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look and feel natural.',
    icon: Crown,
    features: [
      'Single Tooth Implants',
      'Implant-Supported Bridges',
      'All-on-4 Implants',
      'Bone Grafting',
      'Sinus Lifts',
      'Implant Crowns'
    ],
    duration: '3-6 months',
    price: 'From $1,999',
    image: 'https://images.unsplash.com/photo-1589998055331-a674986e46a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Dental implants are the gold standard for replacing missing teeth, offering a permanent solution that looks, feels, and functions like natural teeth.',
      'Our implant procedures are performed with precision and care, using high-quality materials and advanced techniques for optimal results.',
      'We offer comprehensive implant services, from initial consultation and treatment planning to implant placement and restoration.'
    ],
    popular: true
  },
  {
    id: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    description: 'Immediate care for dental emergencies when you need it most.',
    icon: Shield,
    features: [
      'Toothache Relief',
      'Chipped/Broken Teeth',
      'Knocked-Out Teeth',
      'Lost Fillings/Crowns',
      'Dental Abscess',
      'Broken Dentures'
    ],
    duration: '30-120 minutes',
    price: 'From $99',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Dental emergencies can happen at any time, and we\'re here to help when they do. We offer same-day emergency appointments to provide prompt relief and treatment.',
      'Our team is experienced in handling a wide range of dental emergencies, from severe toothaches to broken teeth and lost restorations.',
      'We understand that dental emergencies can be stressful, and we strive to make your visit as comfortable and efficient as possible.'
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export default services;
