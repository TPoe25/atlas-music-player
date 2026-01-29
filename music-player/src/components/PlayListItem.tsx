import type { PlaylistSong } from "../types/music";

type Props = {
  song: PlaylistSong;
  selected?: boolean;
  onSelect: (id: string) => void;
};

function formatMMSS(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function PlayListItem({ song, selected = false, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(song.id)}
      className={[
        "w-full rounded-md px-4 py-3 text-left transition-colors",
        selected
          ? "bg-niners-black/10 dark:bg-niners-mist/10"
          : "hover:bg-niners-black/5 dark:hover:bg-niners-mist/5",
      ].join(" ")}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_3.5rem] items-center gap-6">
        {/* Left */}
        <div className="min-w-0">
          {/* if you truly want FULL title, remove line-clamp + allow wrap */}
          <p className="text-base font-semibold text-niners-black dark:text-niners-mist">
            {song.title}
          </p>
          <p className="text-sm font-medium text-niners-black/60 dark:text-niners-mist/70">
            {song.artist}
          </p>
        </div>

        {/* Right time */}
        <span className="whitespace-nowrap text-right text-sm font-medium tabular-nums text-niners-black/50 dark:text-niners-mist/60">
          {formatMMSS(song.duration)}
        </span>
      </div>
    </button>
  );
}
