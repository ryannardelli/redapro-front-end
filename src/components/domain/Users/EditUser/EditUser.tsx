import { useState, useRef } from "react";
import { ModalEditBase } from "@components/ui/Modal/ModalEditBase";
import { UserEditForm } from "../UserEditForm/UserEditForm";
import { Settings } from "lucide-react";
import { useUsers } from "@hooks/useUsers";
import { showMessage } from "adapters/showMessage";

export function EditUser({ user }) {

  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { updateUser } = useUsers();

  const handleSaveTrigger = () => {
    formRef.current?.requestSubmit();
  };

  const onSubmit = async (data) => {
  console.log("Dados enviados pelo formulário:", data);

  const payload: any = {
    name: data.name
  };

  if (data.pictureUrl) {
    payload.pictureUrl = data.pictureUrl;
  }

  try {
    const response = await updateUser(user.id, payload);

    showMessage.success(response.message);
    setIsOpen(false);

  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : err?.message;

    console.log(err);
    showMessage.error(errorMessage);
  }
};

  return (
    <>
       <button 
          onClick={() => setIsOpen(true)}
          className="md:absolute md:top-8 md:right-8 cursor-pointer flex items-center gap-2 px-5 py-2.5 text-xs font-black text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all hover:shadow-md active:scale-95"
        >
          <Settings size={16} /> 
          <span>CONFIGURAÇÕES</span>
        </button>

      <ModalEditBase
        title="Editar Perfil"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveTrigger}
      >
        <UserEditForm
          user={user}
          formRef={formRef}
          onSubmit={onSubmit}
          initialData={{
            name: user.name,
            pictureUrl: user.pictureUrl,
          }}
        />
      </ModalEditBase>
    </>
  );
}