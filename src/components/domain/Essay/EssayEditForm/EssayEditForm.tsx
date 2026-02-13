import React, { type RefObject } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EssaySchema, type EssayFormData } from "schemas/EssaySchema";
import { useCategory } from "@hooks/useCategory";

interface EssayEditFormProps {
  formRef: RefObject<HTMLFormElement | null>;
  initialData?: EssayFormData;
  onSubmit: (data: EssayFormData) => void;
}

export const EssayEditForm: React.FC<EssayEditFormProps> = ({
  initialData,
  onSubmit,
  formRef
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EssayFormData>({
    resolver: zodResolver(EssaySchema),
    defaultValues: initialData,
  });

  const inputClass =
    "w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";

    const { stateCategory } = useCategory();
    const categories = stateCategory.categories;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

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

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Categoria
        </label>

        <select {...register("category")} className={inputClass}>
           {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        
        {errors.category && (
          <p className="text-sm text-red-500 mt-1">
            {errors.category.message}
          </p>
        )}
      </div>

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
