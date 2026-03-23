import React, { type RefObject } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategory } from "@hooks/useCategory";
import { ReferenceEssayEditSchema, type ReferenceEssayFormData } from "schemas/EssayReference/ReferenceEssayEditSchema";

interface ReferenceEssayEditFormProps {
  formRef: RefObject<HTMLFormElement | null>;
  initialData?: ReferenceEssayFormData;
  onSubmit: (data: ReferenceEssayFormData) => void;
}

export const ReferenceEssayEditForm: React.FC<ReferenceEssayEditFormProps> = ({
  initialData,
  onSubmit,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReferenceEssayFormData>({
    resolver: zodResolver(ReferenceEssayEditSchema) as any,
    defaultValues: initialData,
  });

  const { stateCategory } = useCategory();
  const categories = stateCategory.categories;

  const inputClass =
    "w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all";

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="text-sm font-medium">Título</label>
        <input {...register("title")} className={inputClass} />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Autor</label>
        <input {...register("authorName")} className={inputClass} />
        {errors.authorName && <p className="text-red-500 text-sm">{errors.authorName.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Ano</label>
        <input type="number" {...register("year", { valueAsNumber: true })} className={inputClass} />
        {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Categoria</label>
        <select {...register("category_id", { valueAsNumber: true })} className={inputClass}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="text-red-500 text-sm">{errors.category_id.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Conteúdo</label>
        <textarea {...register("content")} rows={6} className={`${inputClass} resize-none`} />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}
      </div>

    </form>
  );
};