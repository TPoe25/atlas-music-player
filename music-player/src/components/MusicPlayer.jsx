import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from './Playlist';

export default function MusicPlayer() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[896px] rounded-lg bg-white shadow-[0px_4px_4px_0px_rgba(213,215,216,0.25)]">
        <div className="flex flex-col md:flex-row">
          {/* Left panel */}
          <div className="p-8 md:w-1/2">
            <CurrentlyPlaying />
          </div>

          {/* Right panel + divider */}
          <div className="border-t border-zinc-300/50 p-8 md:w-1/2 md:border-l md:border-t-0">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
}
