import { CheckCircle2, FileText, Settings, Star, XCircle } from "lucide-react";

export function Profile() {
    return(
    <section className="px-4 py-12 max-w-7xl mx-auto space-y-12">

      {/* ===================== USER INFO ===================== */}
      <div className="flex items-center space-x-6">
        <img
          src="https://readymadeui.com/profile_4.webp"
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Luana Silva</h1>
          <p className="text-gray-500">Membro(a)</p>
          <p className="text-gray-500">luana@example.com</p>
        </div>
        <button className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
          <Settings size={16} /> Configurações
        </button>
      </div>

      {/* ===================== STATISTICS CARDS ===================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500">Redações Enviadas</p>
          <p className="text-2xl font-bold text-gray-900">20</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500">Redações Corrigidas</p>
          <p className="text-2xl font-bold text-gray-900">18</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500">Média de Notas</p>
          <p className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-1">
            720
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500">Ranking</p>
          <p className="text-2xl font-bold text-gray-900">5º lugar</p>
        </div>
      </div>

      {/* ===================== HISTORY TABLE ===================== */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-slate-900">Redação</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-900">Corretor</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-900">Data</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-900">Nota</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
                <FileText size={18} className="text-blue-600" /> Meio Ambiente
              </td>
              <td className="p-4 text-sm text-slate-900">Prof. Ana Souza</td>
              <td className="p-4 text-sm text-slate-900">05/10/2025</td>
              <td className="p-4 text-sm flex items-center gap-1">
                <Star size={16} className="text-yellow-500" /> 650
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" /> Tecnologia
              </td>
              <td className="p-4 text-sm text-slate-900">Prof. João Lima</td>
              <td className="p-4 text-sm text-slate-900">04/10/2025</td>
              <td className="p-4 text-sm flex items-center gap-1">
                <Star size={16} className="text-yellow-500" /> 720
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-sm font-medium text-slate-900 flex items-center gap-2">
                <XCircle size={18} className="text-red-600" /> Educação
              </td>
              <td className="p-4 text-sm text-slate-900">Prof. Ana Souza</td>
              <td className="p-4 text-sm text-slate-900">03/10/2025</td>
              <td className="p-4 text-sm flex items-center gap-1">
                <Star size={16} className="text-gray-400" /> 0
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===================== ACHIEVEMENTS ===================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-yellow-100 text-yellow-700 rounded-lg p-4 text-center shadow">
          🏆 Redação com nota máxima
        </div>
        <div className="bg-blue-100 text-blue-700 rounded-lg p-4 text-center shadow">
          ✍️ 10 Redações Corrigidas
        </div>
        <div className="bg-green-100 text-green-700 rounded-lg p-4 text-center shadow">
          ⭐ Média acima de 700
        </div>
      </div>

    </section>
    );
}