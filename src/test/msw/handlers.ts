import { http, HttpResponse } from "msw";
import type { PlaylistSong, Song } from "../../../music-player/src/types/music";

const playlist: PlaylistSong[] = [
  {
    id: "song-1",
    title: "Mock Song One",
    artist: "Mock Artist A",
    genre: "Rock",
    duration: 215,
  },
  {
    id: "song-2",
    title: "Mock Song Two",
    artist: "Mock Artist B",
    genre: "Pop",
    duration: 187,
  },
];

const songsById: Record<string, Song> = {
  "song-1": {
    ...playlist[0],
    cover: "https://cdn.test/mock-song-1.jpg",
    song: "https://cdn.test/mock-song-1.mp3",
  },
  "song-2": {
    ...playlist[1],
    cover: "https://cdn.test/mock-song-2.jpg",
    song: "https://cdn.test/mock-song-2.mp3",
  },
};

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json(playlist);
  }),

  http.get("/api/v1/songs/:id", ({ params }) => {
    const id = String(params.id);
    const song = songsById[id];
    if (!song) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(song);
  }),
];
