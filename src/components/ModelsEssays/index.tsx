import { Star, Search, ChevronLeft, ChevronRight, Download, Eye } from "lucide-react";

export default function ModelsEssays() {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Models Nota 1000</h1>
          <p className="text-gray-500 mt-1">Inspire-se nos melhores modelos de redação com nota máxima</p>
        </div>
        <button className="mt-4 md:mt-0 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
          Adicionar Novo Modelo
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por tema..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option value="">Todos os tipos</option>
          <option value="dissertativa">Dissertativa</option>
          <option value="argumentativa">Argumentativa</option>
          <option value="narrativa">Narrativa</option>
        </select>
        <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option value="">Ordenar por</option>
          <option value="recentes">Mais Recentes</option>
          <option value="populares">Mais Populares</option>
        </select>
      </div>

      {/* Grid de Redações */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[
          {
            title: "Redação sobre Meio Ambiente",
            resumo: "Como o ser humano pode equilibrar desenvolvimento e preservação ambiental...",
            autor: "Prof. Ana Souza",
            data: "05/10/2025",
            nota: 1000,
          },
          {
            title: "Redação sobre Tecnologia",
            resumo: "O impacto da tecnologia na vida cotidiana e no mercado de trabalho...",
            autor: "Prof. João Lima",
            data: "04/10/2025",
            nota: 1000,
          },
          {
            title: "Redação sobre Educação",
            resumo: "A importância da educação crítica e do pensamento independente...",
            autor: "Prof. Maria Clara",
            data: "03/10/2025",
            nota: 1000,
          },
        ].map((essay, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{essay.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{essay.resumo}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-sm text-gray-900 font-medium">{essay.autor}</p>
                <p className="text-xs text-gray-500">{essay.data}</p>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                <Star size={16} />
                <span className="font-semibold">{essay.nota}</span>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex gap-2">
                {/* Download */}
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 active:bg-green-600 text-white transition"
                >
                  <Download size={18} />
                </button>

                {/* Visualizar */}
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white transition"
                >
                  <Eye size={18} />
                </button>

                {/* Favorito */}
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 active:bg-purple-600 text-white transition"
                >
                  <Star size={18} />
                </button>
              </div>

              <span className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              3 favoritos
            </span>


            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center mt-12 gap-2">
        <button className="flex items-center px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
          <ChevronLeft size={16} className="mr-1" /> Anterior
        </button>
        <button className="flex items-center px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
          Próximo <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </section>
  );
}
