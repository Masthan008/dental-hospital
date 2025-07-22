
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = () => {
  const { t } = useTranslation('common');
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Sri-Ananth-Dental-Hospital/61559775233916/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/sriananthdentalhospital", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@sriananthdentalhospital", label: "YouTube" },
    { icon: Github, href: "https://github.com/Masthan008/dental-hospital", label: "GitHub" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Patient Info", href: "/patient-info" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ];

  const services = [
    { name: "General Dentistry", href: "/services/general" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Emergency Care", href: "/services/emergency" },
    { name: "Pediatric Care", href: "/services/pediatric" },
    { name: "Implants", href: "/services/implants" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('siteName', 'Sri Ananth Dental Hospital')}
            </div>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for comprehensive dental care. We're committed to helping you achieve optimal oral health and a beautiful smile.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Sri Ananth Dental Hospital</p>
                  <p>Near RTC Complex, Kurnool</p>
                  <p>Andhra Pradesh - 518001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+91 94944 44027</p>
                  <p className="text-blue-300">Emergency: +91 94944 44027</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">sriananthdentalhospital@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Mon-Sat: 8:00 AM - 9:00 PM</p>
                  <p>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 Sri Ananth Dental Hospital. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
