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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-warm-yellow/20">
          <h1 className="text-4xl md:text-6xl font-bold text-text-warm mb-6 leading-tight">
            感谢有你
            <span className="block text-rose-pink">师恩难忘</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-warm-yellow rounded-full mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            工业设计七人小组献给
            <span className="font-semibold text-text-warm block mt-2">
              周志老师与王永才老师
            </span>
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-warm-yellow/20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-rose-pink/20 animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full bg-warm-yellow/30 animate-pulse delay-500" />
    </section>
  );
};

export default HeroSection;