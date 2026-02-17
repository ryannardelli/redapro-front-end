import { useState } from 'react';
import { Bell, Menu, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '@hooks/useAuth';
import { SearchInput } from '@components/domain/Header/SearchInput';
import { useNavigate } from 'react-router';
import { ContainerHeaderSidebar } from '@components/ui/Header/ContainerHeaderSidebar/ContainerHeaderSidebar';
import { ContainerSubHeaderSidebar } from '@components/ui/Header/ContainerSubHeaderSidebar';
import { MenuBurgerSidebar } from '@components/ui/Button/MenuBurgerSidebar';
import { NotificationButton } from '@components/domain/Header/NotificationButton';
import { ProfileButton } from '@components/domain/Header/ProfileButton';
import { formatRole } from 'utils/formatRole';

interface HeaderNavProps {
  onSearch?: (term: string) => void;
  userName?: string;
  userRole?: string;
  onToggleSidebar: () => void;
}

export function HeaderNav({  
  userName = 'Usuário', 
  userRole = 'Estudante', 
  onToggleSidebar 
}: HeaderNavProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [hasNotifications] = useState<boolean>(true);
  const navigate = useNavigate();

  const { logout, state} = useAuth();
  const user = state.user;

  const searchResults = [
  {
    id: "essays",
    label: "Minhas Redações",
    onSelect: () => navigate("/essays-corrector")
  },
  {
    id: "new-essay",
    label: "Nova Redação",
    onSelect: () => navigate("/essays/new")
  }
];

  return (
   <ContainerHeaderSidebar>
      <ContainerSubHeaderSidebar>
        <MenuBurgerSidebar
          icon={<Menu size={24} />}
          onClick={onToggleSidebar}
          hideOn="desktop"
          label="Abrir menu"
        />

        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar menus ou funções..."
          results={searchResults}
          hiddenOnMobile
        />
      </ContainerSubHeaderSidebar>

      <div className="flex items-center space-x-3 md:space-x-6">
        <div className="relative">
          <NotificationButton
            icon={<Bell size={22} />}
            hasNotification={hasNotifications}
            label="Abrir notificações"
          />
        </div>

        <div className="h-8 w-[1px] bg-gray-100 hidden sm:block"></div>
        <div className="relative">

          <ProfileButton
            name={user?.name || "Usuário"}
            role={formatRole(user?.role) || "Admin"}
            avatarUrl={user?.pictureUrl || `https://ui-avatars.com/api/?name=${user?.name}`}
            isOpen={isProfileOpen}
            onClick={() => setIsProfileOpen(prev => !prev)}
          />

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
                
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 font-semibold transition-colors cursor-pointer"
                  onClick={logout}
                >
                  <LogOut size={18} /> Sair da conta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </ContainerHeaderSidebar>
  );
}