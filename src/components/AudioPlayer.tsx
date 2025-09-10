import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc?: string;
}

const AudioPlayer = ({ audioSrc = "9月10日 下午5点18分.m4a" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="max-w-lg mx-auto">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div className="bg-gradient-to-br from-white/90 to-cream-white/80 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-6 mb-6">
          <Button
            onClick={togglePlayPause}
            variant="secondary"
            size="lg"
            className="rounded-full w-20 h-20 bg-gradient-to-br from-warm-coral to-golden-sand hover:from-warm-coral/90 hover:to-golden-sand/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white ml-1" />
            )}
          </Button>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Volume2 className="h-5 w-5 text-sage-green" />
              <span className="text-lg font-semibold text-deep-charcoal">
                来自七人小组的祝福
              </span>
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full h-3 bg-gradient-to-r from-soft-lavender/30 to-sage-green/20 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-warm-coral via-golden-sand to-sage-green transition-all duration-300 rounded-full shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;