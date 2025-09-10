import AudioPlayer from './AudioPlayer';

const BlessingSection = () => {
  return (
    <section className="py-20 px-4 bg-soft-gray/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-warm mb-4">
            我们的祝福
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-pink to-warm-yellow rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            这是我们七个人共同的祝福，请老师收下！
          </p>
        </div>
        
        <div className="mb-8">
          <AudioPlayer />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white/50 rounded-2xl">
            <div className="w-12 h-12 bg-rose-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-rose-pink font-bold text-lg">感</span>
            </div>
            <h3 className="font-semibold text-text-warm mb-2">感恩</h3>
            <p className="text-sm text-muted-foreground">感谢您的悉心教导</p>
          </div>
          
          <div className="text-center p-6 bg-white/50 rounded-2xl">
            <div className="w-12 h-12 bg-warm-yellow/60 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-text-warm font-bold text-lg">恩</span>
            </div>
            <h3 className="font-semibold text-text-warm mb-2">师恩</h3>
            <p className="text-sm text-muted-foreground">您的恩情我们铭记在心</p>
          </div>
          
          <div className="text-center p-6 bg-white/50 rounded-2xl">
            <div className="w-12 h-12 bg-rose-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-rose-pink font-bold text-lg">谢</span>
            </div>
            <h3 className="font-semibold text-text-warm mb-2">感谢</h3>
            <p className="text-sm text-muted-foreground">谢谢您陪伴我们成长</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessingSection;