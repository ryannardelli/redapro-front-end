export function StatCardSkeleton() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 animate-pulse">
      
      <div className="p-3 rounded-xl bg-slate-200 w-12 h-12" />

      <div className="flex flex-col gap-2 w-full">
        <div className="h-3 w-32 rounded bg-slate-200" />
        <div className="h-6 w-16 rounded bg-slate-200" />
      </div>
    </div>
  );
}