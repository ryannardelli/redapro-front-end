import { useState, useRef } from "react";
import { Edit3 } from "lucide-react";
import { showMessage } from "../../../../adapters/showMessage";
import { ReferenceEssayEditForm } from "../ReferenceEssayEditForm";
import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";
import { useReferenceEssay } from "@hooks/useReferenceEssay";
import type { ReferenceEssay } from "models/ReferenceEssay";
import type { ReferenceEssayFormData } from "schemas/EssayReference/ReferenceEssayEditSchema";

interface EditReferenceEssayProps {
  essay: ReferenceEssay;
}

export function EditReferenceEssay({ essay }: EditReferenceEssayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { updateReferenceEssay, stateReferenceEssay } = useReferenceEssay();
  const loading = stateReferenceEssay.loading;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: ReferenceEssayFormData) => {
    try {
      const response = await updateReferenceEssay(essay.id, {
        title: data.title,
        content: data.content,
        categoryId: data.category_id,
        year: data.year,
        authorName: data.authorName,
      });

      showMessage.success(response.message);
      setIsOpen(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao atualizar redação de referência.";

      console.log(err);
      showMessage.error(errorMessage);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer"
        title="Editar redação de referência"
      >
        <Edit3 size={18} />
      </button>

      <ModalEditBase
        title="Editar Redação Nota 1000"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
        isLoading={loading}
      >
        <ReferenceEssayEditForm
          formRef={formRef}
          onSubmit={onFormSubmit}
          initialData={{
            title: essay.title,
            content: essay.content,
            category_id: essay.category?.id ?? 0,
            year: essay.year ?? 0,
            authorName: essay.authorName,
          }}
        />
      </ModalEditBase>
    </>
  );
}