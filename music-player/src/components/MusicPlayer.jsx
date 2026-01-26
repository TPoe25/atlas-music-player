import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from './Playlist';

export default function MusicPlayer() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[896px] rounded-lg bg-white text-black shadow-[0px_4px_4px_0px_rgba(213,215,216,0.25)]">
        {/* Small screens: stacked | Medium+: two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left panel */}
          <div className="p-8">
            <CurrentlyPlaying />
          </div>

          {/* Right panel + divider */}
          <div className="border-t border-zinc-300/50 p-8 md:border-t-0 md:border-l">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
}
