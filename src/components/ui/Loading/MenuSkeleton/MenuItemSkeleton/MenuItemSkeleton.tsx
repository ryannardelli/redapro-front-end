export function MenuItemSkeleton() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl animate-pulse">
      <div className="w-5 h-5 rounded bg-slate-200" />
      <div className="h-4 w-32 rounded bg-slate-200" />
    </div>
  );
}