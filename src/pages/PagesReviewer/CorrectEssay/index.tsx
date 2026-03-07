import React, { useState } from 'react';
import { Play } from 'lucide-react'; // novo componente de correção
import { CorrectEssayPage } from './CorrectEssayPage';

export function CorrectEssay() {
  const [selectedEssay, setSelectedEssay] = useState(null);

  const essays = [
    { id: '88291', student: "Ana Silva", theme: "O impacto da IA na educação", status: "pending", date: "14/05/2024" },
    { id: '88292', student: "Bruno Costa", theme: "Crise hídrica no Brasil", status: "correcting", date: "15/05/2024" },
    { id: '88293', student: "Carla Souza", theme: "Saúde Mental no Século XXI", status: "completed", date: "12/05/2024" },
  ];

  // se selectedEssay estiver preenchido, renderiza a tela de correção
  if (selectedEssay) {
    return <CorrectEssayPage essay={selectedEssay} goBack={() => setSelectedEssay(null)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Painel do Corretor</h1>

      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left">Estudante</th>
            <th className="px-6 py-4 text-left">Tema</th>
            <th className="px-6 py-4 text-center">Data</th>
            <th className="px-6 py-4 text-right">Ação</th>
          </tr>
        </thead>
        <tbody>
          {essays.map((essay) => (
            <tr key={essay.id} className="hover:bg-indigo-50/30 transition-colors">
              <td className="px-6 py-4">{essay.student}</td>
              <td className="px-6 py-4">{essay.theme}</td>
              <td className="px-6 py-4 text-center">{essay.date}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => setSelectedEssay(essay)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all"
                >
                  Corrigir <Play size={14} fill="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}