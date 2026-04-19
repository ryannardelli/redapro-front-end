import { useRef, useState } from "react";
import { Camera, User, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditUserSchema, type UserEditFormData } from "schemas/User/EditUserSchema";
import type { UpdateUserPayload } from "models/User";
import { useUsers } from "@hooks/useUsers";
import { showMessage } from "adapters/showMessage";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";

interface UserEditFormProps {
  user: UpdateUserPayload;
  onSubmit: (data: UserEditFormData) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}

export function UserEditForm({ user, onSubmit, formRef }: UserEditFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadProfilePicture, stateUser } = useUsers();

  const [file, ] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<UserEditFormData>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      name: user?.name || "",
      pictureUrl: user?.pictureUrl || ""
    }
  });

  const preview = watch("pictureUrl");
  const name = watch("name");

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) return;

  try {
    const response = await uploadProfilePicture(file);

    setValue("pictureUrl", response.url);

  } catch (error) {
    console.error(error);
  }
};

  const handleFormSubmit = async (data: UserEditFormData) => {
    try {
      await onSubmit(data);

      if (file) {
        const response = await uploadProfilePicture(file);

        showMessage.success(response.message);
      }

    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao atualizar perfil";

      showMessage.error(message);
    }
  };

  return (
    <>
      {stateUser.loadingUsers && <SpinnerLoading />}
      <form
        ref={formRef}
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-8"
      >

        <div className="space-y-8">
          <div className="flex flex-col items-center">
            <div className="relative group">

              <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-4 ring-purple-50 shadow-inner">
                <img
                  src={
                    preview ||
                    `https://ui-avatars.com/api/?name=${name}&background=6366f1&color=fff`
                  }
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  alt="Preview"
                />
              </div>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute cursor-pointer -bottom-2 -right-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-2xl shadow-xl transition-all hover:scale-110 active:scale-90"
              >
                <Camera size={20} />
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />

            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Nome de Exibição
              </label>

              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  {...register("name")}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-50 outline-none transition-all font-bold text-slate-700 placeholder:font-normal"
                  placeholder="Seu nome"
                />
              </div>

              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex justify-between">
                E-mail
                <span className="text-[9px] text-amber-500 lowercase font-bold bg-amber-50 px-2 rounded">
                  Apenas leitura
                </span>
              </label>

              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />

                <input
                  type="email"
                  disabled
                  value={user?.email}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 cursor-not-allowed text-slate-400 font-medium opacity-70"
                />
              </div>
            </div>

          </div>
        </div>

      </form>
    </>
  );
}