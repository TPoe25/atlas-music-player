// music-player/src/components/MusicPlayer.jsx

import PlayControls from "./PlayControls";
import PlayListItem from "./PlayListItem";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";

export default function MusicPlayer() {
  return (
    <div className="Music-Player-Big w-[896px] h-[640px] top-[-637px] left-[1460px] m-8">
      <SongTitle />
      <CoverArt />
      <PlayControls />
      <PlayListItem />
      <VolumeControls />
    </div>
  );
}
