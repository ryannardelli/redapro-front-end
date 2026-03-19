import { useState, useRef } from "react";
import { Edit3 } from "lucide-react";
import { showMessage } from "../../../../adapters/showMessage";
import type { EssayFormData } from "../../../../schemas/Essay/EssaySchema";
import { EssayEditForm } from "../EssayEditForm";
import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";
import { useProfileStudentEssay } from "@hooks/useProfileStudentEssay";
import type { Essay } from "models/Essay";

interface EditEssayProps {
  essay: Essay;
}

export function EditEssay({ essay }: EditEssayProps ) {
  const [isOpen, setIsOpen] = useState(false);
  const { updateEssay, stateEssay} = useProfileStudentEssay();
  const loading = stateEssay.loading;
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if(!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: EssayFormData) => {
    try {
      const response = await updateEssay(essay.id, {
        title: data.title,
        content: data.content,
        category_id: data.category_id,
      });

      showMessage.success(response.message);
      setIsOpen(false);
    } catch (err) {
      const errorMessage =
      err instanceof Error
        ? err.message
        : "Erro ao atualizar redação.";
      console.log(err);
      showMessage.error(errorMessage);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
        title="Editar redação"
      >
        <Edit3 size={16} /> Editar
      </button>

      <ModalEditBase
        title="Editar Redação"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
        isLoading={loading}
      >
        <EssayEditForm 
          formRef={formRef} 
          onSubmit={onFormSubmit}
          initialData={{
            title: essay.title,
            content: essay.content,
            category_id: essay.category?.id ?? 0,
          }}
        />
      </ModalEditBase>
    </>
  );
}