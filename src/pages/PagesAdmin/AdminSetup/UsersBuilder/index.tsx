import { useState } from 'react';
import { Edit, Shield, UserPlus, MoreVertical, Search } from 'lucide-react';
import { useUsers } from '@hooks/useUsers';

export function UsersBuilder() {
  const { stateUser } = useUsers();
  const users = stateUser.users;
  console.log(users);
  
  // Exemplo de estado para popular a tabela
  // const [users] = useState([
  //   { id: 1, name: 'Ana Silva', email: 'ana.silva@empresa.com', role: 'Admin', status: 'Ativo', profile: 'Diretoria' },
  //   { id: 2, name: 'Lucas Rover', email: 'lucas.r@empresa.com', role: 'Editor', status: 'Ativo', profile: 'Marketing' },
  //   { id: 3, name: 'Beatriz Costa', email: 'biacosta@empresa.com', role: 'Viewer', status: 'Inativo', profile: 'Suporte' },
  // ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Header da Tela */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Gerenciamento de Usuários</h1>
          <p className="text-slate-500 mt-1">Administre permissões, perfis e acessos da plataforma.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all shadow-sm font-medium">
          <UserPlus size={18} />
          Novo Usuário
        </button>
      </div>

      {/* Barra de Filtros */}
      <div className="bg-white p-4 rounded-t-xl border-x border-t border-slate-200 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nome ou email..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
        <select className="border border-slate-200 rounded-md px-4 py-2 text-slate-600 focus:outline-none">
          <option>Todos os Perfis</option>
          <option>Admin</option>
          <option>Editor</option>
        </select>
      </div>

      {/* Tabela de Usuários */}
      <div className="bg-white rounded-b-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Usuário</th>
              <th className="px-6 py-4 font-semibold">Permissão</th>
              <th className="px-6 py-4 font-semibold">Perfil Associado</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-900">{user.name}</span>
                    <span className="text-sm text-slate-500">{user.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className={user.role === 'Admin' ? 'text-amber-500' : 'text-slate-400'} />
                    <span className="text-slate-700 text-sm">{user.role}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {user.profile}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'Ativo' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    <span className="text-sm text-slate-600">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button title="Editar Usuário" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-all">
                      <Edit size={18} />
                    </button>
                    <button title="Mais opções" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}