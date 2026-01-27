import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from './Playlist';

export default function MusicPlayer() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[896px] rounded-lg bg-niners-cream shadow-[0px_4px_4px_0px_rgba(213,215,216,0.25)]
                      dark:bg-niners-graphite dark:shadow-[0px_4px_18px_0px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2">
            <CurrentlyPlaying />
          </div>

          <div className="border-t border-niners-black/10 p-8 md:w-1/2 md:border-l md:border-t-0
                          dark:border-niners-mist/10">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
}
