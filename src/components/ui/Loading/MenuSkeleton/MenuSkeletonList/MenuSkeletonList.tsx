import { MenuItemSkeleton } from "../MenuItemSkeleton";

export function MenuSkeletonList({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-1">
      {Array.from({ length: items }).map((_, index) => (
        <MenuItemSkeleton key={index} />
      ))}
    </div>
  );
}