// import React, { type RefObject } from 'react';

// type Category = 'Enem' | 'Concurso' | 'Acadêmica' | 'Livre';

// interface EssayData {
//   title: string;
//   content: string;
//   category: Category;
// }

// interface EssayEditFormProps {
//   formRef: RefObject<HTMLFormElement | null>;
//   initialData?: EssayData;
//   onSubmit: (data: EssayData) => void;
// }

// export const EssayEditForm: React.FC<EssayEditFormProps> = ({ formRef, initialData, onSubmit }) => {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
    
//     onSubmit({
//       title: formData.get('title') as string,
//       content: formData.get('content') as string,
//       category: formData.get('category') as Category,
//     });
//   };

//   const inputClass = "w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";

//   return (
//     <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
//       <div>
//         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
//           Título da Redação
//         </label>
//         <input
//           name="title"
//           defaultValue={initialData?.title}
//           placeholder="Ex: O impacto da tecnologia..."
//           className={inputClass}
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
//           Categoria
//         </label>
//         <select name="category" defaultValue={initialData?.category} className={inputClass} required>
//           <option value="Enem">Enem</option>
//           <option value="Concurso">Concurso</option>
//           <option value="Acadêmica">Acadêmica</option>
//           <option value="Livre">Livre</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
//           Conteúdo
//         </label>
//         <textarea
//           name="content"
//           defaultValue={initialData?.content}
//           rows={6}
//           className={`${inputClass} resize-none`}
//           placeholder="Desenvolva seu texto aqui..."
//           required
//         />
//       </div>
//     </form>
//   );
// };

import React, { type RefObject } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  EssayEditSchema,
  type EssayEditFormData,
} from "../../../schemas/EssayEditSchema";


interface EssayEditFormProps {
  formRef: RefObject<HTMLFormElement | null>;
  initialData?: EssayEditFormData;
  onSubmit: (data: EssayEditFormData) => void;
}

export const EssayEditForm: React.FC<EssayEditFormProps> = ({
  formRef,
  initialData,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EssayEditFormData>({
    resolver: zodResolver(EssayEditSchema),
    defaultValues: initialData,
  });

  const inputClass =
    "w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Título */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Título da Redação
        </label>
        <input
          {...register("title")}
          placeholder="Ex: O impacto da tecnologia..."
          className={inputClass}
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Categoria */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Categoria
        </label>
        <select {...register("category")} className={inputClass}>
          <option value="Enem">Enem</option>
          <option value="Concurso">Concurso</option>
          <option value="Acadêmica">Acadêmica</option>
          <option value="Livre">Livre</option>
        </select>
        {errors.category && (
          <p className="text-sm text-red-500 mt-1">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Conteúdo */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Conteúdo
        </label>
        <textarea
          {...register("content")}
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Desenvolva seu texto aqui..."
        />
        {errors.content && (
          <p className="text-sm text-red-500 mt-1">
            {errors.content.message}
          </p>
        )}
      </div>
    </form>
  );
};
