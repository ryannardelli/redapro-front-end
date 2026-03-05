export function EssayCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      
      <div className="relative h-48 bg-slate-200">
        <div className="absolute top-4 left-4 h-5 w-20 rounded-full bg-slate-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-300" />
          <div className="h-8 w-8 rounded-lg bg-slate-300" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="h-3 w-24 rounded bg-slate-200 mb-3" />

        <div className="h-5 w-3/4 rounded bg-slate-200 mb-4" />

        <div className="space-y-2 mb-6">
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-3 w-5/6 rounded bg-slate-200" />
          <div className="h-3 w-4/6 rounded bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 gap-y-3 mb-6 border-t border-gray-50 pt-4">
          <div className="h-3 w-24 rounded bg-slate-200" />
          <div className="h-3 w-16 rounded bg-slate-200" />
        </div>

        <div className="mt-auto space-y-3">
          <div className="h-10 w-full rounded-xl bg-slate-200" />
          <div className="h-10 w-full rounded-xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}