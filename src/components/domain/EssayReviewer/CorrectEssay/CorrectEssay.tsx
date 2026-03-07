import { useState } from 'react';
import { ChevronLeft, Save, Send, Highlighter, MessageSquare, Info, Type } from 'lucide-react';

export function CorrectEssay({ essay, onBack }) {
  const [scores, setScores] = useState({ c1: 160, c2: 200, c3: 120, c4: 160, c5: 200 });
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const handleScoreChange = (comp, value) => {
    setScores(prev => ({ ...prev, [comp]: parseInt(value) }));
  };

  return (
    <div className="h-screen bg-slate-100 flex flex-col overflow-hidden">
      {/* Navbar Superior */}
      <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-20">
        <div className="flex items-center gap-5">
          <button 
            onClick={onBack}
            className="p-2.5 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all text-slate-600"
          >
            <ChevronLeft size={22} />
          </button>
          <div>
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Avaliação em curso</span>
            <h1 className="text-xl font-bold text-slate-900 leading-none">{essay?.theme || "Tema da Redação"}</h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Aluno: {essay?.student || "Nome do Aluno"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl font-bold transition-all border border-transparent hover:border-slate-200">
            <Save size={18} /> Rascunho
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-bold shadow-xl shadow-slate-200 transition-all active:scale-95">
            <Send size={18} /> Finalizar Avaliação
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Barra de Ferramentas (Esquerda) */}
        <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-8 gap-8">
          <ToolButton icon={<Highlighter size={24} />} label="Grifar" active />
          <ToolButton icon={<MessageSquare size={24} />} label="Comentar" />
          <ToolButton icon={<Type size={24} />} label="Gramática" />
          <div className="mt-auto">
             <ToolButton icon={<Info size={24} />} label="Ajuda" />
          </div>
        </aside>

        {/* Workspace de Leitura (Centro) */}
        <main className="flex-1 overflow-y-auto p-12 bg-slate-50/50 flex justify-center custom-scrollbar">
          <div className="w-full max-w-[850px] bg-white shadow-2xl shadow-slate-200/60 rounded-lg p-20 min-h-[1100px] border border-slate-100 relative">
            <div className="absolute top-10 left-10 w-12 h-0.5 bg-indigo-100"></div>
            
            <p className="text-xl leading-[2.2] text-slate-800 font-serif selection:bg-indigo-100">
              A tecnologia avançou de forma <span className="relative group cursor-help">
                <span className="bg-amber-100 border-b-2 border-amber-400 px-1">exponencialmente</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 text-white text-xs p-2 rounded hidden group-hover:block z-30">
                  Possível vício de linguagem ou erro de concordância.
                </span>
              </span> nos últimos anos. No entanto, percebe-se que o sistema educacional brasileiro ainda enfrenta desafios para integrar essas ferramentas no cotidiano das salas de aula.
              <br/><br/>
              Em primeira análise, é fundamental destacar que a desigualdade digital é um dos principais entraves...
            </p>
          </div>
        </main>

        {/* Painel de Notas (Direita) */}
        <aside className="w-[420px] bg-white border-l border-slate-200 flex flex-col overflow-hidden">
          <div className="p-8 overflow-y-auto flex-1 space-y-10 custom-scrollbar">
            <section>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-6">
                <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                Critérios ENEM
              </h2>
              
              <div className="space-y-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-500 uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">Competência {num}</span>
                      <span className="text-lg font-black text-indigo-600">{scores[`c${num}`]} pts</span>
                    </div>
                    <input 
                      type="range" min="0" max="200" step="40" 
                      value={scores[`c${num}`]}
                      onChange={(e) => handleScoreChange(`c${num}`, e.target.value)}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 pt-4 border-t border-slate-100">
              <label className="text-sm font-bold text-slate-800 uppercase tracking-tighter">Feedback Detalhado</label>
              <textarea 
                className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none text-sm leading-relaxed transition-all resize-none shadow-inner"
                placeholder="Destaque os pontos positivos e onde o aluno pode evoluir..."
              />
            </section>
          </div>

          {/* Card de Nota Final Fixo no Rodapé do Painel */}
          <div className="p-8 bg-slate-900 text-white">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Resultado Final</p>
                <div className="text-6xl font-black">{totalScore}</div>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs font-medium italic">Parabéns!</p>
                <p className="text-indigo-400 font-bold">Acima da média</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ToolButton({ icon, label, active = false }) {
  return (
    <button className={`flex flex-col items-center gap-1.5 transition-all group ${active ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-500'}`}>
      <div className={`p-3 rounded-2xl transition-all ${active ? 'bg-indigo-50 shadow-sm' : 'hover:bg-slate-50'}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}