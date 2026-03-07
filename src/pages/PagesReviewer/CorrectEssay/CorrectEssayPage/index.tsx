import { ChevronLeft, Highlighter, MessageSquare, Info, Send } from 'lucide-react';

export function CorrectEssayPage({ essay, goBack }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="min-h-[64px] py-3 bg-white border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 sticky top-0 z-20 gap-4">
        <div className="flex items-center gap-3">
          <button onClick={goBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">Corrigindo Redação</h1>
            <p className="text-sm md:text-lg font-bold leading-tight line-clamp-1">{essay.theme}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all">
            <Send size={16} /> <span className="hidden sm:inline">Finalizar</span>
            <span className="sm:hidden text-xs">Finalizar</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        <aside className="w-full lg:w-16 border-b lg:border-r border-slate-200 bg-white flex lg:flex-col items-center justify-center lg:py-6 gap-4 py-2 px-4">
          <button title="Grifar" className="p-2 md:p-3 text-indigo-600 bg-indigo-50 rounded-xl"><Highlighter size={20} /></button>
          <button title="Comentar" className="p-2 md:p-3 text-slate-400 hover:text-indigo-600 transition-colors"><MessageSquare size={20} /></button>
          <button title="Instruções" className="p-2 md:p-3 text-slate-400 hover:text-indigo-600 transition-colors"><Info size={20} /></button>
        </aside>

        <section className="flex-1 overflow-y-auto p-4 md:p-12 flex justify-center bg-slate-100/50">
          <article className="bg-white w-full max-w-3xl shadow-xl rounded-sm p-6 md:p-16 min-h-[400px] md:min-h-[600px] relative">
            <div className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-300 font-mono text-[10px] md:text-sm underline decoration-indigo-200">
              ID: #{essay.id}
            </div>
            <p className="leading-relaxed text-lg md:text-xl text-slate-800 font-serif whitespace-pre-line mt-6">
              {`Exemplo de redação de ${essay.student}. Aqui vai o texto que o corretor vai analisar com atenção aos detalhes gramaticais e estruturais do texto dissertativo-argumentativo.`}
            </p>
          </article>
        </section>

        <aside className="w-full lg:w-[400px] border-t lg:border-l border-slate-200 bg-white overflow-y-auto p-6 space-y-8">
          <h2 className="text-xl font-bold border-b border-slate-100 pb-4">Critérios de Avaliação</h2>
          {[1, 2, 3, 4, 5].map((c) => (
            <div key={c} className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-slate-700 text-sm">Competência {c}</label>
                <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">200 pts</span>
              </div>
              <input type="range" min="0" max="200" step="40" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"/>
              <p className="text-xs text-slate-400 italic">Domínio da norma culta da língua escrita.</p>
            </div>
          ))}

          <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Nota Final</p>
            <div className="text-4xl md:text-5xl font-black mt-2">960<span className="text-xl text-slate-500 font-normal">/1000</span></div>
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-200">
            <label className="block text-slate-700 font-semibold mb-2" htmlFor="feedback">Enviar Feedback</label>
            <textarea
              id="feedback"
              rows={4}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm"
              placeholder="Escreva aqui seu feedback..."
            />
            <button className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-sm transition-all">
              <Send size={18} /> Enviar Feedback
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}