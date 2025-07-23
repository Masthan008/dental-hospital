
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutPreview } from "@/components/AboutPreview";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { doctors } from "@/data/doctors";

const Index = () => {
  // Import doctors
  // ...existing code...
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <Hero />
      {/* Doctors Section replacing Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">Our Doctors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6">
                <img src={doctor.image} alt={doctor.name} className="w-48 h-48 object-cover rounded-full mb-4 border-4 border-blue-200" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 mb-2">{doctor.title}</p>
                <p className="text-gray-600 text-center mb-2">{doctor.specialties.join(', ')}</p>
                <p className="text-gray-500 text-sm mb-2">Experience: {doctor.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AboutPreview />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
