import { useState } from "react";

type Props = {
  coverUrl: string | null;
};

export default function CoverArt({ coverUrl }: Props) {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = Boolean(coverUrl) && !hasImageError;

  return (
    <div className="bg-niners-black/10 dark:bg-niners-mist/10 aspect-square w-full max-w-70 overflow-hidden rounded-2xl">
      {showImage ? (
        <img
          src={coverUrl!}
          alt="Album cover art"
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="text-niners-black/60 dark:text-niners-mist/60 flex h-full items-center justify-center text-sm font-medium">
          No cover art
        </div>
      )}
    </div>
  );
}
