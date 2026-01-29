export default function LoadingSkeleton() {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-niners-cream dark:bg-niners-graphite w-full max-w-4xl animate-pulse rounded-lg shadow-[0px_4px_4px_0px_rgba(213,215,216,0.25)]">
        <div className="flex flex-col md:flex-row">
          {/* Left: Currently Playing Skeleton */}
          <div className="space-y-6 p-8 md:w-1/2">
            {/* Cover art */}
            <div className="bg-niners-black/10 dark:bg-niners-mist/10 aspect-square w-full max-w-70 rounded-2xl" />

            {/* Song title */}
            <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-6 w-48 rounded" />
            <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-4 w-32 rounded" />

            {/* Controls row */}
            <div className="flex items-center justify-between pt-4">
              <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-4 w-6 rounded" />
              <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-8 w-8 rounded-md" />
              <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-12 w-12 rounded-md" />
              <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-8 w-8 rounded-md" />
              <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-8 w-8 rounded-md" />
            </div>

            {/* Volume slider */}
            <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-2 w-full rounded" />
          </div>

          {/* Right: Playlist Skeleton */}
          <div className="border-niners-black/10 dark:border-niners-mist/10 space-y-4 border-t p-8 md:w-1/2 md:border-t-0 md:border-l">
            {/* Playlist title */}
            <div className="bg-niners-black/10 dark:bg-niners-mist/10 mb-4 h-5 w-24 rounded" />

            {/* Playlist items */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-niners-black/5 dark:bg-niners-mist/5 flex items-center justify-between rounded-md px-4 py-3"
              >
                <div className="space-y-2">
                  <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-4 w-40 rounded" />
                  <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-3 w-28 rounded" />
                </div>
                <div className="bg-niners-black/10 dark:bg-niners-mist/10 h-3 w-10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
