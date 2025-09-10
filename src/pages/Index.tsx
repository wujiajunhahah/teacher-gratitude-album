import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import BlessingSection from '@/components/BlessingSection';
import ThanksSection from '@/components/ThanksSection';

const Index = () => {
  // Photo gallery images using the uploaded photos
  const photos = [
    '/lovable-uploads/1b67a95a-291e-4f12-95da-daddc464a4d9.png',
    '/lovable-uploads/cd2f3ee6-4248-44b2-8047-47610784571e.png',
    '/lovable-uploads/c74770b8-7dfd-48f4-9197-344bf7f54140.png',
    '/lovable-uploads/11cac9a8-5cab-4aab-8e2d-b031dc2fe431.png',
    '/lovable-uploads/17ff1189-0d67-4314-a0c4-efafd068efaf.png',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection backgroundImage="/lovable-uploads/11cac9a8-5cab-4aab-8e2d-b031dc2fe431.png" />
      
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
