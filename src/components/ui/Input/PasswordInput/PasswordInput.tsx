import { useState } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export function PasswordInput({ label, placeholder, register, error }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-8">
      <label className="text-slate-900 text-[13px] font-medium block mb-2">
        {label}
      </label>

      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          {...register}
          placeholder={placeholder}
          className={`w-full text-slate-900 text-sm border-b pl-2 pr-8 py-3 outline-none focus:border-blue-600 ${
            error ? "border-red-500" : "border-slate-300"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute cursor-pointer right-2 text-slate-400 hover:text-slate-600 transition"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}