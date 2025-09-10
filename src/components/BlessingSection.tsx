import AudioPlayer from './AudioPlayer';

const BlessingSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-soft-lavender/20 via-cream-white to-sage-green/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-warm-coral" />
        <div className="absolute bottom-32 right-32 w-32 h-32 rounded-full bg-golden-sand" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-sage-green" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-charcoal mb-6 tracking-tight">
            我们的祝福
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-warm-coral via-golden-sand to-sage-green rounded-full mx-auto mb-6 animate-glow" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            这是我们七个人共同的祝福，请老师收下！
          </p>
        </div>
        
        <div className="mb-16 animate-scale-in">
          <AudioPlayer />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group text-center p-8 bg-gradient-to-br from-white/80 to-cream-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-500 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-coral/30 to-warm-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-warm-coral font-bold text-2xl">感</span>
            </div>
            <h3 className="font-bold text-deep-charcoal mb-3 text-lg">感恩</h3>
            <p className="text-muted-foreground leading-relaxed">感谢您的悉心教导</p>
          </div>
          
          <div className="group text-center p-8 bg-gradient-to-br from-white/80 to-cream-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-golden-sand/40 to-golden-sand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-golden-sand font-bold text-2xl">恩</span>
            </div>
            <h3 className="font-bold text-deep-charcoal mb-3 text-lg">师恩</h3>
            <p className="text-muted-foreground leading-relaxed">您的恩情我们铭记在心</p>
          </div>
          
          <div className="group text-center p-8 bg-gradient-to-br from-white/80 to-cream-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-sage-green/30 to-sage-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-sage-green font-bold text-2xl">谢</span>
            </div>
            <h3 className="font-bold text-deep-charcoal mb-3 text-lg">感谢</h3>
            <p className="text-muted-foreground leading-relaxed">谢谢您陪伴我们成长</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessingSection;