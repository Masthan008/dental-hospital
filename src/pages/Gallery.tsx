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
    imageUrl: '/images/gallery/clinic-1.jpg',
    title: 'Modern Dental Office',
    description: 'Our state-of-the-art facility'
  },
  // Add more clinic images...
  
  // Team images
  {
    id: 'team-1',
    type: 'team',
    imageUrl: '/images/gallery/team-1.jpg',
    title: 'Our Expert Team',
    description: 'Dedicated dental professionals'
  },
  // Add more team images...
  
  // Patient images
  {
    id: 'patient-1',
    type: 'patients',
    imageUrl: '/images/gallery/patient-1.jpg',
    title: 'Happy Patient',
    description: 'Satisfied with their new smile'
  },
  // Add more patient images...
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
