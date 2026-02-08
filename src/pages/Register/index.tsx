import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, type RegisterFormData } from "../../schemas/RegisterSchema";
import { StepOne } from "../../components/ResgisterForm/StepOne";
import { StepTwo } from "../../components/ResgisterForm/StepTwo";
import { StepThree } from "../../components/ResgisterForm/StepThree";
import { useAuth } from "../../hooks/useAuth";
import { showMessage } from "../../adapters/showMessage";
import { SpinnerLoading } from "../../components/SpinnerLoading";

const FORM_STEPS = [
  { id: 1, label: "Perfil", fields: ["name"] },
  { id: 2, label: "Acesso", fields: ["email", "password"] },
  { id: 3, label: "Revisão", fields: [] },
] as const;

export function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const isLastStep = currentStep === FORM_STEPS.length;

  const { registerUser, state } = useAuth();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });

  const handleNext = async () => {
    const currentFields =
      FORM_STEPS[currentStep - 1].fields as unknown as (keyof RegisterFormData)[];
    const isValid = await trigger(currentFields);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleFinish = handleSubmit(async (data: RegisterFormData) => {
  showMessage.dismiss();

  try {
    await registerUser(data.name, data.email, data.password);
    showMessage.success("Cadastro realizado com sucesso 🎉");
  } catch (err: any) {
    showMessage.error(err.message);
  }
});

  const progressWidth = ((currentStep - 1) / (FORM_STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      {state.loading && <SpinnerLoading />}
      <form
        className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100"
      >
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Criar conta
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Preencha os dados para começar
          </p>
        </header>

        <nav className="relative mb-14 px-2">
          <div className="absolute top-5 left-0 w-full h-[2px] bg-slate-100 -z-0" />
          <div
            className="absolute top-5 left-0 h-[2px] bg-blue-600 transition-all duration-500 ease-in-out -z-0"
            style={{ width: `${progressWidth}%` }}
          />

          <div className="relative flex items-center justify-between w-full">
            {FORM_STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ring-4 z-10
                  ${
                    currentStep >= step.id
                      ? "bg-blue-600 text-white ring-white"
                      : "bg-slate-200 text-slate-400 ring-white"
                  }`}
                >
                  {currentStep > step.id ? "✓" : step.id}
                </div>

                <span
                  className={`absolute -bottom-7 text-xs font-bold transition-colors duration-300 whitespace-nowrap
                  ${
                    currentStep >= step.id
                      ? "text-blue-600"
                      : "text-slate-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </nav>

        <main className="min-h-[220px]">
          {currentStep === 1 && <StepOne register={register} errors={errors} />}
          {currentStep === 2 && <StepTwo register={register} errors={errors} />}
          {currentStep === 3 && <StepThree />}
        </main>

        <footer className="flex justify-between mt-10 gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all cursor-pointer
              ${
                currentStep === 1
                  ? "opacity-0 pointer-events-none"
                  : "text-slate-600 hover:bg-slate-100 active:scale-95"
              }`}
          >
            Voltar
          </button>

          {!isLastStep ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95 transition-all cursor-pointer"
            >
              Próximo
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="px-8 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-200 active:scale-95 transition-all disabled:opacity-70 cursor-pointer"
            >
              Finalizar Cadastro
            </button>
          )}
        </footer>
      </form>
    </div>
  );
}