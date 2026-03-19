import { useState, type RefObject } from "react";
import { Search, User as UserIcon, Check } from "lucide-react";
import { useUsers } from "@hooks/useUsers";

interface AssignUserFormProps {
  formRef: RefObject<HTMLFormElement>;
  onSubmit: (data: { userId: number }) => void;
}

export function AssignUserForm({ formRef, onSubmit }: AssignUserFormProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const state = useUsers();
  const users = state.stateUser.users;
  console.log(users);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedId) {
      onSubmit({ userId: selectedId });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
        <input
          type="text"
          placeholder="Pesquisar usuários..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
      </div>

      <div className="max-h-[300px] overflow-y-auto rounded-xl border border-gray-100 divide-y divide-gray-50">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedId(user.id)}
              className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
                selectedId === user.id ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${selectedId === user.id ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                  <UserIcon size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-700">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              
              {selectedId === user.id && (
                <Check size={18} className="text-blue-600" />
              )}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-400 text-sm">
            Nenhum usuário encontrado.
          </div>
        )}
      </div>

      <input type="hidden" name="userId" value={selectedId || ""} />
    </form>
  );
}