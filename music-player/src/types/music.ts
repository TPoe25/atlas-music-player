export type PlaylistSong = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number; // Duration in seconds
};

export type Song = PlaylistSong & {
  cover: string; // URL to cover image
  song: string; // URL to audio file
};

export type Lyrics = {
  lyrics: string; // Full lyrics text
};

export type PlaybackSpeed = 0.5 | 1 | 2;
