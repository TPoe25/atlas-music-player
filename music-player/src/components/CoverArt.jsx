import placeholder from '../assets/placeholder.svg';

export default function CoverArt() {
  return (
    <div className="aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/10">
      <img
        src={placeholder}
        alt="Cover Art"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
