import React from 'react';
import 'music-player/src/index.css';
import 'music-player/src/components/CoverArt';
import 'music-player/src/components/PlayControls';
import 'music-player/src/components/PlayListItem';
import 'music-player/src/components/SongTitle';
import 'music-player/src/components/VolumeControl';

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
