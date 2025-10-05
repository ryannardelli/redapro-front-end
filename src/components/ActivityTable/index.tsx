import { FileText, CheckCircle2, Clock, XCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function ActivityTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Atividade
            </th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Usuário
            </th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Data
            </th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Status
            </th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Progresso
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              Redação enviada
            </td>
            <td className="p-4 text-sm text-slate-900">
              Ryan Nardelli
              <p className="text-xs text-slate-500">Aluno</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              05/10/2025
              <p className="text-xs text-slate-500">12:30</p>
            </td>
            <td className="p-4 text-sm">
              <Clock size={16} className="inline text-orange-500 mr-1" />
              Pendente
            </td>
            <td className="p-4">
              <div className="bg-gray-200 rounded-full w-full h-2">
                <div className="w-1/4 h-full rounded-full bg-orange-500"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">25%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              Correção concluída
            </td>
            <td className="p-4 text-sm text-slate-900">
              Prof. Ana Souza
              <p className="text-xs text-slate-500">Corretora</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              05/10/2025
              <p className="text-xs text-slate-500">09:45</p>
            </td>
            <td className="p-4 text-sm">
              <CheckCircle2 size={16} className="inline text-green-500 mr-1" />
              Concluído
            </td>
            <td className="p-4">
              <div className="bg-gray-200 rounded-full w-full h-2">
                <div className="w-full h-full rounded-full bg-green-500"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">100%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
              <XCircle size={18} className="text-red-600" />
              Redação recusada
            </td>
            <td className="p-4 text-sm text-slate-900">
              João Lima
              <p className="text-xs text-slate-500">Aluno</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              04/10/2025
              <p className="text-xs text-slate-500">18:22</p>
            </td>
            <td className="p-4 text-sm">
              <XCircle size={16} className="inline text-red-500 mr-1" />
              Rejeitado
            </td>
            <td className="p-4">
              <div className="bg-gray-200 rounded-full w-full h-2">
                <div className="w-0 h-full rounded-full bg-red-500"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">0%</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="md:flex m-4">
        <p className="text-sm text-slate-600 flex-1">
          Mostrando 1 a 3 de 20 atividades
        </p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-slate-600 mr-2">Exibir</p>
          <select className="text-sm border border-gray-300 rounded px-2 py-1 outline-none mr-4">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <ul className="flex border divide-x border-gray-300 rounded overflow-hidden">
            <li className="px-3 py-2 flex items-center cursor-pointer text-sm text-slate-600 hover:bg-gray-50">
              <ChevronLeft size={14} className="mr-1" /> Anterior
            </li>
            <li className="px-3 py-2 flex items-center cursor-pointer text-sm text-slate-600 hover:bg-gray-50">
              Próximo <ChevronRight size={14} className="ml-1" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
