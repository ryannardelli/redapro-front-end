import { CardEssays } from "@components/domain/Essay/CardEssays";
import { FilterHeaderEssay } from "@components/domain/Essay/FilterHeaderEssay";

export function Essays() {
    return(
        <div className=" p-0 md:p-4">
            <FilterHeaderEssay />
            <CardEssays />
        </div>
    );
}