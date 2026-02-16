import { useState } from 'react';
import { Plus, Pencil, Trash2, Search, FileText, LayoutGrid, CheckCircle } from 'lucide-react';

export function Categories() {
  const [categories] = useState([
    { 
      id: 1, 
      name: 'Dissertativo-Argumentativo', 
      description: 'Focado em temas do ENEM e vestibulares tradicionais com proposta de intervenção.',
      count: 124, 
      status: 'Ativo' 
    },
    { 
      id: 2, 
      name: 'Crônica Narrativa', 
      description: 'Textos leves que relatam o cotidiano com um toque de ironia ou reflexão.',
      count: 85, 
      status: 'Ativo' 
    },
    { 
      id: 3, 
      name: 'Análise de Dados', 
      description: 'Interpretação de gráficos e tabelas para produção de relatórios técnicos.',
      count: 0, 
      status: 'Inativo' 
    },
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Profissional */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Categorias</h1>
            <p className="text-slate-500 mt-1">Organize os tipos de produções textuais disponíveis.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-200 font-semibold text-sm">
            <Plus size={18} />
            Nova Categoria
          </button>
        </div>

        {/* Cards de Insight Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<LayoutGrid className="text-indigo-600" />} label="Total" value={categories.length} />
          <StatCard icon={<FileText className="text-emerald-600" />} label="Redações Vinculadas" value="209" />
          <StatCard icon={<CheckCircle className="text-amber-600" />} label="Ativas Agora" value="2" />
        </div>

        {/* Container da Tabela */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-white flex items-center gap-3">
            <Search className="text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Pesquisar por nome ou descrição..." 
              className="w-full outline-none text-sm text-slate-600"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500">Informações da Categoria</th>
                  <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500">Popularidade</th>
                  <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500">Status</th>
                  <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 text-right">Gerenciar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="p-4 max-w-xs md:max-w-md">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-base">{cat.name}</span>
                        <span className="text-sm text-slate-500 truncate" title={cat.description}>
                          {cat.description}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-indigo-500 h-full" 
                            style={{ width: `${Math.min(cat.count, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-slate-600">{cat.count}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={cat.status} />
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                          <Pencil size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-componentes para limpeza de código
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const isAtivo = status === 'Ativo';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
      isAtivo ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isAtivo ? 'bg-emerald-500' : 'bg-slate-400'}`} />
      {status}
    </span>
  );
}