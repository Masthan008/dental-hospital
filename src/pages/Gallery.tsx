import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Users, Smile } from "lucide-react";

type GalleryItem = {
  id: string;
  type: 'clinic' | 'team' | 'patients';
  imageUrl: string;
  title: string;
  description?: string;
};

const galleryItems: GalleryItem[] = [
  // Clinic images
  {
    id: 'clinic-1',
    type: 'clinic',
    imageUrl: '/images/hero/dental-chair-and-equipment-patie.jpg',
    title: 'Dental Chair & Equipment',
    description: 'Modern dental equipment for patient comfort.'
  },
  {
    id: 'clinic-2',
    type: 'clinic',
    imageUrl: '/images/hero/dentist-2589771.jpg',
    title: 'Clinic Interior',
    description: 'Clean and welcoming environment.'
  },
  {
    id: 'clinic-3',
    type: 'clinic',
    imageUrl: '/images/hero/all-on-4-dental-implants-belfast-8378579.jpg',
    title: 'Implant Room',
    description: 'Advanced dental implant procedures.'
  },
  // Uploaded gallery images
  {
    id: 'gallery-1',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0021.jpg',
    title: 'Gallery Image 1',
    description: ''
  },
  {
    id: 'gallery-2',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0022.jpg',
    title: 'Gallery Image 2',
    description: ''
  },
  {
    id: 'gallery-3',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0023.jpg',
    title: 'Gallery Image 3',
    description: ''
  },
  {
    id: 'gallery-4',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0024.jpg',
    title: 'Gallery Image 4',
    description: ''
  },
  {
    id: 'gallery-5',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0025.jpg',
    title: 'Gallery Image 5',
    description: ''
  },
  {
    id: 'gallery-6',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0026.jpg',
    title: 'Gallery Image 6',
    description: ''
  },
  {
    id: 'gallery-7',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0027.jpg',
    title: 'Gallery Image 7',
    description: ''
  },
  {
    id: 'gallery-8',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0028.jpg',
    title: 'Gallery Image 8',
    description: ''
  },
  {
    id: 'gallery-9',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0029.jpg',
    title: 'Gallery Image 9',
    description: ''
  },
  {
    id: 'gallery-10',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0030.jpg',
    title: 'Gallery Image 10',
    description: ''
  },
  {
    id: 'gallery-11',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0031.jpg',
    title: 'Gallery Image 11',
    description: ''
  },
  {
    id: 'gallery-12',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0032.jpg',
    title: 'Gallery Image 12',
    description: ''
  },
  {
    id: 'gallery-13',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0033.jpg',
    title: 'Gallery Image 13',
    description: ''
  },
  {
    id: 'gallery-14',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0034.jpg',
    title: 'Gallery Image 14',
    description: ''
  },
  {
    id: 'gallery-15',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0035.jpg',
    title: 'Gallery Image 15',
    description: ''
  },
  {
    id: 'gallery-16',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0036.jpg',
    title: 'Gallery Image 16',
    description: ''
  },
  {
    id: 'gallery-17',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0037.jpg',
    title: 'Gallery Image 17',
    description: ''
  },
  {
    id: 'gallery-18',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0038.jpg',
    title: 'Gallery Image 18',
    description: ''
  },
  {
    id: 'gallery-19',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0039.jpg',
    title: 'Gallery Image 19',
    description: ''
  },
  {
    id: 'gallery-20',
    type: 'clinic',
    imageUrl: '/images/gallery/IMG-20250723-WA0040.jpg',
    title: 'Gallery Image 20',
    description: ''
  },
  // Team images
  {
    id: 'team-1',
    type: 'team',
    imageUrl: '/images/doctors/dr-gireesha-reddy.jpg',
    title: 'Dr. Gireesha Reddy',
    description: 'BDS, MDS [MBBS]'
  },
  {
    id: 'team-2',
    type: 'team',
    imageUrl: '/images/doctors/dr-srujan-kumar.jpg',
    title: 'Dr. P Srujan Kumar',
    description: 'BDS, MDS - Periodontist and Implantologist'
  },
  // Patient images
  {
    id: 'patient-1',
    type: 'patients',
    imageUrl: '/images/hero/dental-chair-and-equipment-patie.jpg',
    title: 'Happy Patient',
    description: 'Satisfied with their new smile.'
  }
];

export default function Gallery() {
  const clinicImages = galleryItems.filter(item => item.type === 'clinic');
  const teamImages = galleryItems.filter(item => item.type === 'team');
  const patientImages = galleryItems.filter(item => item.type === 'patients');

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
        <p className="text-lg text-muted-foreground">A glimpse of our clinic, team, and happy patients</p>
      </div>

      <Tabs defaultValue="clinic" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="clinic" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Clinic
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Our Team
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex items-center gap-2">
              <Smile className="h-4 w-4" />
              Happy Patients
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="clinic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicImages.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamImages.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="patients">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientImages.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Book Your Appointment Today</h2>
        <p className="text-muted-foreground mb-6">Experience our state-of-the-art dental care</p>
        <Button size="lg">Book Now</Button>
      </div>
    </div>
  );
}
