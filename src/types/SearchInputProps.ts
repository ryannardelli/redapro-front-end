import type { ReactNode } from "react";

export interface SearchResult {
  id: string;
  label: string;
  onSelect: () => void;
}

export interface SearchResultItem {
  id: number | string;
  label: string;
  route: string;
  icon?: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  results?: SearchResultItem[];
  minLength?: number;
  icon?: ReactNode;
  className?: string;
  hiddenOnMobile?: boolean;
}
