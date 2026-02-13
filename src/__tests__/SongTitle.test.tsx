import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SongTitle from "../../music-player/src/components/SongTitle";

describe("SongTitle snapshots", () => {
  it("renders title and artist", () => {
    const { container } = render(
      <SongTitle title="Electric Dawn" artist="Ari Vale" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders long values", () => {
    const { container } = render(
      <SongTitle
        title="When the Sun Breaks Through the Rain and We Keep Driving"
        artist="The Midnight Travelers Collective"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
