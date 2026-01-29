import { useEffect, useMemo, useState } from "react";
import type { PlaylistSong, Song, PlaybackSpeed } from "../types/music";

import LoadingSkeleton from "./LoadingSkeleton";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import Playlist from "./Playlist";
import AudioPlayer from "./AudioPlayer";

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<PlaylistSong[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentSongId, setCurrentSongId] = useState<string>("");
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<PlaybackSpeed>(1);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5); // default 50%

  // Fetch playlist (OpenAPI: returns array)
  useEffect(() => {
    let cancelled = false;

    async function loadPlaylist() {
      setLoading(true);
      const res = await fetch("/api/v1/playlist");
      if (!res.ok) throw new Error(`Playlist fetch failed: ${res.status}`);
      const data = (await res.json()) as PlaylistSong[];

      if (!cancelled) {
        setPlaylist(data);
        setCurrentSongId(data[0]?.id ?? "");
        setLoading(false);
      }
    }

    loadPlaylist();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch current song details (OpenAPI: cover + song URL)
  useEffect(() => {
    if (!currentSongId) return;

    let cancelled = false;

    async function loadSong() {
      const res = await fetch(`/api/v1/songs/${currentSongId}`);
      if (!res.ok) throw new Error(`Song fetch failed: ${res.status}`);
      const data = (await res.json()) as Song;

      if (!cancelled) setCurrentSong(data);
    }

    loadSong();
    return () => {
      cancelled = true;
    };
  }, [currentSongId]);

  const currentIndex = useMemo(
    () => playlist.findIndex((s) => s.id === currentSongId),
    [playlist, currentSongId],
  );

  const canBack = currentIndex > 0;
  const canForward =
    isShuffle || (currentIndex !== -1 && currentIndex < playlist.length - 1);

  function prevSong() {
    if (!canBack) return;
    setCurrentSongId(playlist[currentIndex - 1].id);
  }

  function nextSong() {
    if (!playlist.length || currentIndex === -1) return;

    if (isShuffle) {
      if (playlist.length === 1) return;
      let next = currentIndex;
      while (next === currentIndex) {
        next = Math.floor(Math.random() * playlist.length);
      }
      setCurrentSongId(playlist[next].id);
      return;
    }

    if (currentIndex < playlist.length - 1) {
      setCurrentSongId(playlist[currentIndex + 1].id);
    }
  }

  function cycleSpeed() {
    setSpeed((s) => (s === 0.5 ? 1 : s === 1 ? 2 : 0.5));
  }

  if (loading) return <LoadingSkeleton />;
  if (!currentSong) return null;

  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-[456px] lg:max-w-[896px]">
        <div className="bg-niners-gold/25 dark:bg-niners-night overflow-hidden rounded-lg shadow-[0px_4px_4px_0px_rgba(213,215,216,0.25)]">
          <div className="grid grid-cols-1 lg:grid-cols-[448px_448px]">
            {/* LEFT PANEL */}
            <div className="p-6 lg:p-8">
              <div className="flex flex-col items-center gap-6">
                <CoverArt coverUrl={currentSong.cover} />

                <SongTitle
                  title={currentSong.title}
                  artist={currentSong.artist}
                />

                <PlayControls
                  speed={speed}
                  isPlaying={isPlaying}
                  isShuffle={isShuffle}
                  canBack={canBack}
                  canForward={canForward}
                  onSpeed={cycleSpeed}
                  onPlayToggle={() => setIsPlaying((p) => !p)}
                  onBack={prevSong}
                  onForward={nextSong}
                  onShuffle={() => setIsShuffle((v) => !v)}
                />

                <div className="w-full">
                  <VolumeControls volume={volume} onChange={setVolume} />
                </div>
              </div>
            </div>

             {/* RIGHT PANEL */}
            <div className="p-6 lg:border-l lg:border-niners-black/30 lg:p-8 dark:lg:border-niners-mist/20">
              <h2 className="mb-3 text-lg font-bold text-niners-black dark:text-niners-mist">
                Playlist
              </h2>

              <div className="rounded-md bg-niners-gold/30 p-6 dark:bg-niners-night">
                {/* Mobile taller, desktop fixed like figma */}
                <div className="max-h-[700px] overflow-y-auto lg:max-h-[560px]">
                  <Playlist
                    songs={playlist}
                    currentSongId={currentSongId}
                    onSelect={setCurrentSongId}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <AudioPlayer
          src={currentSong.song}
          isPlaying={isPlaying}
          volume={volume}
          speed={speed}
          onEnded={nextSong}
        />
      </div>
    </div>
  );
}
