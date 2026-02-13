import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { RegisterFormData } from "schemas/RegisterSchema";

type Props = {
    register: UseFormRegister<RegisterFormData>;
    errors: FieldErrors<RegisterFormData>;
}

export function StepOne({ register, errors }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nome</label>
        <input
          {...register("name")}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-red-500 mt-2">{errors.name?.message}</p>
      </div>
    </div>
  );
}
