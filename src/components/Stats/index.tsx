import { FileText, BarChart3, Calendar } from "lucide-react";

export function Stats() {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-row items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center justify-center w-10 h-10 text-pink-700 bg-pink-100 rounded">
            <FileText className="w-5 h-5" />
          </div>
          <div className="ml-3">
            <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
              12
            </h2>
            <p className="text-sm leading-none text-gray-600">Redações enviadas</p>
          </div>
        </div>

        <div className="flex flex-row items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center justify-center w-10 h-10 text-green-700 bg-green-100 rounded">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div className="ml-3">
            <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
              820
            </h2>
            <p className="text-sm leading-none text-gray-600">Média geral</p>
          </div>
        </div>

        <div className="flex flex-row items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center justify-center w-10 h-10 text-red-700 bg-red-100 rounded">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="ml-3">
            <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
              03/10/2025
            </h2>
            <p className="text-sm leading-none text-gray-600">Última correção</p>
          </div>
        </div>
      </div>
    </section>
  );
}
