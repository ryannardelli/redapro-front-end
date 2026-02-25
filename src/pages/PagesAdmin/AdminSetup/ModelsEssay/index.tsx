import { NewEssaysReference } from "@components/domain/EssaysReference/NewEssaysReference";
import { EssaysReference } from "@components/ui/Card/EssaysReference";
import { useReferenceEssay } from "@hooks/useReferenceEssay";
import { Search } from "lucide-react";

export default function AdminModelsEssay() {
  const { stateReferenceEssay } = useReferenceEssay();
  console.log(stateReferenceEssay);
  
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {essays.map((essay) => (
          <EssaysReference 
            key={essay.id} 
            essay={essay} 
            onEdit={(id) => console.log("Editando...", id)}
            onDownload={(id) => console.log("Iniciando download...", id)}
            onDelete={(id) => alert("Deseja excluir?")}
          />
        ))}
      </div>
    </section>
  );
}