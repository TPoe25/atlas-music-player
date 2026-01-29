import type { PlaylistSong } from "../types/music";

type Props = {
  song: PlaylistSong;
  selected?: boolean;
  onSelect: (id: string) => void;
};

function formatHHMM(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export default function PlayListItem({
  song,
  selected = false,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(song.id)}
      className={[
        "w-full rounded-md px-4 py-2 text-left",
        selected ? "bg-niners-gold/20 dark:bg-niners-red/20" : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="text-niners-black dark:text-niners-mist truncate text-base font-semibold">
            {song.title}
          </p>
          <p className="text-niners-black/60 dark:text-niners-mist/70 truncate text-sm font-medium">
            {song.artist}
          </p>
        </div>

        <span className="text-niners-black/50 dark:text-niners-mist/60 shrink-0 text-sm font-medium">
          {formatHHMM(song.duration)}
        </span>
      </div>
    </button>
  );
}
