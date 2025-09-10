interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-white/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="bg-gradient-to-br from-cream-white via-white to-soft-lavender/30 backdrop-blur-lg rounded-[2rem] p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-white/40">
          <h1 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6 leading-tight tracking-tight">
            感谢有你
            <span className="block bg-gradient-to-r from-warm-coral to-golden-sand bg-clip-text text-transparent">师恩难忘</span>
          </h1>
          
          <div className="w-32 h-[2px] bg-gradient-to-r from-warm-coral via-golden-sand to-sage-green rounded-full mx-auto mb-8 animate-glow" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            工业设计七人小组献给
            <span className="font-semibold text-deep-charcoal block mt-2 text-xl md:text-2xl">
              周志老师与王永才老师
            </span>
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-warm-coral/20 to-golden-sand/20 animate-pulse backdrop-blur-sm" />
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-sage-green/20 to-soft-lavender/20 animate-pulse delay-1000 backdrop-blur-sm" />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-golden-sand/30 to-warm-coral/30 animate-pulse delay-500 backdrop-blur-sm" />
      <div className="absolute bottom-1/3 left-16 w-14 h-14 rounded-full bg-gradient-to-br from-soft-lavender/25 to-sage-green/25 animate-pulse delay-700 backdrop-blur-sm" />
    </section>
  );
};

export default HeroSection;