import type { PlaylistSong } from "../types/music";
import PlayListItem from "./PlayListItem";

type Props = {
  songs: PlaylistSong[];
  currentSongId: string;
  onSelect: (id: string) => void;
};

export default function Playlist({ songs, currentSongId, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {songs.map((song) => (
        <PlayListItem
          key={song.id}
          song={song}
          selected={song.id === currentSongId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
