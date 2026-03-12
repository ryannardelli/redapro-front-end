import { CheckCircle2, FileText, XCircle, Trophy, Clock, Calendar } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
import { EditUser } from "@components/domain/Users/EditUser";
import { StatisticsStatsStudent } from "@components/domain/Profile/StatisticsStatsStudent";

export function Profile() {
  const { state } = useAuth();
  const user = state.user;

  if (!user) return <SpinnerLoading />;

  const history = [
    { tema: "Crise Climática", corretor: "Prof. Ana Souza", data: "05 Out", nota: 960, icon: <FileText className="text-blue-500" /> },
    { tema: "Tecnologia e Ética", corretor: "Prof. João Lima", data: "04 Out", nota: 720, icon: <CheckCircle2 className="text-emerald-500" /> },
    { tema: "Educação Inclusiva", corretor: "Prof. Ana Souza", data: "03 Out", nota: 0, icon: <XCircle className="text-rose-500" /> },
  ];

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

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h2 className="font-black text-slate-800 flex items-center gap-2">
            <Clock size={20} className="text-purple-600" /> Últimas Atividades
          </h2>
          <button className="text-[11px] font-black text-purple-600 hover:text-purple-800 uppercase tracking-wider">Ver tudo</button>
        </div>

        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead className="text-slate-400">
              <tr>
                <th className="px-4 py-2 text-[10px] font-black uppercase tracking-widest">Tema</th>
                <th className="px-4 py-2 text-[10px] font-black uppercase tracking-widest hidden md:table-cell">Avaliador</th>
                <th className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-center">Data</th>
                <th className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-center">Nota</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row, i) => (
                <tr key={i} className="group cursor-default">
                  <td className="px-4 py-4 bg-slate-50/50 group-hover:bg-slate-50 rounded-l-2xl transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">{row.icon}</div>
                      <span className="text-sm font-bold text-slate-700">{row.tema}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 bg-slate-50/50 group-hover:bg-slate-50 text-sm text-slate-500 font-medium hidden md:table-cell transition-colors">
                    {row.corretor}
                  </td>
                  <td className="px-4 py-4 bg-slate-50/50 group-hover:bg-slate-50 text-sm text-slate-400 text-center font-bold transition-colors">
                    {row.data}
                  </td>
                  <td className="px-4 py-4 bg-slate-50/50 group-hover:bg-slate-50 rounded-r-2xl text-center transition-colors">
                    <span className={`px-4 py-1.5 rounded-xl font-black text-xs shadow-sm ${row.nota >= 900 ? 'bg-emerald-500 text-white' : 'bg-white text-slate-600 border border-slate-100'}`}>
                      {row.nota === 0 ? "—" : row.nota}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}