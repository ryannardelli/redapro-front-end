export function EssaysReferenceSkeleton() {
  return (
    <div className="bg-white rounded-[24px] border border-slate-100 p-6 animate-pulse flex flex-col gap-6">
      
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="h-3 w-20 rounded bg-slate-200" />
        </div>
        <div className="h-6 w-24 rounded-full bg-slate-200" />
      </div>

      <div className="space-y-3">
        <div className="h-4 w-3/4 rounded bg-slate-200" />
        <div className="h-4 w-2/3 rounded bg-slate-200" />
      </div>

      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-slate-200" />
        <div className="h-3 w-5/6 rounded bg-slate-200" />
        <div className="h-3 w-4/6 rounded bg-slate-200" />
      </div>

      <div className="flex justify-between items-center mt-auto">
        <div className="h-3 w-24 rounded bg-slate-200" />
        <div className="h-8 w-28 rounded-xl bg-slate-200" />
      </div>
    </div>
  );
}