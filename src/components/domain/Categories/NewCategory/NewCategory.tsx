import { useRef, useState } from "react";
import { Plus } from "lucide-react";

import { useCategory } from "../../../../hooks/useCategory";
import { showMessage } from "../../../../adapters/showMessage";

import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";
import { CategoryCreateForm } from "../CategoryCreateForm";
import type { CategoryCreateData } from "schemas/CategoryNewSchema";

export function NewCategory() {
  const [isOpen, setIsOpen] = useState(false);

  const { createCategory, stateCategory } = useCategory();
  const loading = stateCategory.loading;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: CategoryCreateData) => {
    try {
      const response = await createCategory({
        name: data.name,
        description: data.description,
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
        title="Nova categoria"
      >
        <Plus size={16} />
        Nova Categoria
      </button>

      <ModalEditBase
        title="Nova Categoria"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
        isLoading={loading}
      >
        <CategoryCreateForm
          formRef={formRef}
          onSubmit={onFormSubmit}
        />
      </ModalEditBase>
    </>
  );
}