import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

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
});
