import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface MenuBurgerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label?: string;
  hideOn?: "mobile" | "desktop";
}