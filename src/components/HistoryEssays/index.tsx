import { FileText, ChevronLeft, ChevronRight } from "lucide-react";

export default function HistoryEssays() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-0 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">Redação</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">Aluno</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">Corretor</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">Data</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">Nota</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              Redação sobre Meio Ambiente
            </td>
            <td className="p-4 text-sm text-slate-900">
              Ryan Nardelli
              <p className="text-xs text-slate-500">Aluno</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              Prof. Ana Souza
              <p className="text-xs text-slate-500">Corretora</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              05/10/2025
              <p className="text-xs text-slate-500">12:30</p>
            </td>
            <td className="p-4 text-sm flex items-center gap-1">
              600
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              Redação sobre Tecnologia
            </td>
            <td className="p-4 text-sm text-slate-900">
              Maria Clara
              <p className="text-xs text-slate-500">Aluno</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              Prof. João Lima
              <p className="text-xs text-slate-500">Corretor</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              04/10/2025
              <p className="text-xs text-slate-500">09:15</p>
            </td>
            <td className="p-4 text-sm flex items-center gap-1">
              750
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              Redação sobre Meio de Transporte
            </td>
            <td className="p-4 text-sm text-slate-900">
              João Lima
              <p className="text-xs text-slate-500">Aluno</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              Prof. Ana Souza
              <p className="text-xs text-slate-500">Corretora</p>
            </td>
            <td className="p-4 text-sm text-slate-900">
              03/10/2025
              <p className="text-xs text-slate-500">16:45</p>
            </td>
            <td className="p-4 text-sm flex items-center gap-1">
               400
            </td>
          </tr>
        </tbody>
      </table>

      <div className="md:flex m-4">
        <p className="text-sm text-slate-600 flex-1">Mostrando 1 a 3 de 20 redações</p>
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
