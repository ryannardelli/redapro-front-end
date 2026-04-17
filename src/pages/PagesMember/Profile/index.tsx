import { Trophy, Clock, Calendar } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
import { EditUser } from "@components/domain/Users/EditUser";
import { StatisticsStatsStudent } from "@components/domain/Profile/StatisticsStatsStudent";
import { SectionHeaderHistory } from "@components/ui/Header/SectionHeaderHistory";
import { ActivitiesStudentTable } from "@components/domain/Dashboard/ActivityStudentTable";
import { ContainerHeaderHistory } from "@components/ui/Header/ContainerHeaderHistory/ContainerHeaderHistory";
import { StatisticsStatsReviewer } from "@components/domain/Profile/StatisticsStatsReviewer";

export function Profile() {
  const { state } = useAuth();
  const user = state.user;

  if (!user) return <SpinnerLoading />;

  return (
    <section className="px-4 py-8 md:py-12 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="relative bg-white border border-slate-200 p-6 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center gap-6">

        <EditUser user={user} />

        <div className="relative group">
          <img
            src={user?.pictureUrl || `https://ui-avatars.com/api/?name=${user?.name}&background=6366f1&color=fff`}
            alt="Avatar"
            className="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover ring-4 ring-purple-50 shadow-md transition-transform group-hover:rotate-3"
          />
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-7 h-7 rounded-full border-4 border-white shadow-sm" title="Estudante Ativo"></div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">{user?.name}</h1>
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider self-center">
              {user.profile.name}
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-4 font-medium">{user?.email}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
              <Calendar size={14} className="text-slate-400" /> Desde Out 2025
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
              <Trophy size={14} className="text-amber-500" /> Nível 4 (Veterano)
            </div>
          </div>
        </div>
      </div>

      {user?.profile.name === "Estudante" && <StatisticsStatsStudent />}
      {user?.profile.name === "Corretor" && <StatisticsStatsReviewer />}

      <ContainerHeaderHistory>
        
        <SectionHeaderHistory
          icon={<Clock className="w-5 h-5 text-blue-600" />}
          title="Histórico de Atividades"
          description="Visualize suas últimas atividades"
        />
    
      <div className="p-0 sm:p-4">
        <ActivitiesStudentTable />
      </div>
    </ContainerHeaderHistory>

    </section>
  );
}