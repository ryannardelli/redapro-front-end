import { Pencil, Trash2, Search, LayoutGrid, Tag, AlertCircle } from 'lucide-react';
import { useCategory } from '@hooks/useCategory';
import { NewCategory } from '@components/domain/Categories/NewCategory';
import { ListLoading } from '@components/ui/Loading/ListLoading';

export function Categories() {
  const { stateCategory } = useCategory();
  const { categories, loading, error } = stateCategory;

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Categorias de Conteúdo</h1>
            <p className="text-slate-500 text-sm">Gerencie os temas e eixos temáticos disponíveis na plataforma.</p>
          </div>

          <NewCategory />
        </div>

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatCard 
              icon={<LayoutGrid size={20} className="text-indigo-600" />} 
              label="Total de Categorias" 
              value={categories?.length || 0} 
            />
            <StatCard 
              icon={<Tag size={20} className="text-emerald-600" />} 
              label="Categorias Ativas" 
              value={categories?.length || 0} 
            />
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center gap-3">
            <Search className="text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Pesquisar por nome ou descrição..." 
              className="w-full outline-none text-sm text-slate-600 placeholder:text-slate-400"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">Identificação</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">Descrição da categoria</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                
                {loading && (
                   <tr>
                    <td colSpan={3}>
                      <div className="flex items-center justify-center py-20">
                        <ListLoading text="Carregando categorias..." />
                      </div>
                    </td>
                  </tr>
                )}

                {error && (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center text-red-500 gap-2">
                        <AlertCircle size={32} />
                        <p className="font-medium">Erro ao carregar categorias.</p>
                      </div>
                    </td>
                  </tr>
                )}

                {!loading && !error && categories?.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs border border-indigo-100">
                          #{cat.id}
                        </div>
                        <span className="font-semibold text-slate-700">{cat.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                        {cat.description || "Sem descrição disponível para esta categoria."}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        <button title="Editar" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all border border-transparent hover:border-indigo-100">
                          <Pencil size={18} />
                        </button>
                        <button title="Excluir" className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all border border-transparent hover:border-red-100">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {!loading && categories?.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-slate-400 italic">
                      Nenhuma categoria cadastrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes Auxiliares
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-indigo-200 transition-colors">
      <div className="p-3 bg-indigo-50/50 rounded-xl">{icon}</div>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">{label}</p>
        <p className="text-xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}