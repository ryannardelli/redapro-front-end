import { useState } from "react";
import { Bell, Menu, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@hooks/useAuth";
import { SearchInput } from "@components/domain/Header/SearchInput";
import { useNavigate } from "react-router";
import { ContainerHeaderSidebar } from "@components/ui/Header/ContainerHeaderSidebar/ContainerHeaderSidebar";
import { ContainerSubHeaderSidebar } from "@components/ui/Header/ContainerSubHeaderSidebar";
import { MenuBurgerSidebar } from "@components/ui/Button/MenuBurgerSidebar";
import { NotificationButton } from "@components/domain/Header/NotificationButton";
import { NotificationPanel } from "@components/domain/Header/NotificationPanel";
import { ProfileButton } from "@components/domain/Header/ProfileButton";
import { useNotifications } from "@hooks/useNotification";
import { useProfile } from "@hooks/useProfile";

interface HeaderNavProps {
  onToggleSidebar: () => void;
}

export function HeaderNav({ onToggleSidebar }: HeaderNavProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { logout, state } = useAuth();
  const { stateProfile } = useProfile();
  const user = state.user;
  const menus = stateProfile.menusByLoggedUser;

  console.log(menus);

  const {
    notifications,
    hasUnread,
    isOpen: isNotificationOpen,
    openPanel,
    readAll,
    clearAll
  } = useNotifications(user?.id);

  const filteredMenus = menus
    .filter(menu =>
      menu.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(menu => ({
      id: menu.id,
      label: menu.name,
      icon: menu.icon,
      route: menu.route
    }));

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
          results={filteredMenus}
          hiddenOnMobile
        />
      </ContainerSubHeaderSidebar>

      <div className="flex items-center space-x-3 md:space-x-6">
        <div className="relative">
          <NotificationButton
            icon={<Bell size={22} />}
            hasNotification={hasUnread}
            label="Abrir notificações"
            onClick={openPanel}
          />

          {isNotificationOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={openPanel}
              />

              <NotificationPanel
                notifications={notifications}
                onReadAll={readAll}
                onClear={clearAll}
              />
            </>
          )}
        </div>

        <div className="h-8 w-[1px] bg-gray-100 hidden sm:block" />

        <div className="relative">
          <ProfileButton
            name={user?.name || "Usuário"}
            role={user?.profile.name}
            avatarUrl={
              user?.pictureUrl ||
              `https://ui-avatars.com/api/?name=${user?.name}`
            }
            isOpen={isProfileOpen}
            onClick={() => setIsProfileOpen(prev => !prev)}
          />

          {isProfileOpen && (
            <>
              <div
                className="fixed inset-0 z-[-1]"
                onClick={() => setIsProfileOpen(false)}
              />

              <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-indigo-50">
                  <User size={18} /> Meu Perfil
                </button>

                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-indigo-50">
                  <Settings size={18} /> Configurações
                </button>

                <div className="h-[1px] bg-gray-50 my-2 mx-4" />

                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 font-semibold"
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