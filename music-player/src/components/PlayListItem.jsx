export default function PlayListItem({ selected = false }) {
  return (
    <div
      className={[
        "w-full rounded-md px-4 py-2",
        selected ? "bg-slate-100" : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-black">
            Painted in Blue
          </p>
          <p className="truncate text-sm font-medium text-slate-500">
            Soul Canvas
          </p>
        </div>

        <span className="shrink-0 text-sm font-medium text-slate-400">
          5:55
        </span>
      </div>
    </div>
  );
}
