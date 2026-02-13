import { describe, it, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import CoverArt from "../../music-player/src/components/CoverArt";

describe("CoverArt snapshots", () => {
  it("renders with cover image", () => {
    const { container } = render(
      <CoverArt coverUrl="https://example.com/cover.jpg" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders without cover image", () => {
    const { container } = render(<CoverArt coverUrl={null} />);
    expect(container).toMatchSnapshot();
  });

  it("renders fallback after image error", () => {
    const { container, getByAltText } = render(
      <CoverArt coverUrl="https://example.com/bad-cover.jpg" />
    );
    fireEvent.error(getByAltText("Album cover art"));
    expect(container).toMatchSnapshot();
  });
});
