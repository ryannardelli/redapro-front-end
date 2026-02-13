import { Shortcuts } from "@components/ui/Dashboard/ShortCuts";
import { HistoryEssays } from "@components/domain/Essay/HistoryEssays";
import { ActivityTable } from "@components/domain/Essay/ActivityTable";
import { StatsHome } from "@components/domain/Dashboard/StatsHome";

export function Home() {
    return(
        <>
            <div>
                <Shortcuts />
                <StatsHome />
            </div>
            
            <div className="flex flex-col gap-6 p-4">
                <ActivityTable />
                <HistoryEssays />
            </div>

        </>
    );
}