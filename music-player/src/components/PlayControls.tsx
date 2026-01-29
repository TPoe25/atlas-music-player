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
  const iconBtn =
    "h-10 w-10 rounded-md flex items-center justify-center transition-colors " +
    "hover:bg-niners-gold/20 dark:hover:bg-niners-graphite " +
    "disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <div className="flex w-full items-center justify-between">
      {/* Speed */}
      <button
        onClick={onSpeed}
        className="text-niners-black hover:bg-niners-gold/20 dark:text-niners-mist dark:hover:bg-niners-graphite h-10 rounded-md px-3 text-lg font-normal transition-colors"
        aria-label="Change Playback Speed"
        type="button"
      >
        {speed}x
      </button>

      {/* Back */}
      <button
        onClick={onBack}
        disabled={!canBack}
        className={iconBtn}
        aria-label="Previous Song"
        type="button"
      >
        <SkipBack
          size={22}
          className="text-niners-black dark:text-niners-mist"
        />
      </button>

      {/* Play/Pause */}
      <button
        onClick={onPlayToggle}
        className="border-niners-black hover:bg-niners-gold/20 dark:border-niners-mist dark:bg-niners-night dark:hover:bg-niners-graphite flex h-12 w-12 items-center justify-center rounded-md border-2 bg-niners-gold transition-colors"
        aria-label={isPlaying ? "Pause" : "Play"}
        type="button"
      >
        {isPlaying ? (
          <Pause
            size={22}
            className="text-niners-black dark:text-niners-mist"
          />
        ) : (
          <Play size={22} className="text-niners-black dark:text-niners-mist" />
        )}
      </button>

      {/* Forward */}
      <button
        onClick={onForward}
        disabled={!canForward}
        className={iconBtn}
        aria-label="Next Song"
        type="button"
      >
        <SkipForward
          size={22}
          className="text-niners-black dark:text-niners-mist"
        />
      </button>

      {/* Shuffle */}
      <button
        onClick={onShuffle}
        className={[
          iconBtn,
          isShuffle
            ? "text-niners-red"
            : "text-niners-black/70 dark:text-niners-mist/80",
        ].join(" ")}
        aria-label="Shuffle"
        aria-pressed={isShuffle}
        type="button"
      >
        <Shuffle size={18} />
      </button>
    </div>
  );
}
