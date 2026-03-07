import { Shortcuts } from "@components/ui/Dashboard/ShortCuts";
import { HistoryEssays } from "@components/domain/Essay/HistoryEssays";
import { ActivityTable } from "@components/domain/Essay/ActivityTable";
import { StatsStudent } from "@components/domain/Dashboard/StatsStudent";

export function Home() {
    return(
        <>
            <div>
                <Shortcuts />
                <StatsStudent />
            </div>
            
            <div className="flex flex-col gap-6 p-4">
                <ActivityTable />
                <HistoryEssays />
            </div>

        </>
    );
}