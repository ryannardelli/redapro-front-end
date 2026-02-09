import { useState } from "react";
import { FileText, Upload, Send, Bot, User } from "lucide-react";

export default function SubmitEssay() {
  const [mode, setMode] = useState("ia");

  return (
    <section className="p-6 max-w-4xl mx-auto rounded-xl shadow bg-white">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Enviar Redação</h1>
      <p className="text-gray-600 mb-6">
        Escolha se deseja correção automática por IA 🧠 ou por um corretor humano 👩‍🏫.
      </p>

      {/* Seletor IA / Corretor */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode("ia")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
            mode === "ia"
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          <Bot size={18} /> IA
        </button>

        <button
          onClick={() => setMode("corretor")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
            mode === "corretor"
              ? "bg-green-600 text-white border-green-600"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          <User size={18} /> Corretor
        </button>
      </div>

      {/* Formulário */}
      <form className="space-y-5">
        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Título da Redação
          </label>
          <input
            type="text"
            placeholder="Ex: Os impactos da tecnologia..."
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tema */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tema
          </label>
          <select className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Selecione um tema</option>
            <option value="meio-ambiente">Meio Ambiente</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="educacao">Educação</option>
            <option value="politica">Política</option>
          </select>
        </div>

        {/* Texto da Redação */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Redação
          </label>
          <textarea
            placeholder="Digite ou cole sua redação aqui..."
            rows={8}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Upload opcional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload (opcional)
          </label>
          <label className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border rounded-lg cursor-pointer hover:bg-gray-100">
            <Upload size={18} className="text-gray-600" />
            <span className="text-sm text-gray-600">Selecionar arquivo</span>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Send size={18} />
          Enviar Redação
        </button>
      </form>

      {/* Histórico de Redações */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <FileText size={18} className="text-blue-600" /> Histórico de Envios
        </h2>

        <ul className="divide-y">
          <li className="py-3 flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Redação sobre Meio Ambiente</p>
              <p className="text-xs text-gray-500">Enviada em 05/10/2025 • Correção IA</p>
            </div>
            <button className="text-blue-600 text-sm hover:underline">Ver resultado</button>
          </li>
          <li className="py-3 flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Redação sobre Tecnologia</p>
              <p className="text-xs text-gray-500">Enviada em 02/10/2025 • Corretor</p>
            </div>
            <button className="text-blue-600 text-sm hover:underline">Ver resultado</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
