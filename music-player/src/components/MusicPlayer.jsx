// music-player/src/components/MusicPlayer.jsx

import PlayControls from "./PlayControls";
import PlayListItem from "./PlayListItem";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";

export default function MusicPlayer() {
  return (
    <div className="Music-Player-Big w-[896px] h-[640px] top-[-637px] left-[1460px] m-8">
      <div className="Currently-Playing-Big w-[400px] h-[576px] top-[500px] left-[1493px] border-[1px] border-#D5D7D88B bg-zinc-900 flex flex-col items-center p-4 gap-4">
      <div className="CurrentlyPlaying" />
        <SongTitle />
        <CoverArt width={400} height={400} top={-606} left={14923} />
        <PlayControls />
        <PlayListItem />
        <VolumeControls />
      </div>
      <div className="PlayList-Big w-[427px] h-[640px] top-[68px] left-[1908px] border-[1px] border-color-[#D5D7D88B] bg-zinc-800 p-4 overflow-y-auto">
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </div>
    </div>
  );
}
