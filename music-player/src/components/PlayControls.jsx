import {
    Shuffle,
    SkipBack,
    Play,
    SkipForward,
    Gauge
} from 'lucide-react';

export default function PlayControls() {
    return (
        <div className="flex items-center justify-between w-96">
            <button className="text-niners-black/70 hover:text-niners-red transition-colors">
                <span className="text-lg font-medium">1x</span>
            </button>

            <button className="text-niners-black/70 hover:text-niners-red transition-colors">
                <SkipBack size={22} />
            </button>

            <button className="rounded-md border-2 border-niners-black bg-niners-cream p-3 hover:bg-niners-gold/20 transition-colors">
                <Play size={24} className="text-niners-black" />
            </button>

            <button className="text-niners-black/70 hover:text-niners-red transition-colors">
                <SkipForward size={22} />
            </button>

            <button className="text-niners-black/70 hover:text-niners-red transition-colors">
                <Shuffle size={18} />
            </button>
        </div>
    );
}
