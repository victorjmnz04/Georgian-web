export default function Loading() {
  return (
    <div className="page-shell py-32">
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
          <div className="h-16 max-w-3xl animate-pulse rounded-[2rem] bg-white/10" />
          <div className="h-6 max-w-2xl animate-pulse rounded-full bg-white/8" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="aspect-[4/5] animate-pulse rounded-[2rem] border border-white/8 bg-white/[0.03]"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
