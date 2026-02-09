import defaultEssay from '../../assets/img/defaultEssay.jpg';
import { useEssay } from '../../hooks/useEssay';
import { Edit3, Eye, Award, Calendar } from 'lucide-react';

export function CardEssays() {
  const { stateEssay } = useEssay();
  const essays = stateEssay.essays || [];

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-gray-900">Suas Redações</h2>
          <p className="mt-2 text-lg text-gray-500">
            Gerencie seu progresso e acompanhe suas avaliações.
          </p>
        </div>
        {essays.length > 0 && (
          <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-sm cursor-pointer">
            <Edit3 size={18} /> Nova Redação
          </button>
        )}
      </header>

      {essays.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="mb-6 text-xl text-gray-500 font-medium">Você ainda não submeteu nenhuma redação.</p>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-xl cursor-pointer">
            Começar minha primeira redação
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {essays.map((essay) => {
            const hasGrade = essay.note !== null && essay.note !== undefined;

            return (
              <div key={essay.id} className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={defaultEssay}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    alt={essay.title}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm ${
                      hasGrade ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {hasGrade ? 'Corrigida' : 'A ser corrigida'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                    {essay.category?.name}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {essay.title}
                  </h3>
                  <p className="mb-6 text-gray-500 text-sm line-clamp-3 leading-relaxed">
                    {essay.content.slice(0, 120)}...
                  </p>

                  <div className="grid grid-cols-2 gap-y-3 mb-6 border-t border-gray-50 pt-4">
                    <div className="flex items-center text-gray-600 text-xs">
                      <Calendar size={14} className="mr-1.5 opacity-70" />
                      {new Date(essay.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Award size={14} className="mr-1.5 opacity-70" />
                      Nota: <span className={`ml-1 font-bold ${hasGrade ? 'text-green-600' : 'text-gray-400'}`}>
                        {hasGrade ? essay.note : '--'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
                      title="Editar redação"
                    >
                      <Edit3 size={16} /> Editar
                    </button>
                    
                    <div className="relative flex-1 group/tooltip">
                      <button
                        disabled={!hasGrade}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-xl transition-all
                          ${hasGrade 
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100 cursor-pointer' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                      >
                        <Eye size={16} /> Ver Nota
                      </button>
                      
                      {!hasGrade && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
                          Nota ainda não disponível
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}