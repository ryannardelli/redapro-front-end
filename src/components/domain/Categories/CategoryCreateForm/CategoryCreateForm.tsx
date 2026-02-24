import { useForm } from "react-hook-form";
import { CategoryNewSchema, type CategoryCreateData } from "../../../../schemas/CategoryNewSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface CategoryCreateFormProps {
  initialData: CategoryCreateData;
  onSubmit: (data: CategoryCreateData) => void;
  formRef: React.Ref<HTMLFormElement>;
}

export function CategoryCreateForm({
  initialData,
  onSubmit,
  formRef,
}: CategoryCreateFormProps) {
  const { register, handleSubmit, formState: {errors} } = useForm<CategoryCreateData>({
    resolver: zodResolver(CategoryNewSchema),
    defaultValues: initialData
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nome da categoria
        </label>
        <input
          {...register("name", { required: true })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="Ex: Meio Ambiente"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          {...register("description")}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary-500"
          placeholder="Descrição da categoria"
        />
         {errors.description && (
          <p className="text-sm text-red-500 mt-1">
            {errors.description.message}
          </p>
        )}
      </div>
    </form>
  );
}