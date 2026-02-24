import { NewEssaysReference } from "@components/domain/EssaysReference/NewEssaysReference";
import { Star, Search, ChevronLeft, ChevronRight, Eye, Edit3, Trash2, CheckCircle2, Circle } from "lucide-react";

export default function AdminModelsEssay() {
  const essays = [
    {
      id: 1,
      title: "Impactos da Inteligência Artificial",
      resumo: "Análise sobre a automação e a ética no uso de algoritmos na sociedade moderna...",
      autor: "Prof. Ana Souza",
      data: "05/10/2025",
      nota: 1000,
      status: "Publicado",
      visualizacoes: 1240,
    },
    {
      id: 2,
      title: "Crise Hídrica no Brasil",
      resumo: "O desafio da gestão de recursos hídricos e o papel do agronegócio...",
      autor: "Prof. João Lima",
      data: "04/10/2025",
      nota: 1000,
      status: "Rascunho",
      visualizacoes: 0,
    },
    {
      id: 3,
      title: "Democratização do Cinema",
      resumo: "Reflexões sobre o acesso à cultura e as barreiras socioeconômicas no país...",
      autor: "Prof. Maria Clara",
      data: "03/10/2025",
      nota: 1000,
      status: "Publicado",
      visualizacoes: 856,
    },
  ];

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header Administrativo */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Gerenciar Modelos Nota 1000</h1>
          <p className="text-gray-500 mt-1">Controle, edite e publique modelos de redação de alta performance.</p>
        </div>
        <NewEssaysReference />
      </div>

      {/* Barra de Ferramentas / Filtros */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por tema ou autor..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
        <select className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600">
          <option value="">Todos os Status</option>
          <option value="publicado">Publicados</option>
          <option value="rascunho">Rascunhos</option>
        </select>
        <div className="text-sm text-gray-500 font-medium px-2">
          Total: <span className="text-indigo-600">{essays.length} modelos</span>
        </div>
      </div>

      {/* Grid de Modelos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {essays.map((essay) => (
          <div key={essay.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:border-indigo-300 transition-all">
            {/* Tag de Status */}
            <div className="px-6 pt-4 flex justify-between items-start">
              <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                essay.status === "Publicado" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              }`}>
                {essay.status === "Publicado" ? <CheckCircle2 size={12} /> : <Circle size={12} />}
                {essay.status}
              </span>
              <div className="flex items-center gap-1 text-indigo-600 font-bold">
                <Star size={16} className="fill-indigo-600" />
                <span>{essay.nota}</span>
              </div>
            </div>

            <div className="px-6 py-4 flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                {essay.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-3 mb-4">{essay.resumo}</p>
              
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                  {essay.autor.charAt(0)}
                </div>
                <div>
                  <p className="text-xs text-gray-900 font-semibold">{essay.autor}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">{essay.data}</p>
                </div>
              </div>
            </div>

            {/* Ações Administrativas */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-xs text-gray-500" title="Visualizações">
                  <Eye size={14} /> {essay.visualizacoes}
                </span>
              </div>
              
              <div className="flex gap-2">
                <button title="Editar Modelo" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit3 size={18} />
                </button>
                <button title="Ver como Aluno" className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <Eye size={18} />
                </button>
                <button title="Excluir" className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-between items-center mt-12">
        <p className="text-sm text-gray-500 italic">Exibindo 3 de 48 modelos cadastrados</p>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-sm">
            <ChevronLeft size={16} className="mr-1" /> Anterior
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-sm">
            Próximo <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}