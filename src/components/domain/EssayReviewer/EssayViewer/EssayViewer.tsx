import { EssayEditor } from "@components/ui/EssayEditor";

export function EssayViewer({ essay, setEditor }: any) {
  return (
    <section className="flex-1 overflow-y-auto p-4 md:p-12 flex justify-center bg-slate-100/50">
      <article className="bg-white w-full max-w-3xl shadow-xl rounded-sm p-6 md:p-16 relative">

        <div className="absolute top-8 right-8 text-slate-300 font-mono text-sm">
          ID: #{essay.id}
        </div>

        <p className="text-sm text-slate-500 mb-6">
          Autor: <b>{essay.user?.name}</b>
        </p>

        <EssayEditor
          content={essay.content}
          onEditorReady={setEditor}
        />

      </article>
    </section>
  );
}