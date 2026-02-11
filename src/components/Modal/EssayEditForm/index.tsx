import React, { type RefObject } from 'react';

type Category = 'Enem' | 'Concurso' | 'Acadêmica' | 'Livre';

interface EssayData {
  title: string;
  content: string;
  category: Category;
}

interface EssayEditFormProps {
  formRef: RefObject<HTMLFormElement | null>;
  initialData?: EssayData;
  onSubmit: (data: EssayData) => void;
}

export const EssayEditForm: React.FC<EssayEditFormProps> = ({ formRef, initialData, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as Category,
    });
  };

  const inputClass = "w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Título da Redação
        </label>
        <input
          name="title"
          defaultValue={initialData?.title}
          placeholder="Ex: O impacto da tecnologia..."
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Categoria
        </label>
        <select name="category" defaultValue={initialData?.category} className={inputClass} required>
          <option value="Enem">Enem</option>
          <option value="Concurso">Concurso</option>
          <option value="Acadêmica">Acadêmica</option>
          <option value="Livre">Livre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Conteúdo
        </label>
        <textarea
          name="content"
          defaultValue={initialData?.content}
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Desenvolva seu texto aqui..."
          required
        />
      </div>
    </form>
  );
};