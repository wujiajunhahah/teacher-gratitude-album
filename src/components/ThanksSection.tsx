import flowerBouquet from '@/assets/flower-bouquet.jpg';

const ThanksSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${flowerBouquet})` }}
      >
        <div className="absolute inset-0 bg-white/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-pink/20">
          <h2 className="text-3xl md:text-5xl font-bold text-text-warm mb-8 leading-tight">
            未来的日子里
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            我们会带着你们的教诲继续前行
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-warm-yellow rounded-full mx-auto mb-8" />
          
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl font-semibold text-rose-pink">
              感谢周志老师
            </p>
            <p className="text-xl md:text-2xl font-semibold text-rose-pink">
              感谢王永才老师
            </p>
          </div>
          
          {/* QR Code Placeholder */}
          <div className="mx-auto">
            <p className="text-sm text-muted-foreground mb-4">扫码再次访问</p>
            <div className="w-32 h-32 bg-soft-gray border-2 border-dashed border-muted-foreground/30 rounded-xl mx-auto flex items-center justify-center">
              <span className="text-xs text-muted-foreground text-center px-2">
                二维码位置
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-rose-pink/10 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-20 h-20 rounded-full bg-warm-yellow/20 animate-pulse delay-700" />
      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-rose-pink/15 animate-pulse delay-300" />
    </section>
  );
};

export default ThanksSection;