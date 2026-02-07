import { useState } from "react";
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Edit, Trash, ChevronRight, ChevronLeft, Clock } from "lucide-react";

export default function SchedulePage() {
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [filterTheme, setFilterTheme] = useState("Todos");

  const agendamentos = [
    {
      id: 1,
      aluno: "Ryan Nardelli",
      corretor: "Prof. Ana Souza",
      data: "2025-10-05",
      hora: "12:30",
      tema: "Meio Ambiente",
      status: "Confirmado",
    },
    {
      id: 2,
      aluno: "Maria Clara",
      corretor: "Prof. João Lima",
      data: "2025-10-04",
      hora: "09:15",
      tema: "Tecnologia",
      status: "Pendente",
    },
    {
      id: 3,
      aluno: "João Lima",
      corretor: "Prof. Ana Souza",
      data: "2025-10-03",
      hora: "16:45",
      tema: "Saúde",
      status: "Cancelado",
    },
  ];

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <CalendarIcon size={24} /> Agendamentos
        </h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          + Novo Agendamento
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Pesquisar por aluno ou corretor"
          className="px-3 py-2 border rounded w-full md:w-1/3 outline-none"
        />
        <select
          value={filterTheme}
          onChange={(e) => setFilterTheme(e.target.value)}
          className="px-3 py-2 border rounded w-full md:w-1/4 outline-none"
        >
          <option>Todos os temas</option>
          <option>Meio Ambiente</option>
          <option>Tecnologia</option>
          <option>Saúde</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border rounded w-full md:w-1/4 outline-none"
        >
          <option>Todos os status</option>
          <option>Confirmado</option>
          <option>Pendente</option>
          <option>Cancelado</option>
        </select>
      </div>

      {/* Tabela de Agendamentos */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Aluno</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Corretor</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Data</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Hora</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Tema</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-900">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {agendamentos.map((ag) => (
              <tr key={ag.id} className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-900 font-medium">{ag.aluno}</td>
                <td className="p-4 text-sm text-gray-900 font-medium">{ag.corretor}</td>
                <td className="p-4 text-sm text-gray-900 font-medium">{ag.data}</td>
                <td className="p-4 text-sm text-gray-900 font-medium">{ag.hora}</td>
                
                <td className="p-4 text-sm text-gray-900 font-medium">{ag.tema}</td>

                <td className="p-4 text-sm font-medium flex items-center gap-1">
                  {ag.status === "Confirmado" && <CheckCircle2 size={16} className="text-green-500" />}
                  {ag.status === "Pendente" && <Clock size={16} className="text-orange-500" />}
                  {ag.status === "Cancelado" && <XCircle size={16} className="text-red-500" />}
                  {ag.status}
                </td>

                <td>
                  <div className="flex gap-1">
                     <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash size={16} />
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginação */}
        <div className="md:flex m-4">
          <p className="text-sm text-gray-600 flex-1">Mostrando 1 a {agendamentos.length} de {agendamentos.length} agendamentos</p>
          <div className="flex items-center max-md:mt-4 gap-2">
            <button className="px-3 py-2 border rounded flex items-center gap-1 text-gray-600 hover:bg-gray-50">
              <ChevronLeft size={14} /> Anterior
            </button>
            <button className="px-3 py-2 border rounded flex items-center gap-1 text-gray-600 hover:bg-gray-50">
              Próximo <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
