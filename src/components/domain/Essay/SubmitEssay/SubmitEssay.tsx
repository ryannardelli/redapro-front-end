import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategory } from "@hooks/useCategory";
import { EssaySchema, type EssayFormData } from "schemas/Essay/EssaySchema";
import { showMessage } from "adapters/showMessage";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
import { Send } from "lucide-react";
import { useProfileStudentEssay } from "@hooks/useProfileStudentEssay";

export function SubmitEssay() {
  const { stateCategory } = useCategory();
  const { createEssay, stateEssay } = useProfileStudentEssay();
  const categories = stateCategory.categories;

  const { loading } = stateEssay;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EssayFormData>({
    resolver: zodResolver(EssaySchema),
  });

  const onSubmit = async (formData: EssayFormData) => {
    showMessage.dismiss();

    try {
      const createdEssay = await createEssay({
        title: formData.title,
        content: formData.content,
        category_id: formData.category_id,
      });

      showMessage.success(createdEssay?.message || "Redação criada com sucesso!");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : (err?.message ?? "Erro ao enviar redação");
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
          Preencha os dados abaixo para criar sua redação.
        </p>
      </header>

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
              <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
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
              <p className="text-sm text-red-500 mt-1">{errors.category_id.message}</p>
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
            <p className="text-sm text-red-500 mt-1">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transform active:scale-95 transition-all shadow-lg shadow-gray-200 disabled:opacity-60 cursor-pointer"
        >
          <Send size={18} />
          Enviar Redação
        </button>
      </form>
    </section>
  );
}