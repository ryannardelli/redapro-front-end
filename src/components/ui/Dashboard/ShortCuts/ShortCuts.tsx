import { RouterLinks } from "@components/ui/Links/RouterLinks";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface ShortcutItem {
  href?: string;
  title?: string;
  label: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  primary?: boolean;
}

interface ShortcutsProps {
  items: ShortcutItem[];
}

export function Shortcuts({ items }: ShortcutsProps) {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 z-10 md:relative md:bottom-0 md:flex md:justify-end md:p-6">
      <div className="flex items-center justify-around md:justify-end gap-1 md:gap-3 p-2 bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xl md:shadow-xl rounded-2xl md:rounded-2xl max-w-fit mx-auto md:mx-0">

        {items.map((item, index) => {
          const Icon = item.icon;

          if (item.primary) {
            return (
              <RouterLinks
                key={index}
                href={item.href || "#"}
                className="flex items-center gap-2 px-4 md:px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95 group order-2 md:order-1 cursor-pointer"
              >
                <Icon className="w-5 h-5 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden sm:inline text-sm font-bold tracking-tight">
                  {item.label}
                </span>
              </RouterLinks>
            );
          }

          return (
            <RouterLinks
              key={index}
              href={item.href || "#"}
              title={item.title}
              className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] md:text-sm font-semibold md:inline">
                {item.label}
              </span>
            </RouterLinks>
          );
        })}

      </div>
    </div>
  );
}