import {
  Edit,
  Shield,
  MoreVertical,
  Search,
  User as UserIcon,
  Mail,
  Filter
} from "lucide-react";
import { useUsers } from "@hooks/useUsers";
import { Skeleton } from "@components/ui/Loading/Skeleton";
import { ListLoading } from "@components/ui/Loading/ListLoading";

export function UsersBuilder() {
  const { stateUser } = useUsers();
  const { users, loadingUsers } = stateUser;

  const getRoleStyles = (role: string) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "student":
      case "aluno":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Gerenciamento de Usuários
          </h1>
          <p className="text-slate-500 text-sm">
            Total de {users.length} usuários cadastrados no sistema.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-white flex flex-wrap gap-3 items-center justify-between">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por nome, email ou cargo..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 rounded-lg transition-all outline-none text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors text-sm font-medium">
            <Filter size={16} />
            Filtros
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                <th className="px-6 py-4">Usuário</th>
                <th className="px-6 py-4">Nível de Acesso</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {loadingUsers ? (
                 <tr>
                    <td colSpan={4}>
                      <div className="flex items-center justify-center py-20">
                        <ListLoading text="Carregando usuários..." />
                      </div>
                    </td>
                  </tr>
              ) : users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border border-indigo-200 shadow-sm">
                          {user.pictureUrl ? (
                            <img src={user.pictureUrl} alt="" className="h-full w-full rounded-full object-cover" />
                          ) : (
                            <span className="font-bold text-xs">{user.name.substring(0, 2).toUpperCase()}</span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-700 leading-tight">{user.name}</span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Mail size={12} /> {user.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${getRoleStyles(user.role)}`}>
                        <Shield size={12} />
                        {user.role === "admin" ? "Administrador" : "Aluno"}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-600">Ativo</span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        <button title="Editar" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                          <Edit size={18} />
                        </button>
                        <button title="Mais opções" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-slate-50 p-4 rounded-full mb-4">
                         <UserIcon size={40} className="text-slate-300" />
                      </div>
                      <h3 className="text-lg font-medium text-slate-900">Nenhum usuário</h3>
                      <p className="text-slate-500 max-w-xs mx-auto">
                        Não encontramos resultados para sua busca ou ainda não há cadastros.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
           <span>Exibindo {users.length} usuários</span>
           <div className="flex gap-2">
              <button className="px-3 py-1 border rounded bg-white disabled:opacity-50">Anterior</button>
              <button className="px-3 py-1 border rounded bg-white hover:bg-slate-50 transition-colors">Próximo</button>
           </div>
        </div>
      </div>
    </div>
  );
}