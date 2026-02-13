import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import VolumeControls from "../../music-player/src/components/VolumeControls";

describe("VolumeControl snapshots", () => {
  it("renders muted", () => {
    const { container } = render(<VolumeControls volume={0} onChange={vi.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it("renders half volume", () => {
    const { container } = render(
      <VolumeControls volume={0.5} onChange={vi.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders full volume", () => {
    const { container } = render(<VolumeControls volume={1} onChange={vi.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
