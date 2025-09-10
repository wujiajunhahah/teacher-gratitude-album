import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import BlessingSection from '@/components/BlessingSection';
import ThanksSection from '@/components/ThanksSection';

const Index = () => {
  // Photo gallery images using the uploaded photos
  const photos = [
    '6ab71b20b5c140ce7affaa8ed18a9368.jpg',
    '4361f34a5c0b7bc13128b423925eeb7b.jpg',
    '31245ab32a7b3624ae253c61395616a1.jpg',
    'b8cd16d1c89638b221618e381cc1c7b8.jpg',
    '30faac6fdc5dbb599e07c2a98f537d9b.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection backgroundImage="6ab71b20b5c140ce7affaa8ed18a9368.jpg" />
      
      {/* Photo Gallery */}
      <PhotoGallery photos={photos} />
      
      {/* Blessing Section */}
      <BlessingSection />
      
      {/* Thanks Section */}
      <ThanksSection />
    </div>
  );
};

export default Index;
