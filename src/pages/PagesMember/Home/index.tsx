import { Shortcuts } from "@components/ui/Dashboard/ShortCuts";
import { HistoryEssays } from "@components/domain/Essay/HistoryEssays";
import { ActivityTable } from "@components/domain/Essay/ActivityTable";
import { StatsStudent } from "@components/domain/Dashboard/StatsStudent";
import { useAuth } from "@hooks/useAuth";
import { FileText, HelpCircle, Plus, User } from "lucide-react";
import { StatsReviewer } from "@components/domain/Dashboard/StatsReviewer";

export function Home() {

    const { state } = useAuth();
    
    const user = state.user;
    const role = user?.profile.name;

    const studentMenu = [
        { href: "/essay-upload", label: "Nova Redação", icon: Plus, primary: true },
        { href: "/my-essays", title: "Minhas Redações", label: "Minhas Redações", icon: FileText },
        { href: "/my-profile", title: "Meu Perfil", label: "Meu Perfil", icon: User },
        { href: "/support", title: "Ajuda e Suporte", label: "Ajuda e Suporte", icon: HelpCircle },
    ];

    return(
        <div className="md:p-4 p-0">
            <div>
                {role === "Estudante" && <Shortcuts items={studentMenu} />}
                {role === "Estudante" && <StatsStudent />}
                {role === "Corretor" && <StatsReviewer />}
            </div>
            
            <div className="flex flex-col gap-6 p-4">
                {role === "Estudante" && <ActivityTable />}
                {role === "Corretor" && <HistoryEssays />}
            </div>

        </div>
    );
}