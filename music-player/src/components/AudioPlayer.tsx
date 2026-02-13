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
  const isJsdom =
    typeof navigator !== "undefined" && /jsdom/i.test(navigator.userAgent);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = volume;
    a.playbackRate = speed;
    if (isJsdom) return;

    if (isPlaying) {
      try {
        const result = a.play();
        if (result && typeof result.catch === "function") {
          result.catch(() => undefined);
        }
      } catch {
        // jsdom does not implement media playback APIs.
      }
    } else {
      try {
        a.pause();
      } catch {
        // jsdom does not implement media playback APIs.
      }
    }
  }, [src, isPlaying, volume, speed]);

  // No controls shown
  return <audio ref={audioRef} src={src} onEnded={onEnded} preload="metadata" />;
}
