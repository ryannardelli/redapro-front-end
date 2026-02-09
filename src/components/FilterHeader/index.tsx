export default function FilterHeader() {
  return (
    <div className="p-4 rounded-lg shadow mb-4 flex flex-col md:flex-row gap-4 items-center">
      {/* Campo de pesquisa */}
      <input
        type="text"
        placeholder="Buscar redação"
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Select de tema */}
      <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Todos os temas</option>
        <option value="meio-ambiente">Meio Ambiente</option>
        <option value="tecnologia">Tecnologia</option>
        <option value="educacao">Educação</option>
        <option value="atualidades">Atualidades</option>
      </select>

      {/* Select de pontuação */}
      <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Todas as pontuações</option>
        <option value="0-400">0 - 400</option>
        <option value="401-600">401 - 600</option>
        <option value="601-800">601 - 800</option>
        <option value="801-1000">801 - 1000</option>
      </select>

      {/* Select de status */}
      <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Todos os status</option>
        <option value="pendente">Pendente</option>
        <option value="corrigida">Corrigida</option>
        <option value="rejeitada">Rejeitada</option>
      </select>

      {/* Botão limpar filtros */}
      <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition">
        Limpar filtros
      </button>
    </div>
  );
}
