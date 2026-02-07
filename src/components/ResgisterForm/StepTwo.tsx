import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { RegisterFormData } from "../../schemas/RegisterSchema";

type Props = {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
};

export function StepTwo({ register, errors }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Senha</label>
        <input
          type="password"
          {...register("password")}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-red-500">{errors.password?.message}</p>
      </div>
    </div>
  );
}

