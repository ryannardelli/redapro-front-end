import React, { useState, useRef } from "react";
import { Camera, X, Save, User, Mail } from "lucide-react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

export function EditProfileModal({ isOpen, onClose, user }: EditProfileModalProps) {
  const [name, setName] = useState(user?.name || "");
  const [preview, setPreview] = useState(user?.pictureUrl || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Aqui você chamaria sua API ou Função do useAuth para atualizar
    console.log("Salvando:", { name, preview });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-slate-800">Editar Perfil</h2>
            <p className="text-xs text-slate-400 font-medium">Atualize suas informações pessoais</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
          >
            <X size={20} className="text-slate-400 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* Avatar Upload - UX: Grande área de clique e feedback visual */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-4 ring-purple-50 shadow-inner">
                <img
                  src={preview || `https://ui-avatars.com/api/?name=${name}&background=6366f1&color=fff`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  alt="Preview"
                />
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-2 -right-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-2xl shadow-xl transition-all hover:scale-110 active:scale-90"
                title="Alterar foto"
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

          {/* Form Fields - UI: Inputs limpos e ícones de contexto */}
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome de Exibição</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-50 outline-none transition-all font-bold text-slate-700 placeholder:font-normal"
                  placeholder="Seu nome"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex justify-between">
                E-mail 
                <span className="text-[9px] text-amber-500 lowercase font-bold bg-amber-50 px-2 rounded">Apenas leitura</span>
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

        {/* Footer - UX: Ações claras e destrutiva/construtiva separadas */}
        <div className="px-8 py-6 bg-slate-50/80 border-t border-slate-100 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-3.5 rounded-2xl text-sm font-bold text-slate-500 hover:bg-white hover:text-slate-700 border border-transparent hover:border-slate-200 transition-all active:scale-95"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSave}
            className="flex-[1.5] flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg shadow-purple-200 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <Save size={18} /> Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}