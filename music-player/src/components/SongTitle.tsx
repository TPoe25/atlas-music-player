type Props = {
  title: string;
  artist: string;
};

export default function SongTitle({ title, artist }: Props) {
  return (
    <div className="w-full text-left">
      <h2 className="text-2xl font-bold text-niners-red">
        {title}
      </h2>
      <p className="mt-1 text-base text-niners-red/60">
        {artist}
      </p>
    </div>
  );
}
