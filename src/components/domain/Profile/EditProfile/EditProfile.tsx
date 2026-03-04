import { useRef, useState } from "react";
import { Edit3 } from "lucide-react";

import { showMessage } from "../../../../adapters/showMessage";

import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";
import { ProfileEditForm } from "../ProfileEditForm";

import type { EditProfileData } from "schemas/Profile/EditProfileSchema";
import type { Profile } from "models/Profile";

import { useProfile } from "@hooks/useProfile";

interface EditProfileProps {
  profile: Profile;
}

export function EditProfile({ profile }: EditProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { updateProfile, stateProfile } = useProfile();
  const loading = stateProfile.loadingProfiles;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveTrigger = () => {
    if (!loading) {
      formRef.current?.requestSubmit();
    }
  };

  const onFormSubmit = async (data: EditProfileData) => {
    try {
      const response = await updateProfile(profile.id, {
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
        title="Editar"
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
      >
        <Edit3 size={18} />
      </button>

      <ModalEditBase
        title="Editar Perfil"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
        isLoading={loading}
      >
        <ProfileEditForm
          formRef={formRef}
          initialData={{
            name: profile.name,
            description: profile.description ?? "",
          }}
          onSubmit={onFormSubmit}
        />
      </ModalEditBase>
    </>
  );
}