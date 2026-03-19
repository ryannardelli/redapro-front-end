import { Highlighter, Strikethrough, Underline } from "lucide-react";

export function EssayToolbar({ editor }: any) {
  return (
    <aside className="w-full lg:w-16 border-b lg:border-r border-slate-200 bg-white flex lg:flex-col items-center justify-center gap-4 py-2 px-4 lg:py-6 sticky top-20 h-fit">

      <button
        onClick={() => editor?.chain().focus().toggleHighlight().run()}
        className="p-2 md:p-3 text-indigo-600 rounded-xl hover:bg-indigo-100"
      >
        <Highlighter size={20} />
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleStrike().run()}
        className="p-2 md:p-3 text-slate-400 hover:text-red-600"
      >
        <Strikethrough size={20} />
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        className="p-2 md:p-3 text-slate-400 hover:text-blue-600"
      >
        <Underline size={20} />
      </button>

    </aside>
  );
}