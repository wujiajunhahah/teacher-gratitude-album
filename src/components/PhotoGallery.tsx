interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-cream-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
            美好回忆
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-warm-coral to-golden-sand rounded-full mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;