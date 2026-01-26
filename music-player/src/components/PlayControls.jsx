import {
    Shuffle,
    SkipBack,
    Play,
    SkipForward,
    Gauge
} from 'lucide-react';

export default function PlayControls() {
    return (
        <div className="flex items-center justify-between gap-4">
            <button className="text-zinc-400 hover:text-white">
                <Gauge size={18} />
            </button>

            <button className="text-zinc-400 hover:text-white">
                <SkipBack size={22} />
            </button>

            <button className="rounded-full bg-white p-3 text-black">
                <Play size={24} />
            </button>

            <button className="text-zinc-400 hover:text-white">
                <SkipForward size={22} />
            </button>

            <button className="text-zinc-400 hover:text-white">
                <Shuffle size={18} />
            </button>
        </div>
    );
}
