import { useRef, useState } from "react";
import { Plus } from "lucide-react";

import { showMessage } from "../../../../adapters/showMessage";

import { ModalCreateBase } from "@components/ui/Modal/ModalCreateBase";
import { EssaysReferenceCreateForm } from "../EssaysReferenceCreateForm";
import type { EssaysReferenceData } from "schemas/EssayReferenceNewSchema";
import { useReferenceEssay } from "@hooks/useReferenceEssay";

export function NewEssaysReference() {
  const [isOpen, setIsOpen] = useState(false);

  const { createReferenceEssay, stateReferenceEssay } = useReferenceEssay();
  const loading = stateReferenceEssay.loading;

  const formRef = useRef<HTMLFormElement>(null);

  const handleCreateTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: EssaysReferenceData) => {
    try {
      const response = await createReferenceEssay({
        title: data.title.trim(),
        content: data.content.trim(),
        year: data.year,
        categoryId: data.categoryId,
      });

      showMessage.success(response.message);
      setIsOpen(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : err?.message;

      console.error(err);
      showMessage.error(errorMessage);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-indigo-100 font-medium text-sm cursor-pointer"
        title="Nova Redação de Referência"
      >
        <Plus size={16} />
        Nova Redação
      </button>

      <ModalCreateBase
        title="Nova Redação de Referência"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreateTrigger}
        isLoading={loading}
      >
        <EssaysReferenceCreateForm
          initialData={{
            title: "",
            content: "",
            year: new Date().getFullYear(),
            pdf_url: null,
            categoryId: 0,
          }}
          formRef={formRef}
          onSubmit={onFormSubmit}
        />
      </ModalCreateBase>
    </>
  );
}