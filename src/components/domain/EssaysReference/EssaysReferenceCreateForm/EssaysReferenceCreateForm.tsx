import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EssaysReferenceSchema, type EssaysReferenceData } from "schemas/EssayReferenceNewSchema";
import { useCategory } from "@hooks/useCategory";

interface EssaysReferenceCreateFormProps {
  initialData: EssaysReferenceData;
  onSubmit: (data: EssaysReferenceData) => void;
  formRef: React.Ref<HTMLFormElement>;
}

export function EssaysReferenceCreateForm({
  initialData,
  onSubmit,
  formRef,
}: EssaysReferenceCreateFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<EssaysReferenceData>({
    resolver: zodResolver(EssaysReferenceSchema),
    defaultValues: initialData,
  });

  const { stateCategory } = useCategory();
  const categories = stateCategory.categories;

  const inputStyle = (hasError: boolean) => `
    mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-gray-900 transition-all duration-200
    placeholder:text-gray-400
    focus:outline-none focus:ring-4
    ${hasError 
      ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
      : "border-gray-200 focus:border-blue-500 focus:ring-blue-50/50 hover:border-gray-300"
    }
  `;

  return (
    <form 
      ref={formRef} 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-2xl mx-auto space-y-6 p-1"
    >
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Título da Redação
        </label>
        <input
          {...register("title")}
          className={inputStyle(!!errors.title)}
          placeholder="Ex: A persistência da violência contra a mulher"
        />
        {errors.title && (
          <span className="text-xs font-medium text-red-500 mt-1.5 ml-1 animate-in fade-in slide-in-from-top-1">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Conteúdo Integral
        </label>
        <textarea
          {...register("content")}
          rows={8}
          className={`${inputStyle(!!errors.content)} resize-none leading-relaxed`}
          placeholder="Cole ou digite o texto da redação nota 1000 aqui..."
        />
        {errors.content && (
          <span className="text-xs font-medium text-red-500 mt-1.5 ml-1">
            {errors.content.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Ano da Edição
          </label>
          <input
            type="number"
            {...register("year", { valueAsNumber: true })}
            className={inputStyle(!!errors.year)}
            placeholder="Ex: 2024"
          />
          {errors.year && (
            <span className="text-xs font-medium text-red-500 mt-1.5 ml-1">
              {errors.year.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Eixo Temático
          </label>
          <div className="relative">
            <select
              {...register("categoryId", { valueAsNumber: true })}
              className={`${inputStyle(!!errors.categoryId)} appearance-none cursor-pointer`}
            >
              <option value={0}>Selecione uma categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 pt-1 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.categoryId && (
            <span className="text-xs font-medium text-red-500 mt-1.5 ml-1">
              {errors.categoryId.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}