import { type Song } from "../types/music";

export default function SongTitle({ title, artist }: Song) {
    return (
        <div className="text-center">
            <h2 className="text-lg font-semibold text-niners-red">
                {title}
            </h2>
            <p className="text-sm text-niners-black/60">
                {artist}
            </p>
        </div>
    );
}
