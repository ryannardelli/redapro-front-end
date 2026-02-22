import { useState, useMemo } from "react";
import { Trash2, Edit3, UserPlus, ShieldCheck, Plus, Search } from "lucide-react";
import { useProfile } from "@hooks/useProfile";

export function ProfileBuilder() {
  const { stateProfile } = useProfile();
  const backendProfiles = stateProfile.profiles || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [newProfileName, setNewProfileName] = useState("");
  const [profiles, setProfiles] = useState(backendProfiles);

  useMemo(() => setProfiles(backendProfiles), [backendProfiles]);

  const addProfile = () => {
    if (!newProfileName.trim()) return;
    const profile = {
      id: Date.now(),
      name: newProfileName,
      description: "Descrição padrão",
      permissions: ["Acesso Básico"],
      users: 0
    };
    setProfiles([...profiles, profile]);
    setNewProfileName("");
  };

  const deleteProfile = (id: number) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  const filteredProfiles = profiles.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen font-sans text-gray-800">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Gerenciador de Perfis</h1>
          <p className="text-gray-500">Controle níveis de acesso para Administradores, Corretores e Alunos.</p>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <input
              type="text"
              placeholder="Buscar perfil..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
            />
          </div>
        </div>
      </header>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Nome do novo perfil (ex: Supervisor)"
          value={newProfileName}
          onChange={(e) => setNewProfileName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addProfile()}
          className="flex-1 bg-gray-50 border-none p-2 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none text-gray-700"
        />
        <button
          onClick={addProfile}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={18} /> Criar Perfil
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Perfil</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Descrição</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-center">Usuários Ativos</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredProfiles.map((profile) => (
              <tr key={profile.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    profile.name === 'Administrador' ? 'bg-purple-100 text-purple-600' :
                    profile.name === 'Corretor' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-bold text-gray-700">{profile.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-600 font-medium">
                  {profile.description || "Sem descrição"}
                </td>
                <td className="px-6 py-4 text-center text-gray-600 font-medium">
                  {profile.users || 0}
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

        {filteredProfiles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400">Nenhum perfil encontrado com esse nome.</p>
          </div>
        )}
      </div>
    </div>
  );
}