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
    [playlist, currentSongId]
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
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <CoverArt coverUrl={currentSong.cover} />
        <div className="flex flex-col gap-4">
          <SongTitle title={currentSong.title} artist={currentSong.artist} />

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

          <VolumeControls volume={volume} onChange={setVolume} />
        </div>
      </div>

      <Playlist songs={playlist} currentSongId={currentSongId} onSelect={setCurrentSongId} />

      <AudioPlayer
        src={currentSong.song}
        isPlaying={isPlaying}
        volume={volume}
        speed={speed}
        onEnded={nextSong}
      />
    </div>
  );
}
