// music-player/src/components/MusicPlayer.jsx

import PlayControls from "./PlayControls";
import PlayListItem from "./PlayListItem";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";

export default function MusicPlayer() {
  return (
    <div className="Music-Player-Big w-[896px] h-[640px] top-[-637px] left-[1460px] m-8">
      <div className="Currently-Playing-Big w-[400px] h-[576px] top-[500px] left-[1493px]">
        <SongTitle />
        <CoverArt />
        <PlayControls />
        <PlayListItem />
        <VolumeControls />
      </div>
      <div className="Playlist-Big w-[427px] h-[640px] top-[-637px] left-[1908px] border-[1px] border-#D5D7D88B ">
        {/* Add your playlist items here */}
      </div>
    </div>
  );
}
