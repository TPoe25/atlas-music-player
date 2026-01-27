export default function PlayListItem({ selected = false }) {
  return (
    <div className={selected ? "w-full rounded-md bg-niners-gold/20 px-4 py-2" : "w-full px-4 py-2"}>
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-niners-black">
            Painted in Blue
          </p>
          <p className="truncate text-sm font-medium text-niners-black/60">
            Soul Canvas
          </p>
        </div>
        <span className="shrink-0 text-sm font-medium text-niners-black/50">5:55</span>
      </div>
    </div>
  );
}
