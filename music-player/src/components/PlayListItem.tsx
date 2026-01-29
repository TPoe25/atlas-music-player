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
        "w-full px-5 py-4 text-left transition-colors",
        selected
          ? "bg-niners-black/10 dark:bg-niners-mist/10"
          : "hover:bg-niners-black/5 dark:hover:bg-niners-mist/5",
      ].join(" ")}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_3.5rem] items-start gap-6">
        <div className="min-w-0">
          <p className="text-niners-black dark:text-niners-mist text-base leading-5 font-semibold wrap-word whitespace-normal">
            {song.title}
          </p>
          <p className="text-niners-black/60 dark:text-niners-mist/70 mt-1 text-sm leading-5 font-medium wrap-word whitespace-normal">
            {song.artist}
          </p>
        </div>

        <span className="text-niners-black/50 dark:text-niners-mist/60 text-right text-sm font-medium tabular-nums">
          {formatMMSS(song.duration)}
        </span>
      </div>
    </button>
  );
}
