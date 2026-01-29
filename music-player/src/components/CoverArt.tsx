import placeholder from "../assets/placeholder.svg";

type Props = {
  coverUrl?: string;
};
export default function CoverArt({ coverUrl }: Props) {
  return (
    <img
      src={coverUrl && coverUrl.trim() ? coverUrl : placeholder}
      alt="Cover Art"
      className="bg-niners-cream border-niners-black h-96 w-96 rounded-lg object-cover"
    />
  );
}
