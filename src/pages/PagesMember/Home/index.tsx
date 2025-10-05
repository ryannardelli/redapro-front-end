import ActivityTable from "../../../components/ActivityTable";
import HistoryEssays from "../../../components/HistoryEssays";
import { Shortcuts } from "../../../components/Shortcuts";
import { Stats } from "../../../components/Stats";

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