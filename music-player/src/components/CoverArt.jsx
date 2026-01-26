import placeholder from '../assets/placeholder.svg';

export default function CoverArt() {
  return (
      <img
        src={placeholder}
        alt="Cover Art"
        className="h-96 w-96 rounded-lg bg-slate-100 object-cover"
      />
  );
}
