import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewProfileSchema,
  type NewProfileData,
} from "schemas/Profile/NewProfileSchema";

interface ProfileCreateFormProps {
  initialData: NewProfileData;
  onSubmit: (data: NewProfileData) => void;
  formRef: React.Ref<HTMLFormElement>;
}

export function ProfileCreateForm({
  initialData,
  onSubmit,
  formRef,
}: ProfileCreateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProfileData>({
    resolver: zodResolver(NewProfileSchema),
    defaultValues: initialData,
  });

  const inputStyle = (hasError: boolean) => `
    mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-gray-900 transition-all duration-200
    placeholder:text-gray-400
    focus:outline-none focus:ring-4
    ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
        : "border-gray-200 focus:border-blue-500 focus:ring-blue-50/50 hover:border-gray-300"
    }
  `;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-6 p-1"
    >
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Nome do Perfil
        </label>

        <input
          {...register("name")}
          className={inputStyle(!!errors.name)}
          placeholder="Ex: Professor"
        />

        {errors.name && (
          <span className="text-xs font-medium text-red-500 mt-1.5 ml-1 animate-in fade-in slide-in-from-top-1">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Descrição
        </label>

        <textarea
          {...register("description")}
          rows={4}
          className={`${inputStyle(
            !!errors.description
          )} resize-none leading-relaxed`}
          placeholder="Ex: Perfil com acesso restrito no sistema"
        />

        {errors.description && (
          <span className="text-xs font-medium text-red-500 mt-1.5 ml-1">
            {errors.description.message}
          </span>
        )}
      </div>
    </form>
  );
}