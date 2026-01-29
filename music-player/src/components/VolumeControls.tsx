type Props = {
  volume: number; // Volume level between 0 and 1
  onChange: (volume: number) => void;
};

export default function VolumeControls({ volume, onChange }: Props) {
  return (
    <input
      type="range"
      className="bg-niners-red/50 accent-niners-red/70 flex items-center justify-between w-full"
      min={0}
      max={100}
      value={Math.round(volume * 100)}
      onChange={(e) => onChange(Number(e.target.value) / 100)}
      aria-label="Volume Control"
    />
  );
}
