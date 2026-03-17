import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { useEffect } from "react";

interface EssayEditorProps {
  content: string;
  onEditorReady: (editor: Editor) => void;
}

export function EssayEditor({ content, onEditorReady }: EssayEditorProps) {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose max-w-none leading-relaxed text-lg md:text-xl text-slate-800 font-serif focus:outline-none"
      }
    }
  });

  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  if (!editor) return null;

  return (
    <div className="min-h-[400px]">
      <EditorContent editor={editor} />
    </div>
  );
}