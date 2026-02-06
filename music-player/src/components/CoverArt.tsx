import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import CoverArt from "../../music-player/src/components/CoverArt";

describe("CoverArt snapshot tests", () => {
  it("renders with a valid cover image", () => {
    const { container } = render(
      <CoverArt coverUrl="/covers/test-cover.jpg" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with a different cover image", () => {
    const { container } = render(
      <CoverArt coverUrl="/covers/another-cover.png" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with a different cover image", () => {
    const { container } = render(
      <CoverArt coverUrl="/covers/another-cover.png" />,
    );

    expect(container).toMatchSnapshot();
  });
});
