import { useState } from "react";
import { 
  Calendar as CalendarIcon, CheckCircle2, XCircle, Edit, Trash2, 
  ChevronRight, ChevronLeft, Clock, Search, Plus, BookOpen 
} from "lucide-react";

export default function SchedulePage() {
  const [filterStatus, setFilterStatus] = useState("Todos");

  const agendamentos = [
    {
      id: 1,
      corretor: "Prof. Ana Souza",
      especialidade: "Especialista em Redação ENEM",
      data: "05 Out, 2025",
      hora: "12:30",
      tema: "Meio Ambiente e Sustentabilidade",
      status: "Confirmado",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      statusIcon: <CheckCircle2 size={14} />
    },
    {
      id: 2,
      corretor: "Prof. João Lima",
      especialidade: "Gramática e Coesão",
      data: "04 Out, 2025",
      hora: "09:15",
      tema: "Impactos da IA na Educação",
      status: "Pendente",
      statusColor: "bg-amber-50 text-amber-700 border-amber-100",
      statusIcon: <Clock size={14} />
    },
    {
      id: 3,
      corretor: "Prof. Ana Souza",
      especialidade: "Especialista em Redação ENEM",
      data: "03 Out, 2025",
      hora: "16:45",
      tema: "Mobilidade Urbana nas Metrópoles",
      status: "Cancelado",
      statusColor: "bg-rose-50 text-rose-700 border-rose-100",
      statusIcon: <XCircle size={14} />
    },
  ];

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto space-y-8 min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-600 font-bold text-sm uppercase tracking-wider">
            <CalendarIcon size={16} />
            Sua Agenda
          </div>
          <h1 className="text-3xl font-black text-slate-900">Mentorias Agendadas</h1>
          <p className="text-slate-500 text-sm">Gerencie seus encontros com os corretores e tire suas dúvidas.</p>
        </div>
        
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold shadow-lg shadow-purple-200 transition-all active:scale-95">
          <Plus size={20} />
          Novo Agendamento
        </button>
      </div>

      {/* --- FILTROS --- */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Pesquisar por corretor ou tema..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm"
          />
        </div>
        
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-sm">
            <option>Todos os temas</option>
            <option>Meio Ambiente</option>
            <option>Tecnologia</option>
          </select>
          <select className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-sm">
            <option>Todos os status</option>
            <option>Confirmado</option>
            <option>Pendente</option>
          </select>
        </div>
      </div>

      {/* --- LISTAGEM DE AGENDAMENTOS --- */}
      <div className="grid grid-cols-1 gap-4">
        {agendamentos.map((ag) => (
          <div key={ag.id} className="group relative bg-white border border-slate-200 p-5 md:p-6 rounded-3xl hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Info Mentor e Data */}
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">DIA</span>
                  <span className="text-lg font-black text-slate-800">{ag.data.split(' ')[0]}</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black border uppercase tracking-wider ${ag.statusColor}`}>
                      {ag.statusIcon} {ag.status}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="flex items-center gap-1 text-slate-500 font-bold text-xs uppercase tracking-tight">
                      <Clock size={12} /> {ag.hora}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{ag.corretor}</h3>
                  <p className="text-xs text-slate-500 font-medium">{ag.especialidade}</p>
                </div>
              </div>

              {/* Tema da Mentoria */}
              <div className="flex-1 md:px-8 border-l border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Assunto da Sessão</p>
                <div className="flex items-center gap-2 text-slate-700 font-semibold italic">
                  <BookOpen size={16} className="text-purple-400" />
                  "{ag.tema}"
                </div>
              </div>

              {/* Ações */}
              <div className="flex items-center gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-slate-50">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-bold text-sm transition-all border border-transparent hover:border-purple-100">
                  <Edit size={16} />
                  Remarcar
                </button>
                <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100" title="Cancelar Agendamento">
                  <Trash2 size={18} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* --- PAGINAÇÃO --- */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-500">
        <p className="text-xs font-bold uppercase tracking-tight">
          Mostrando <span className="text-slate-900">3 agendamentos</span> ativos
        </p>
        <div className="flex items-center gap-1">
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-50 transition-all shadow-sm">
            <ChevronLeft size={18} />
          </button>
          <div className="flex px-4 gap-4">
            <span className="text-sm font-black text-purple-600">1</span>
            <span className="text-sm font-bold text-slate-300">2</span>
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

    </section>
  );
}