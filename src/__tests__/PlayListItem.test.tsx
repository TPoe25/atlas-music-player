import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import PlayListItem from "../../music-player/src/components/PlayListItem";
import type { PlaylistSong } from "../../music-player/src/types/music";

const baseSong: PlaylistSong = {
  id: "song-1",
  title: "Shallow Bay",
  artist: "North Sound",
  genre: "Indie",
  duration: 245,
};

describe("PlayListItem snapshots", () => {
  it("renders selected item", () => {
    const { container } = render(
      <PlayListItem song={baseSong} selected={true} onSelect={vi.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders unselected item", () => {
    const { container } = render(
      <PlayListItem song={baseSong} selected={false} onSelect={vi.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders short duration formatting", () => {
    const shortSong: PlaylistSong = {
      ...baseSong,
      id: "song-2",
      duration: 9,
    };
    const { container } = render(
      <PlayListItem song={shortSong} onSelect={vi.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
