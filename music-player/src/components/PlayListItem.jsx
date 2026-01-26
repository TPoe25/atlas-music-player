export default function PlayListItem() {
    return (
        <div className="flex items-center justify-between rounded-lg bg-zinc-800 px-4 py-3">
            <div>
                <p className="text-sm font-medium text-white">
                    Song Title
                </p>
                <p className="text-xs text-zinc-400">
                    Artist - Album
                </p>
            </div>
            <span className="text-xs text-zinc-400">
                0:00
            </span>
        </div>
    );
}
