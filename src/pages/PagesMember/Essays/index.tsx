import { CardEssays } from "@components/domain/Essay/CardEssays";
import { FilterHeaderEssay } from "@components/domain/Essay/FilterHeaderEssay";
import { useState } from "react";
import type { EssayFilters } from "types/EssayFilters";

export function Essays() {
  const [filters, setFilters] = useState<EssayFilters>({
    search: "",
    categoryId: "",
    scoreRange: "",
    status: ""
  });

  return (
    <div className="p-0 md:p-4">
      <FilterHeaderEssay
        filters={filters}
        onChange={setFilters}
      />

      <CardEssays filters={filters} />
    </div>
  );
}