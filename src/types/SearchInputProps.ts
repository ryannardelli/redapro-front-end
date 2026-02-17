import type { ReactNode } from "react";

export interface SearchResult {
  id: string;
  label: string;
  onSelect: () => void;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  results?: SearchResult[];
  minLength?: number;
  icon?: ReactNode;
  className?: string;
  hiddenOnMobile?: boolean;
}
