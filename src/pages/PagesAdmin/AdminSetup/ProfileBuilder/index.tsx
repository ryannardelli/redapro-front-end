import { useState, useEffect, useMemo } from "react";
import {
  Trash2,
  Edit3,
  UserPlus,
  ShieldCheck,
  Search
} from "lucide-react";

import { useProfile } from "@hooks/useProfile";
import { ListLoading } from "@components/ui/Loading/ListLoading";
import { NewProfile } from "@components/domain/Profile/NewProfile";

const profileColorMap: Record<string, string> = {
  Administrador: "bg-purple-100 text-purple-600",
  Corretor: "bg-blue-100 text-blue-600",
  Estudante: "bg-green-100 text-green-600",
};

export function ProfileBuilder() {
  const { stateProfile } = useProfile();
  const backendProfiles = stateProfile.profiles || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [profiles, setProfiles] = useState(backendProfiles);

  useEffect(() => {
    setProfiles(backendProfiles);
  }, [backendProfiles]);

  const deleteProfile = (id: number) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  const filteredProfiles = useMemo(() => {
    return profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [profiles, searchTerm]);

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen text-gray-800">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Gerenciador de Perfis
          </h1>
          <p className="text-gray-500">
            Controle níveis de acesso para Administradores, Corretores e Alunos.
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <input
              type="text"
              placeholder="Buscar perfil..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            />
          </div>

          <NewProfile />
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                Perfil
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                Descrição
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-center">
                Ativo
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {stateProfile.loadingProfiles ? (
              <tr>
                <td colSpan={4}>
                  <div className="flex justify-center py-20">
                    <ListLoading text="Carregando perfis..." />
                  </div>
                </td>
              </tr>
            ) : (
              filteredProfiles.map(profile => {
                const profileColors =
                  profileColorMap[profile.name] ??
                  "bg-slate-100 text-slate-600";

                return (
                  <tr
                    key={profile.id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${profileColors}`}>
                        <ShieldCheck size={20} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-700">
                          {profile.name}
                        </span>

                        {profile.system && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-purple-100 text-purple-700">
                            Sistema
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {profile.description || "Sem descrição"}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {profile.active ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          Ativo
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                          Inativo
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          title="Atribuir Usuário"
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg"
                        >
                          <UserPlus size={18} />
                        </button>

                        <button
                          title="Editar"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          <Edit3 size={18} />
                        </button>

                        <button
                          onClick={() => deleteProfile(profile.id)}
                          disabled={profile.system}
                          title={
                            profile.system
                              ? "Perfis do sistema não podem ser excluídos"
                              : "Excluir"
                          }
                          className={`p-2 rounded-lg transition-colors ${
                            profile.system
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                          }`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {filteredProfiles.length === 0 && !stateProfile.loadingProfiles && (
          <div className="py-20 text-center text-gray-400">
            Nenhum perfil encontrado.
          </div>
        )}
      </div>
    </div>
  );
}