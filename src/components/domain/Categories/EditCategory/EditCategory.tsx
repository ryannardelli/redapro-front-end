import { useRef, useState } from "react";
import { Pencil } from "lucide-react";

import { showMessage } from "../../../../adapters/showMessage";

import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";

import type { EditCategoryData } from "schemas/Category/EditCategorySchema";
import type { Category } from "models/Category";

import { useCategory } from "@hooks/useCategory";
import { CategoryEditForm } from "../CategoryEditForm";

interface EditCategoryProps {
  category: Category;
}

export function EditCategory({ category }: EditCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { update_category, stateCategory } = useCategory();
  const loading = stateCategory.loading;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: EditCategoryData) => {
    try {
      const response = await update_category(category.id, {
        name: data.name.trim(),
        description: data.description?.trim() || undefined,
      });

      showMessage.success(response.message);
      setIsOpen(false);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";

      console.error(err);
      showMessage.error(errorMessage);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        title="Editar"
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all border border-transparent hover:border-indigo-100 cursor-pointer"
      >
        <Pencil size={18} />
      </button>

      <ModalEditBase
        title="Editar Categoria"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
        isLoading={loading}
      >
        <CategoryEditForm
          formRef={formRef}
          initialData={{
            name: category.name,
            description: category.description ?? "",
          }}
          onSubmit={onFormSubmit}
        />
      </ModalEditBase>
    </>
  );
}