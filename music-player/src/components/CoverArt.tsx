import placeholder from "../assets/placeholder.svg";

type Props = { coverUrl?: string };

export default function CoverArt({ coverUrl }: Props) {
  return (
    <img
      src={coverUrl && coverUrl.trim() ? coverUrl : placeholder}
      alt="Cover Art"
      className="h-96 w-96 rounded-md object-cover"
    />
  );
}
