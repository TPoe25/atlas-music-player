import { Shuffle, SkipBack, Play, Pause, SkipForward } from "lucide-react";

import type { PlaybackSpeed } from "../types/music";

type Props = {
  speed: PlaybackSpeed;
  isPlaying: boolean;
  isShuffle: boolean;
  canBack: boolean;
  canForward: boolean;
  onSpeed: () => void;
  onPlayToggle: () => void;
  onBack: () => void;
  onForward: () => void;
  onShuffle: () => void;
};

export default function PlayControls({
  speed,
  isPlaying,
  isShuffle,
  canBack,
  canForward,
  onSpeed,
  onPlayToggle,
  onBack,
  onForward,
  onShuffle,
}: Props) {
  return (
    <div className="flex w-96 items-center justify-between">
      <button
        onClick={onSpeed}
        className="text-niners-black/70 hover:text-niners-red transition-colors"
        aria-label="Change Playback Speed"
      >
        <span className="text-lg font-medium">{speed}x</span>
      </button>

      <button
        onClick={onBack}
        disabled={!canBack}
        className="text-niners-black/70 hover:text-niners-red transition-colors"
        aria-label="Previous Song"
      >
        <SkipBack size={22} />
      </button>

      <button
        onClick={onPlayToggle}
        className="border-niners-black bg-niners-cream hover:bg-niners-gold/20 rounded-md border-2 p-3 transition-colors"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause size={24} className="text-niners-black" />
        ) : (
          <Play size={24} className="text-niners-black" />
        )}
      </button>

      <button
        onClick={onForward}
        disabled={!canForward}
        className="text-niners-black/70 hover:text-niners-red transition-colors"
        aria-label="Next Song"
      >
        <SkipForward size={22} />
      </button>

      <button
        onClick={onShuffle}
        className="text-niners-black/70 hover:text-niners-red transition-colors"
        aria-label="Shuffle"
        aria-pressed={isShuffle}
      >
        <Shuffle size={18} />
      </button>
    </div>
  );
}
