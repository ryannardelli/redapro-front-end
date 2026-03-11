// import { CheckCircle2, FileText, Settings, XCircle, Trophy, Target, Clock, Calendar } from "lucide-react";
// import { useAuth } from "../../../hooks/useAuth";
// import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";

// export function Profile() {
//   const { state } = useAuth();
//   const user = state.user;

//   if (!user) return <SpinnerLoading />;

//   const stats = [
//     { label: "Redações Enviadas", value: "20", icon: <FileText className="text-purple-600" />, bg: "bg-purple-50" },
//     { label: "Corrigidas", value: "18", icon: <CheckCircle2 className="text-emerald-600" />, bg: "bg-emerald-50" },
//     { label: "Média Geral", value: "720", icon: <Target className="text-blue-600" />, bg: "bg-blue-50" },
//   ];

//   const history = [
//     { tema: "Crise Climática", corretor: "Prof. Ana Souza", data: "05 Out", nota: 960, icon: <FileText className="text-blue-500" /> },
//     { tema: "Tecnologia e Ética", corretor: "Prof. João Lima", data: "04 Out", nota: 720, icon: <CheckCircle2 className="text-emerald-500" /> },
//     { tema: "Educação Inclusiva", corretor: "Prof. Ana Souza", data: "03 Out", nota: 0, icon: <XCircle className="text-rose-500" /> },
//   ];

//   return (
//     <section className="px-4 py-8 md:py-12 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      
//       <div className="relative bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-6">
//         <div className="relative">
//           <img
//             src={user?.pictureUrl || `https://ui-avatars.com/api/?name=${user?.name}&background=6366f1&color=fff`}
//             alt="Avatar"
//             className="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover ring-4 ring-purple-50"
//           />
//           <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white" title="Estudante Ativo"></div>
//         </div>
        
//         <div className="text-center md:text-left flex-1">
//           <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
//             <h1 className="text-2xl md:text-3xl font-black text-slate-900">{user?.name}</h1>
//             <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider self-center">
//               {user.profile.name}
//             </span>
//           </div>
//           <p className="text-slate-500 text-sm mb-4">{user?.email}</p>
          
//           <div className="flex flex-wrap justify-center md:justify-start gap-4">
//             <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
//               <Calendar size={14} className="text-slate-400" /> Desde Out 2025
//             </div>
//             <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
//               <Trophy size={14} className="text-amber-500" /> Nível 4 (Veterano)
//             </div>
//           </div>
//         </div>

//         <button className="md:absolute md:top-6 md:right-6 flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all">
//           <Settings size={18} /> 
//           <span className="md:inline">Configurações</span>
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {stats.map((item, i) => (
//           <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
//             <div className={`p-3 rounded-xl ${item.bg}`}>
//               {item.icon}
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">{item.label}</p>
//               <p className="text-2xl font-black text-slate-900">{item.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
//         <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//           <h2 className="font-bold text-slate-800 flex items-center gap-2">
//             <Clock size={18} className="text-purple-600" /> Últimas Atividades
//           </h2>
//           <button className="text-xs font-bold text-purple-600 hover:underline">Ver tudo</button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead className="bg-slate-50/50">
//               <tr>
//                 <th className="p-4 text-[10px] font-bold uppercase text-slate-400">Tema</th>
//                 <th className="p-4 text-[10px] font-bold uppercase text-slate-400 hidden md:table-cell">Avaliador</th>
//                 <th className="p-4 text-[10px] font-bold uppercase text-slate-400">Data</th>
//                 <th className="p-4 text-[10px] font-bold uppercase text-slate-400 text-center">Nota</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100">
//               {history.map((row, i) => (
//                 <tr key={i} className="hover:bg-slate-50/50 transition-colors">
//                   <td className="p-4">
//                     <div className="flex items-center gap-3">
//                       {row.icon}
//                       <span className="text-sm font-bold text-slate-700">{row.tema}</span>
//                     </div>
//                   </td>
//                   <td className="p-4 text-sm text-slate-600 hidden md:table-cell">{row.corretor}</td>
//                   <td className="p-4 text-sm text-slate-500 font-medium">{row.data}</td>
//                   <td className="p-4 text-center">
//                     <span className={`px-3 py-1 rounded-lg font-black text-xs ${row.nota >= 900 ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
//                       {row.nota === 0 ? "—" : row.nota}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="group bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-4 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1">
//           <div className="text-2xl">🏆</div>
//           <div>
//             <p className="text-xs font-bold text-amber-800 uppercase">Mestre da Escrita</p>
//             <p className="text-[10px] text-amber-600 font-medium">Redação com nota 1000</p>
//           </div>
//         </div>
//         <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-4 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1">
//           <div className="text-2xl">✍️</div>
//           <div>
//             <p className="text-xs font-bold text-blue-800 uppercase">Foco Total</p>
//             <p className="text-[10px] text-blue-600 font-medium">10 redações concluídas</p>
//           </div>
//         </div>
//         <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1">
//           <div className="text-2xl">📈</div>
//           <div>
//             <p className="text-xs font-bold text-emerald-800 uppercase">Acima da Média</p>
//             <p className="text-[10px] text-emerald-600 font-medium">Média superior a 700</p>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }

import { CheckCircle2, FileText, XCircle, Trophy, Target, Clock, Calendar } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
import { EditUser } from "@components/domain/Users/EditUser";

export function Profile() {
  const { state } = useAuth();
  const user = state.user;

  if (!user) return <SpinnerLoading />;

  const stats = [
    { label: "Redações Enviadas", value: "20", icon: <FileText className="text-purple-600" />, bg: "bg-purple-50" },
    { label: "Corrigidas", value: "18", icon: <CheckCircle2 className="text-emerald-600" />, bg: "bg-emerald-50" },
    { label: "Média Geral", value: "720", icon: <Target className="text-blue-600" />, bg: "bg-blue-50" },
  ];

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

        {/* Botão que abre o Modal */}
        {/* <button 
          onClick={() => setIsModalOpen(true)}
          className="md:absolute md:top-8 md:right-8 flex items-center gap-2 px-5 py-2.5 text-xs font-black text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all hover:shadow-md active:scale-95"
        >
          <Settings size={16} /> 
          <span>CONFIGURAÇÕES</span>
        </button> */}
      </div>

      {/* Grid de Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
            <div className={`p-4 rounded-[1.5rem] transition-transform group-hover:scale-110 ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
              <p className="text-3xl font-black text-slate-900 tracking-tight">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabela de Atividades */}
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

      {/* Badges/Conquistas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: "🏆", title: "Mestre da Escrita", desc: "Redação nota 1000", color: "from-amber-50 to-orange-50", border: "border-amber-100", text: "text-amber-800" },
          { icon: "✍️", title: "Foco Total", desc: "10 redações concluídas", color: "from-blue-50 to-indigo-50", border: "border-blue-100", text: "text-blue-800" },
          { icon: "📈", title: "Acima da Média", desc: "Média superior a 700", color: "from-emerald-50 to-teal-50", border: "border-emerald-100", text: "text-emerald-800" }
        ].map((badge, i) => (
          <div key={i} className={`group bg-gradient-to-br ${badge.color} border ${badge.border} p-5 rounded-3xl flex items-center gap-4 transition-all hover:-translate-y-2 hover:shadow-lg`}>
            <div className="text-3xl filter drop-shadow-sm group-hover:scale-125 transition-transform">{badge.icon}</div>
            <div>
              <p className={`text-xs font-black uppercase tracking-tight ${badge.text}`}>{badge.title}</p>
              <p className="text-[10px] text-slate-500 font-bold opacity-80">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}