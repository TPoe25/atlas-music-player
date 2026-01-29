import { useEffect, useRef } from "react";
import type { PlaybackSpeed } from "../types/music";

type Props = {
  src: string;
  isPlaying: boolean;
  volume: number; // 0..1
  speed: PlaybackSpeed;
  onEnded?: () => void;
};

export default function AudioPlayer({ src, isPlaying, volume, speed, onEnded }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = volume;
    a.playbackRate = speed;

    if (isPlaying) {
      void a.play();
    } else {
      a.pause();
    }
  }, [src, isPlaying, volume, speed]);

  // No controls shown
  return <audio ref={audioRef} src={src} onEnded={onEnded} preload="metadata" />;
}
