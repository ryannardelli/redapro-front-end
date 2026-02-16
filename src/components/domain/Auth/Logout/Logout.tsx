import { useAuth } from "@hooks/useAuth";
import { LogOut } from "lucide-react";

export function Logout() {
    const { logout } = useAuth();
    
    return(
         <div className="p-4 border-t border-gray-50 mt-auto">
          <button className="flex w-full items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
          onClick={logout}
          >
            <LogOut size={20} />
            Sair da Plataforma
          </button>
        </div>
    );
}