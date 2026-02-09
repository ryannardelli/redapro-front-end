import React, { useState, type ChangeEvent } from 'react';
import { Search, Bell, Menu, ChevronDown, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface HeaderNavProps {
  onSearch?: (term: string) => void;
  userName?: string;
  userRole?: string;
  onToggleSidebar: () => void;
}

export function HeaderNav({ 
  onSearch, 
  userName = 'Usuário', 
  userRole = 'Estudante', 
  onToggleSidebar 
}: HeaderNavProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [hasNotifications] = useState<boolean>(true);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const { logout, state} = useAuth();
  const user = state.user;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-6 flex items-center justify-between">
      
      <div className="flex items-center flex-1">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors mr-2"
        >
          <Menu size={24} />
        </button>

        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            className="w-full pl-11 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm outline-none"
            placeholder="Buscar menus ou funções..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          
          {searchTerm.length > 1 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl p-2 animate-in fade-in slide-in-from-top-1">
              <p className="text-[10px] font-bold text-gray-400 px-3 py-1 uppercase tracking-wider">Resultados rápidos</p>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-indigo-50 rounded-lg transition-colors">Minhas Redações</button>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-indigo-50 rounded-lg transition-colors">Nova Redação</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3 md:space-x-6">
        <div className="relative">
          <button className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition-all relative cursor-pointer">
            <Bell size={22} />
            {hasNotifications && (
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            )}
          </button>
        </div>


        <div className="h-8 w-[1px] bg-gray-100 hidden sm:block"></div>
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 cursor-pointer"
          >
            <div className="relative">
              <img
                src={user?.pictureUrl || "https://ui-avatars.com/api/?name=" + user?.name}
                alt="Avatar"
                className="rounded-full w-9 h-9 object-cover ring-2 ring-white shadow-sm"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="hidden lg:block text-left">
              <p className="text-sm font-bold text-gray-800 leading-none">{userName}</p>
              <p className="text-[11px] text-gray-500 font-medium mt-1">{userRole}</p>
            </div>
            
            <ChevronDown size={16} className={`text-gray-400 transition-transform hidden sm:block ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <>
              <div className="fixed inset-0 z-[-1]" onClick={() => setIsProfileOpen(false)}></div>
              
              <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 animate-in zoom-in-95 duration-200 origin-top-right">
                <div className="px-4 py-2 border-b border-gray-50 mb-2 md:hidden">
                  <p className="text-sm font-bold text-gray-800">{userName}</p>
                  <p className="text-xs text-gray-500">{userRole}</p>
                </div>
                
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <User size={18} /> Meu Perfil
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <Settings size={18} /> Configurações
                </button>
                
                <div className="h-[1px] bg-gray-50 my-2 mx-4"></div>
                
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 font-semibold transition-colors"
                  onClick={logout}
                >
                  <LogOut size={18} /> Sair da conta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}