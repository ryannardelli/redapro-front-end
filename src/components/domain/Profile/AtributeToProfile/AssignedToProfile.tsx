import { useRef, useState } from "react";
import { UserPlus } from "lucide-react";

import { showMessage } from "../../../../adapters/showMessage";
import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";

import type { Profile } from "models/Profile";
import { useProfile } from "@hooks/useProfile";
import { AssignUserForm } from "../AssignUserForm";

interface AssignedToProfileProps {
  profile: Profile;
}

export function AssignedToProfile({ profile }: AssignedToProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { stateProfile } = useProfile(); 
  const loading = stateProfile.loadingProfiles;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: { userId: number }) => {
    try {
      // Exemplo de chamada: 
      // await assignUserToProfile(profile.id, data.userId);
      
      showMessage.success(`Usuário atribuído ao perfil ${profile.name} com sucesso!`);
      setIsOpen(false);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao atribuir usuário.";

      console.error(err);
      showMessage.error(errorMessage);
    }
  };

  return (
    <>
      <button
        title="Atribuir Usuário"
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition cursor-pointer"
      >
        <UserPlus size={18} />
      </button>

      <ModalEditBase
        title="Atribuir Usuário ao Perfil"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
        isLoading={loading}
      >
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            Selecione o usuário que deseja vincular ao perfil: 
            <strong className="ml-1 text-gray-700">{profile.name}</strong>
          </p>
        </div>

        <AssignUserForm
          formRef={formRef}
          onSubmit={onFormSubmit}
        />
      </ModalEditBase>
    </>
  );
}