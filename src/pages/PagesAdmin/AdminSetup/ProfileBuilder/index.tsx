import { useState } from "react";
import { Trash2, Edit3, UserPlus, ShieldCheck, Plus, Search } from "lucide-react";

export function ProfileBuilder() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Admin", permissions: ["Full Access", "Finance"], users: 3 },
    { id: 2, name: "Editor", permissions: ["Content", "Media"], users: 12 },
    { id: 3, name: "Viewer", permissions: ["Read Only"], users: 45 },
  ]);
  const [newProfile, setNewProfile] = useState("");

  const addProfile = () => {
    if (!newProfile.trim()) return;
    const profile = {
      id: Date.now(),
      name: newProfile,
      permissions: ["Novo Acesso"],
      users: 0,
    };
    setProfiles([...profiles, profile]);
    setNewProfile("");
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header e Busca */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Gerenciador de Perfis</h1>
          <p className="text-gray-500">Controle níveis de acesso e atribuições da plataforma.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <input
              type="text"
              placeholder="Buscar perfil..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-sm">
            <Plus size={18} /> Novo Perfil
          </button>
        </div>
      </header>

      {/* Input de Criação Rápida */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Nome do novo cargo (ex: Gerente de Vendas)"
          value={newProfile}
          onChange={(e) => setNewProfile(e.target.value)}
          className="flex-1 bg-gray-50 border-none p-2 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none text-gray-700"
        />
        <button
          onClick={addProfile}
          className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold transition-all"
        >
          Criar Rápido
        </button>
      </div>

      {/* Tabela de Perfis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Perfil</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Permissões</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-center">Usuários</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {profiles.map((profile) => (
              <tr key={profile.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-bold text-gray-700">{profile.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {profile.permissions.map((perm, i) => (
                      <span key={i} className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
                        {perm}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-gray-600 font-medium">
                  {profile.users}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button title="Atribuir Usuário" className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <UserPlus size={18} />
                    </button>
                    <button title="Editar" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit3 size={18} />
                    </button>
                    <button 
                      onClick={() => deleteProfile(profile.id)}
                      title="Excluir" 
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {profiles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400">Nenhum perfil encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}