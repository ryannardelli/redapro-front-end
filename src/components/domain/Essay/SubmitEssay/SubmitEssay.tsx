import { useState } from "react";
import { FileText, Send, Bot, User, ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";import { useCategory } from "@hooks/useCategory";
import { useEssay } from "@hooks/useEssay";
import { EssaySchema, type EssayFormData } from "schemas/EssaySchema";
import { showMessage } from "adapters/showMessage";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
;

export function SubmitEssay() {
  const [mode, setMode] = useState<"ia" | "corretor">("ia");
  const { stateCategory } = useCategory();
  const { createEssay, stateEssay } = useEssay();
  const categories = stateCategory.categories;

  const { loading } = stateEssay;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EssayFormData>({
    resolver: zodResolver(EssaySchema),
    defaultValues: {
      mode: "ia",
    },
  });

  const onSubmit = async (formData: EssayFormData) => {
  showMessage.dismiss();
  try {
    if (formData.mode !== "corretor") return;

    const response = await createEssay({
      title: formData.title,
      content: formData.content,
      category_id: formData.category_id,
    });

    showMessage.success(response?.message);
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : err?.message;

    showMessage.error(errorMessage);
  }
};

  return (
    <section className="p-8 max-w-4xl mx-auto rounded-2xl shadow-lg border border-gray-100 bg-white">
      {loading && <SpinnerLoading />}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Enviar Redação
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Personalize sua experiência de correção escolhendo o método ideal.
        </p>
      </header>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          onClick={() => {
            setMode("ia");
            setValue("mode", "ia");
          }}
          className={`flex cursor-pointer items-center p-4 rounded-xl border-2 transition-all duration-200 text-left ${
            mode === "ia"
              ? "border-blue-600 bg-blue-50 ring-4 ring-blue-50"
              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          }`}
        >
          <div
            className={`p-3 rounded-lg mr-4 ${
              mode === "ia"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            <Bot size={24} />
          </div>
          <div>
            <p
              className={`font-bold ${
                mode === "ia" ? "text-blue-900" : "text-gray-700"
              }`}
            >
              Correção por IA
            </p>
            <p className="text-sm text-gray-500">
              Feedback instantâneo e detalhado.
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => {
            setMode("corretor");
            setValue("mode", "corretor");
          }}
          className={`flex items-center cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 text-left ${
            mode === "corretor"
              ? "border-emerald-600 bg-emerald-50 ring-4 ring-emerald-50"
              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          }`}
        >
          <div
            className={`p-3 rounded-lg mr-4 ${
              mode === "corretor"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            <User size={24} />
          </div>
          <div>
            <p
              className={`font-bold ${
                mode === "corretor"
                  ? "text-emerald-900"
                  : "text-gray-700"
              }`}
            >
              Corretor Humano
            </p>
            <p className="text-sm text-gray-500">
              Olhar analítico e pedagógico.
            </p>
          </div>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Título da Redação
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="Ex: Os impactos da tecnologia..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Categoria
            </label>

            <select
              {...register("category_id", { valueAsNumber: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all appearance-none bg-white"
            >
              <option value={0}>Selecione uma categoria</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="text-sm text-red-500 mt-1">
                {errors.category_id.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Texto da Redação
          </label>
          <textarea
            {...register("content")}
            placeholder="Digite ou cole sua redação aqui..."
            rows={10}
            className="w-full px-4 py-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all resize-none leading-relaxed"
          />
          {errors.content && (
            <p className="text-sm text-red-500 mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transform active:scale-95 transition-all shadow-lg shadow-gray-200 disabled:opacity-60 cursor-pointer"
        >
          <Send size={18} />
          Enviar para Correção
        </button>
      </form>

      <hr className="my-10 border-gray-100" />

      {/* Histórico (mock) */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileText size={20} className="text-blue-600" /> Histórico de Envios
        </h2>

        <div className="space-y-3">
          {[
            { title: "Redação sobre Meio Ambiente", date: "05/10/2025", type: "IA" },
            { title: "Redação sobre Tecnologia", date: "02/10/2025", type: "Humana" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  Enviada em {item.date} • {item.type}
                </p>
              </div>
              <ChevronRight
                size={18}
                className="text-gray-400 group-hover:text-blue-600 transition-all transform group-hover:translate-x-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
