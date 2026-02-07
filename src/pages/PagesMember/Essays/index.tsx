import { CardEssays } from "../../../components/CardEssays";
import FilterHeader from "../../../components/FilterHeader";

export function Essays() {
    return(
        <div className=" p-0 md:p-4">
            <FilterHeader />
            <CardEssays />
        </div>
    );
}