import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EssaysReferenceSchema, type EssaysReferenceData } from "schemas/EssayReferenceNewSchema";
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

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          {...register("title", { required: true })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="Ex: Redação sobre Meio Ambiente"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Conteúdo
        </label>
        <textarea
          {...register("content", { required: true })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="Conteúdo da redação"
        />
        {errors.content && (
          <p className="text-sm text-red-500 mt-1">
            {errors.content.message}
          </p>
        )}
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ano
        </label>
        <input
          type="number"
          {...register("year", { valueAsNumber: true, required: true })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="Ex: 2024"
        />
        {errors.year && (
          <p className="text-sm text-red-500 mt-1">
            {errors.year.message}
          </p>
        )}
      </div>

      {/* PDF URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          URL do PDF
        </label>
        <input
          {...register("pdf_url")}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="Ex: https://exemplo.com/redacao.pdf"
        />
        {errors.pdf_url && (
          <p className="text-sm text-red-500 mt-1">
            {errors.pdf_url.message}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Categoria
        </label>
        <input
          type="number"
          {...register("categoryId", { valueAsNumber: true, required: true })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="ID da categoria"
        />
        {errors.categoryId && (
          <p className="text-sm text-red-500 mt-1">
            {errors.categoryId.message}
          </p>
        )}
      </div>

    </form>
  );
}