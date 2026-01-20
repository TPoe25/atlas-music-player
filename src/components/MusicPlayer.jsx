export default function MusicPlayer() {
  return (
    <div className="music-player">
      <CoverArt />
      <PlayControls />
      <PlayListItem />
      <SongTitle />
      <VolumeControl />
    </div>
  );
}
