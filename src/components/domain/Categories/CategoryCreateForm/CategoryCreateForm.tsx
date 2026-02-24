import { useForm } from "react-hook-form";
import type { CategoryCreateData } from "../../../../schemas/CategoryNewSchema";

interface CategoryCreateFormProps {
  onSubmit: (data: CategoryCreateData) => void;
  formRef: React.Ref<HTMLFormElement>;
}

export function CategoryCreateForm({
  onSubmit,
  formRef,
}: CategoryCreateFormProps) {
  const { register, handleSubmit } = useForm<CategoryCreateData>();

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
      </div>
    </form>
  );
}