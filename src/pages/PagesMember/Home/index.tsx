import { Shortcuts } from "@components/ui/Dashboard/ShortCuts";
import { HistoryEssays } from "@components/domain/Essay/HistoryEssays";
import { ActivityTable } from "@components/domain/Essay/ActivityTable";
import { StatsStudent } from "@components/domain/Dashboard/StatsStudent";
import { useAuth } from "@hooks/useAuth";
import { FileText, HelpCircle, Plus, User } from "lucide-react";

export function Home() {

    const { state } = useAuth();
    
    const user = state.user;

    const studentMenu = [
        { href: "/essay-upload", label: "Nova Redação", icon: Plus, primary: true },
        { href: "/my-essays", title: "Minhas Redações", label: "Minhas Redações", icon: FileText },
        { href: "/my-profile", title: "Meu Perfil", label: "Meu Perfil", icon: User },
        { href: "/support", title: "Ajuda e Suporte", label: "Ajuda e Suporte", icon: HelpCircle },
    ];

    return(
        <div className="md:p-4 p-0">
            <div>
                {user?.profile.name === "Estudante" && <Shortcuts items={studentMenu} />}
                <StatsStudent />
            </div>
            
            <div className="flex flex-col gap-6 p-4">
                {user?.profile.name === "Estudante" && <ActivityTable />}
                {user?.profile.name === "Corretor" && <HistoryEssays />}
            </div>

        </div>
    );
}