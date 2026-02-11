import { useState, useRef } from "react";
import { Edit3 } from "lucide-react";
import { ModalBase } from "../../../Modal/ModalBase";
import { EssayEditForm } from "../../../Modal/EssayEditForm";

export function EditEssay() {
  const [isOpen, setIsOpen] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    formRef.current?.requestSubmit();
  };

  const onFormSubmit = async (data: any) => {
    try {
      console.log("Dados recebidos para edição:", data);
      // Aqui você faria o seu fetch/axios:
      
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação
      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao salvar:", error);
    } finally {
      //
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
      >
        <EssayEditForm 
          formRef={formRef} 
          onSubmit={onFormSubmit}
          initialData={{
            title: "Título Existente",
            category: "Enem",
            content: "Conteúdo atual da redação..."
          }} 
        />
      </ModalBase>
    </>
  );
}