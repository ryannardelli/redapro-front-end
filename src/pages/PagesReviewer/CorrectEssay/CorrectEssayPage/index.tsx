import { EssayEditor } from "@components/ui/EssayEditor";
import { ChevronLeft, Highlighter, Send, Strikethrough, Underline } from "lucide-react";
import { useState, useEffect } from "react";
import { useProfileCorrectorEssay } from "@hooks/useProfileCorrectorEssay";
import { useNavigate, useParams } from "react-router";

export function CorrectEssayPage() {
  const { id } = useParams<{ id: string }>();
  const essayId = id ? Number(id) : null;

  const navigate = useNavigate();
  const { stateEssay, loadEssays, startReview } = useProfileCorrectorEssay();
  const [essay, setEssay] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editor, setEditor] = useState<any>(null);

  // Carrega essay ao montar
  useEffect(() => {
  const fetchEssay = async () => {
    if (!essayId) return;

    setLoading(true);

    try {
      // Se já existe no state, pega direto
      let found = stateEssay.essays.find(e => e.id === essayId);

      // Se não encontrou, carrega todas as redações
      if (!found) {
        await loadEssays();
        found = stateEssay.essays.find(e => e.id === essayId);
      }

      if (!found) {
        alert("Redação não encontrada!");
        navigate("/");
        return;
      }

      setEssay(found);

      // Inicia correção se estiver pendente
      if (found.status === "PENDENTE") {
        await startReview(essayId);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar redação!");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  fetchEssay();
}, [essayId, navigate]); // depende só do ID e do navigate

  if (loading || !essay) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold">
        Carregando redação...
      </div>
    );
  }

  const finalScore =
    (essay.c1 || 0) +
    (essay.c2 || 0) +
    (essay.c3 || 0) +
    (essay.c4 || 0) +
    (essay.c5 || 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="min-h-[64px] py-3 bg-white border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 sticky top-0 z-20 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Corrigindo Redação
            </h1>
            <p className="text-sm md:text-lg font-bold leading-tight line-clamp-1">
              {essay.title}
            </p>
            <p className="text-xs text-slate-500">
              {essay.user?.name} • {essay.category?.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all">
            <Send size={16} />
            <span className="hidden sm:inline">Finalizar</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <aside className="w-full lg:w-16 border-b lg:border-r border-slate-200 bg-white flex lg:flex-col items-center justify-center gap-4 py-2 px-4 lg:py-6 sticky top-20 h-fit">
          <button
            title="Destacar trecho (erro ou ponto importante)"
            onClick={() => editor?.chain().focus().toggleHighlight().run()}
            className="p-2 md:p-3 text-indigo-600 rounded-xl cursor-pointer hover:bg-indigo-100 transition-colors"
          >
            <Highlighter size={20} />
          </button>

          <button
            title="Riscar palavra incorreta"
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            className="p-2 md:p-3 text-slate-400 cursor-pointer hover:text-red-600 transition-colors"
          >
            <Strikethrough size={20} />
          </button>

          <button
            title="Sublinhar erro gramatical"
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className="p-2 md:p-3 text-slate-400 cursor-pointer hover:text-blue-600 transition-colors"
          >
            <Underline size={20} />
          </button>
        </aside>

        <section className="flex-1 overflow-y-auto p-4 md:p-12 flex justify-center bg-slate-100/50">
          <article className="bg-white w-full max-w-3xl shadow-xl rounded-sm p-6 md:p-16 min-h-[400px] md:min-h-[600px] relative">
            <div className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-300 font-mono text-[10px] md:text-sm underline decoration-indigo-200">
              ID: #{essay.id}
            </div>

            <p className="text-sm text-slate-500 mb-6">
              Autor: <b>{essay.user?.name}</b>
            </p>

            <div className="leading-relaxed text-lg md:text-xl text-slate-800 font-serif whitespace-pre-line">
              <EssayEditor content={essay.content} onEditorReady={setEditor} />
            </div>
          </article>
        </section>

        <aside className="w-full lg:w-[400px] border-t lg:border-l border-slate-200 bg-white overflow-y-auto p-6 space-y-8">
          <h2 className="text-xl font-bold border-b border-slate-100 pb-4">
            Critérios de Avaliação
          </h2>

          {[1, 2, 3, 4, 5].map(c => (
            <div key={c} className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-slate-700 text-sm">
                  Competência {c}
                </label>
                <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
                  200 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="40"
                defaultValue={essay[`c${c}`] || 0}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          ))}

          <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
              Nota Final
            </p>
            <div className="text-4xl md:text-5xl font-black mt-2">
              {essay.note ?? finalScore}
              <span className="text-xl text-slate-500 font-normal">/1000</span>
            </div>
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-200">
            <label className="block text-slate-700 font-semibold mb-2">
              Enviar Feedback
            </label>
            <textarea
              rows={4}
              defaultValue={essay.feedback?.general || ""}
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