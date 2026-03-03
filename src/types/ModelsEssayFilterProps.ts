export interface ModelsEssayFilterProps {
  search: string;
  year: string;
  years: string[];
  total: number;
  onSearchChange: (value: string) => void;
  onYearChange: (value: string) => void;
}