import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MusicPlayer from "../../music-player/src/components/MusicPlayer";

describe("MusicPlayer functionality", () => {
  it("uses the first mocked playlist song as current song by default", async () => {
    render(<MusicPlayer />);

    expect(
      await screen.findByRole("heading", { name: "Mock Song One" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Album cover art")).toHaveAttribute(
      "src",
      "https://cdn.test/mock-song-1.jpg",
    );
  });

  it("toggles play and pause UI", async () => {
    render(<MusicPlayer />);

    await screen.findByRole("heading", { name: "Mock Song One" });
    const playPauseButton = screen.getByRole("button", { name: "Play" });

    fireEvent.click(playPauseButton);
    expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Pause" }));
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
  });

  it("moves to the next song when next button is clicked", async () => {
    render(<MusicPlayer />);

    await screen.findByRole("heading", { name: "Mock Song One" });
    fireEvent.click(screen.getByRole("button", { name: "Next Song" }));

    expect(
      await screen.findByRole("heading", { name: "Mock Song Two" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Album cover art")).toHaveAttribute(
      "src",
      "https://cdn.test/mock-song-2.jpg",
    );
  });

  it("moves back to previous song when previous button is clicked", async () => {
    render(<MusicPlayer />);

    await screen.findByRole("heading", { name: "Mock Song One" });
    fireEvent.click(screen.getByRole("button", { name: "Next Song" }));
    await screen.findByRole("heading", { name: "Mock Song Two" });

    fireEvent.click(screen.getByRole("button", { name: "Previous Song" }));

    expect(
      await screen.findByRole("heading", { name: "Mock Song One" }),
    ).toBeInTheDocument();
  });

  it("changes current song when a playlist song is clicked", async () => {
    render(<MusicPlayer />);

    await screen.findByRole("heading", { name: "Mock Song One" });
    fireEvent.click(screen.getByRole("button", { name: /Mock Song Two/i }));

    expect(
      await screen.findByRole("heading", { name: "Mock Song Two" }),
    ).toBeInTheDocument();
    expect(document.querySelector("audio")).toHaveAttribute(
      "src",
      "https://cdn.test/mock-song-2.mp3",
    );
  });
});
