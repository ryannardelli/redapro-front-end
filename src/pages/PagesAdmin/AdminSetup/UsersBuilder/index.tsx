import { 
  Shield,
  Search,
  User as UserIcon,
  Mail,
  UserX,
  XCircle,
  Eye
} from "lucide-react";
import { useUsers } from "@hooks/useUsers";
import { ListLoading } from "@components/ui/Loading/ListLoading";
import { EmptyState } from "@components/feedback/EmptyState";
import { useState, useMemo } from "react";
import { DeleteUser } from "@components/domain/Users/DeleteUser";
import { toast } from "react-toastify";
import { showMessage } from "adapters/showMessage";
import { Dialog } from "@components/feedback/DialogConfirm/Dialog";

export function UsersBuilder() {
  const { stateUser, deleteUser } = useUsers();
  const { users, loadingUsers } = stateUser;
  const loading = stateUser.loadingUsers;

  const [search, setSearch] = useState("");

  const handleDelete = async (id: number) => {
      showMessage.dismiss();
  
      toast(Dialog, {
        data: "Tem certeza que deseja excluir este usuário?",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        onClose: async (props) => {
          const isConfirmed = props?.data === true || props === true;
  
          if (isConfirmed) {
            try {
              const responseDeleteUser = await deleteUser(id);
              showMessage.success(responseDeleteUser.message);
            } catch (err) {
              const errorMessage =
                err instanceof Error ? err.message : err?.message;
  
              console.error(err);
              showMessage.error(errorMessage);
            }
          }
        }
      });
    };

  const filteredUsers = useMemo(() => {
    if (!search) return users;
    const lowerSearch = search.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch) ||
        user.role.toLowerCase().includes(lowerSearch)
    );
  }, [search, users]);

  const getRoleStyles = (role: string) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "student":
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
              placeholder="Buscar nome..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 rounded-lg transition-all outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
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
                        {user.profile.name}
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

                       <button 
                          title="Ver mais" 
                          className="p-2 text-slate-400 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
                        >
                          <Eye size={18} />
                      </button>

                      <button 
                          title="Bloquear" 
                          className="p-2 text-slate-400 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
                        >
                          <XCircle size={18} />
                      </button>

                       <button 
                              title="Desativar" 
                              className="p-2 text-slate-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                            >
                              <UserX size={18} />
                       </button>

                        {user.profile.name == "Administrador" ? (
                          <div className="group/lock relative">
                            <div 
                              className="p-2 text-slate-300 cursor-help flex items-center justify-center bg-slate-100/50 rounded-lg"
                            >
                              <Shield size={18} className="opacity-70" />
                            </div>
                            
                            <div className="absolute right-0 bottom-full -mb-10 hidden group-hover/lock:block w-56 z-50">
                              <div className="bg-slate-800 text-white text-[11px] p-2 rounded-md shadow-lg border border-slate-700">
                                <p className="font-semibold mb-1 flex items-center gap-1">
                                  <Shield size={10} className="text-amber-400" /> Conta de Administrador
                                </p>
                                Esta conta possui privilégios administrativos e não pode ser removida para garantir a segurança do sistema.
                                <div className="absolute -bottom-1 right-3 w-2 h-2 bg-slate-800 rotate-45" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <DeleteUser
                              onDelete={() => handleDelete(user.id)}
                              loading={loading}
                              title="Excluir usuário"
                            />

                           
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center">
                     <EmptyState
                        icon={UserIcon}
                        title="Nenhum usuário encontrado."
                        description="Não encontramos resultados para sua busca ou ainda não há cadastros."
                      />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}