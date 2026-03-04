import { useRef, useState } from "react";
import { Plus } from "lucide-react";

import { showMessage } from "../../../../adapters/showMessage";

import { ModalCreateBase } from "@components/ui/Modal/ModalCreateBase";
import { ProfileCreateForm } from "../ProfileCreateForm";
import type { NewProfileData } from "schemas/NewProfileSchema";
import { useProfile } from "@hooks/useProfile";

export function NewProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const { createProfile, stateProfile } = useProfile();
  const loading = stateProfile.loadingProfiles;

  const formRef = useRef<HTMLFormElement>(null);

  const handleCreateTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: NewProfileData) => {
    try {
      const response = await createProfile({
        name: data.name.trim(),
        description: data.description?.trim() || null,
      });

      showMessage.success(response.message);
      setIsOpen(false);
    } catch (err: any) {
      const errorMessage =
        err instanceof Error ? err.message : err?.message;

      console.error(err);
      showMessage.error(errorMessage);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-blue-100 font-medium text-sm cursor-pointer"
        title="Criar novo perfil"
      >
        <Plus size={16} />
        Criar Perfil
      </button>

      <ModalCreateBase
        title="Criar Novo Perfil"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreateTrigger}
        isLoading={loading}
      >
        <ProfileCreateForm
          initialData={{
            name: "",
            description: "",
          }}
          formRef={formRef}
          onSubmit={onFormSubmit}
        />
      </ModalCreateBase>
    </>
  );
}