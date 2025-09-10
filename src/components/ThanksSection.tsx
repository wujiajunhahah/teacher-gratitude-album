import flowerBouquet from '@/assets/flower-bouquet.jpg';

const ThanksSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${flowerBouquet})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-cream-white/80 to-soft-lavender/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="bg-gradient-to-br from-white/95 via-cream-white/90 to-soft-lavender/20 backdrop-blur-xl rounded-[2.5rem] p-16 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] border border-white/60">
          <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-10 leading-[1.1] tracking-tight animate-slide-up">
            未来的日子里
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            我们会带着你们的教诲继续前行
          </p>
          
          <div className="w-32 h-[3px] bg-gradient-to-r from-warm-coral via-golden-sand to-sage-green rounded-full mx-auto mb-16 animate-glow" />
          
          <div className="space-y-6 mb-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="group">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-warm-coral to-golden-sand bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                感谢周志老师
              </p>
            </div>
            <div className="group">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-golden-sand to-sage-green bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                感谢王永才老师
              </p>
            </div>
          </div>
          
          {/* Beautiful ending message */}
          <div className="mx-auto max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed italic font-light">
              "师者，传道授业解惑也。感恩遇见，感谢有您。"
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-coral/20 via-golden-sand/20 to-sage-green/20 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-pulse">
                <span className="text-2xl">🌸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-warm-coral/10 to-golden-sand/10 animate-pulse backdrop-blur-sm" />
      <div className="absolute bottom-32 right-16 w-28 h-28 rounded-full bg-gradient-to-br from-sage-green/15 to-soft-lavender/15 animate-pulse delay-700 backdrop-blur-sm" />
      <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-golden-sand/12 to-warm-coral/12 animate-pulse delay-300 backdrop-blur-sm" />
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-soft-lavender/10 to-sage-green/10 animate-pulse delay-1000 backdrop-blur-sm" />
    </section>
  );
};

export default ThanksSection;