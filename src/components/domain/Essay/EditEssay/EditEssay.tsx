import { useState, useRef } from "react";
import { Edit3 } from "lucide-react";
import { useEssay } from "../../../../hooks/useEssay";
import { showMessage } from "../../../../adapters/showMessage";
import type { EssayFormData } from "../../../../schemas/EssaySchema";
import { ModalBase } from "@components/ui/Modal/ModalBase";
import { EssayEditForm } from "../EssayEditForm";

interface EditEssayProps {
  essay: {
    id: number;
    title: string;
    content: string;
    category: {
      id: number;
      name: string;
    };
  };
}

export function EditEssay({ essay }: EditEssayProps ) {
  const [isOpen, setIsOpen] = useState(false);
  const { updateEssay, stateEssay} = useEssay();
  const loading = stateEssay.loading;
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if(!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: EssayFormData) => {
    console.log("Dados do formulário enviados:", data);
    try {
      const response = await updateEssay(essay.id, {
        title: data.title,
        content: data.content,
        category_id: data.category,
      });

      showMessage.success(response.message);
      setIsOpen(false);
    } catch (err) {
      const errorMessage =
      err instanceof Error
        ? err.message
        : err?.message;
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

      <ModalBase
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
            category: essay.category.id,
          }}
        />
      </ModalBase>
    </>
  );
}