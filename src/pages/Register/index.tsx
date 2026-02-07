import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, type RegisterFormData } from "../../schemas/RegisterSchema";
import { StepOne } from "../../components/ResgisterForm/StepOne";
import { StepTwo } from "../../components/ResgisterForm/StepTwo";
import { StepThree } from "../../components/ResgisterForm/StepThree";

export function Register() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  function onSubmit(data: RegisterFormData) {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    console.log("Dados enviados:", data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Título */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Criar conta
        </h1>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center w-full">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
                  ${
                    step >= item
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }
                `}
              >
                {item}
              </div>

              {item < 3 && (
                <div
                  className={`flex-1 h-1 mx-2
                    ${step > item ? "bg-blue-600" : "bg-gray-300"}
                  `}
                />
              )}
            </div>
          ))}
        </div>

        {/* Etapas */}
        {step === 1 && <StepOne register={register} errors={errors} />}
        {step === 2 && <StepTwo register={register} errors={errors} />}
        {step === 3 && <StepThree />}

        {/* Botões */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Voltar
            </button>
          ) : (
            <div />
          )}

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {step === 3 ? "Finalizar" : "Próximo"}
          </button>
        </div>
      </form>
    </div>
  );
}
