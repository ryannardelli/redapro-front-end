import type { MenuBurgerProps } from "types/MenuBurgerProps";

export function MenuBurgerSidebar({
  icon,
  label,
  hideOn,
  className = "",
  ...props
}: MenuBurgerProps) {
  return (
    <button
      aria-label={label}
      className={`
        p-2 rounded-lg transition-colors
        hover:bg-gray-100
        ${hideOn === "mobile" ? "hidden md:inline-flex" : ""}
        ${hideOn === "desktop" ? "md:hidden" : ""}
        ${className}
      `}
      {...props}
    >
      {icon}
    </button>
  );
}
