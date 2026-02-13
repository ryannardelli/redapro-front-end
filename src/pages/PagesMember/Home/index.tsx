import { Shortcuts } from "@components/ui/Dashboard/ShortCuts";
import ActivityTable from "../../../components/ActivityTable";
import { Stats } from "../../../components/Stats";
import { HistoryEssays } from "@components/domain/Essay/HistoryEssays";

export function Home() {
    return(
        <>
            <div>
                <Shortcuts />
                <Stats />
            </div>
            
            <div className="flex flex-col gap-6 p-4">
                <ActivityTable />
                <HistoryEssays />
            </div>

        </>
    );
}