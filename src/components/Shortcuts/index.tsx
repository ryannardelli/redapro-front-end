import { PlusCircle, FileText, Inbox, BarChart3 } from "lucide-react";

export function Shortcuts() {
  return (
    <div className="flex justify-end p-4">
      <div className="w-max bg-white border-2 border-gray-200 divide-x-2 divide-gray-200 flex rounded-md overflow-hidden shadow-sm">
        <button
          type="button"
          className="px-5 py-3 bg-indigo-50 hover:bg-indigo-100 cursor-pointer flex items-center justify-center text-sm tracking-wider outline-none gap-2 transition"
        >
          <PlusCircle className="w-5 h-5 text-indigo-700" />
          <span className="hidden sm:inline">Nova Redação</span>
        </button>

        <button
          type="button"
          className="px-5 py-3 bg-indigo-50 hover:bg-indigo-100 cursor-pointer flex items-center justify-center text-sm tracking-wider outline-none gap-2 transition"
        >
          <FileText className="w-5 h-5 text-indigo-700" />
          <span className="hidden sm:inline">Minhas Redações</span>
        </button>

        <button
          type="button"
          className="px-5 py-3 bg-indigo-50 hover:bg-indigo-100 cursor-pointer flex items-center justify-center text-sm tracking-wider outline-none gap-2 transition"
        >
          <Inbox className="w-5 h-5 text-indigo-700" />
          <span className="hidden sm:inline">Correções</span>
        </button>

        <button
          type="button"
          className="px-5 py-3 bg-indigo-50 hover:bg-indigo-100 cursor-pointer flex items-center justify-center text-sm tracking-wider outline-none gap-2 transition"
        >
          <BarChart3 className="w-5 h-5 text-indigo-700" />
          <span className="hidden sm:inline">Relatórios</span>
        </button>
      </div>
    </div>
  );
}
