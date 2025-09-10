import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, SkipForward, SkipBack } from 'lucide-react';

interface AudioFile {
  name: string;
  src: string;
  description: string;
}

const MultiAudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioFiles: AudioFile[] = [
    {
      name: "感谢录音1",
      src: "9月10日 下午5点18分.m4a",
      description: "这是我们七人小组对周志老师和王永才老师的感谢录音"
    },
    {
      name: "祝福录音",
      src: "祝福1.m4a",
      description: "来自七人小组的祝福录音"
    },
    {
      name: "学院录音",
      src: "深圳技术大学大数据与互联网学院 2.m4a",
      description: "学院相关的录音内容"
    },
    {
      name: "新录音2",
      src: "新录音 2.m4a",
      description: "七人小组的额外祝福录音"
    },
    {
      name: "学生公寓录音",
      src: "深圳技术大学学生公寓17B栋.m4a",
      description: "来自学生公寓的特别录音"
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      // 自动播放下一首
      if (currentTrack < audioFiles.length - 1) {
        setCurrentTrack(currentTrack + 1);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = audioFiles[currentTrack].src;
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentTrack]);

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

  const nextTrack = () => {
    if (currentTrack < audioFiles.length - 1) {
      setCurrentTrack(currentTrack + 1);
    }
  };

  const prevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <audio ref={audioRef} preload="metadata" />
      
      <div className="bg-gradient-to-br from-white/90 to-cream-white/80 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)]">
        {/* 当前播放信息 */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-deep-charcoal mb-2">
            {audioFiles[currentTrack].name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {audioFiles[currentTrack].description}
          </p>
          <div className="text-xs text-muted-foreground mt-2">
            {currentTrack + 1} / {audioFiles.length}
          </div>
        </div>

        {/* 播放控制 */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button
            onClick={prevTrack}
            variant="outline"
            size="sm"
            disabled={currentTrack === 0}
            className="rounded-full w-12 h-12"
          >
            <SkipBack className="h-5 w-5" />
          </Button>
          
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
          
          <Button
            onClick={nextTrack}
            variant="outline"
            size="sm"
            disabled={currentTrack === audioFiles.length - 1}
            className="rounded-full w-12 h-12"
          >
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
        
        {/* 进度条 */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <Volume2 className="h-4 w-4 text-sage-green" />
            <span className="text-sm text-muted-foreground font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
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

        {/* 播放列表 */}
        <div className="space-y-2">
          {audioFiles.map((file, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                index === currentTrack
                  ? 'bg-gradient-to-r from-warm-coral/20 to-golden-sand/20 border border-warm-coral/30'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentTrack(index)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm text-deep-charcoal">
                    {file.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {file.description}
                  </div>
                </div>
                {index === currentTrack && isPlaying && (
                  <div className="w-2 h-2 bg-warm-coral rounded-full animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiAudioPlayer;
