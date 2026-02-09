import { Star, Search, ChevronLeft, ChevronRight, Download, Eye } from "lucide-react";

export default function ModelsEssays() {
  const essays = [
    {
      title: "Desenvolvimento e preservação ambiental",
      resumo: "Uma análise sobre o equilíbrio necessário entre o progresso econômico e a manutenção dos ecossistemas brasileiros no século XXI.",
      autor: "Prof. Ana Souza",
      data: "05 Out 2025",
      nota: 1000,
      tags: ["Ambiental", "Dissertativa"]
    },
    {
      title: "O impacto da tecnologia no trabalho",
      resumo: "Como a automação e a inteligência artificial estão redefinindo as relações laborais e a necessidade de novas competências.",
      autor: "Prof. João Lima",
      data: "04 Out 2025",
      nota: 1000,
      tags: ["Tecnologia", "Argumentativa"]
    },
    {
      title: "Educação crítica e pensamento livre",
      resumo: "A importância de um sistema educacional que fomente a autonomia intelectual e a cidadania ativa no ambiente escolar.",
      autor: "Prof. Maria Clara",
      data: "03 Out 2025",
      nota: 1000,
      tags: ["Educação", "Dissertativa"]
    },
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Modelos <span className="text-purple-600">Nota 1000</span>
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
          Explore nossa biblioteca curada de redações nota máxima e domine as técnicas de escrita.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <div className="relative flex-[2]">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Qual tema você quer estudar hoje?"
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-purple-500 transition-all outline-none"
          />
        </div>
        <div className="flex flex-1 gap-2">
          <select className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-600 focus:ring-2 focus:ring-purple-500 outline-none">
            <option>Todos os tipos</option>
            <option>Dissertativa</option>
            <option>Argumentativa</option>
          </select>
          <select className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-600 focus:ring-2 focus:ring-purple-500 outline-none">
            <option>Recentes</option>
            <option>Populares</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {essays.map((essay, idx) => (
          <div key={idx} className="group bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col overflow-hidden">
            
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  {essay.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-purple-50 text-purple-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1 rounded-full border border-amber-100">
                  <Star size={14} className="fill-amber-500 text-amber-500" />
                  <span className="text-sm font-bold">{essay.nota}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-3">
                {essay.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                {essay.resumo}
              </p>
            </div>

            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">
                    {essay.autor.charAt(6)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{essay.autor}</p>
                    <p className="text-[11px] text-slate-400 uppercase font-medium">{essay.data}</p>
                  </div>
                </div>
                <button title="Favoritar" className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer">
                  <Star size={20} />
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Eye size={16} /> Ler Redação
                </button>
                <button className="px-3 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 gap-6">
        <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Anterior
        </button>
        <div className="flex gap-2">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${n === 1 ? 'bg-purple-600 text-white cursor-pointer' : 'text-slate-400 hover:bg-slate-200'}`}>
              {n}
            </button>
          ))}
        </div>
        <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer">
          Próximo <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}