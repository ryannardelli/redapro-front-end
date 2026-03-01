import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router";
import {
  Home,
  Users,
  Menu,
  X,
  MenuIcon,
  BookOpen,
  Tags,
  UserCog,
  HelpCircle
} from "lucide-react";

import { Logout } from "@components/domain/Auth/Logout";
import { HeaderNav } from "@components/layout/HeaderNav";
import { useProfile } from "@hooks/useProfile";

import { MenuSkeletonList } from "@components/ui/Loading/MenuSkeleton/MenuSkeletonList";
import { useAuth } from "@hooks/useAuth";

const AVAILABLE_ICONS = {
  Home,
  Users,
  MenuIcon,
  BookOpen,
  Tags,
  UserCog
};

type IconName = keyof typeof AVAILABLE_ICONS;

export default function AdminSetupTemplate() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const { state } = useAuth();
  
   const user = state.user;
   const { stateProfile, loadMenusByLoggedUser } = useProfile();
   const menus = stateProfile.menusByLoggedUser;
  //  const menus: MenuType[] = stateProfile.loadingMenusByLoggedUser || [];

 useEffect(() => {
  if (!user?.profile.id) return;
  loadMenusByLoggedUser(user.profile.id);
}, []);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-100
        transform transition-transform duration-300
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 text-2xl font-bold border-b border-slate-800">
          Painel<span className="text-blue-400">Admin</span>
        </div>

        <nav className="mt-6">
          {stateProfile.loadingMenus ? (
            <MenuSkeletonList items={menus.length} />
          ) : menus.length === 0 ? (
            <p className="px-6 py-3 text-slate-400 text-sm">
              Nenhum menu encontrado.
            </p>
          ) : (
            <div className="px-3 space-y-1">
              {menus.map(menu => {
                const Icon =
                  AVAILABLE_ICONS[menu.icon as IconName] || HelpCircle;

                return (
                  <NavLink
                    key={menu.id}
                    to={menu.route}
                    end={menu.route === "/admin/setup"}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={20} />
                    {menu.name}
                  </NavLink>
                );
              })}
            </div>
          )}
        </nav>

        <Logout />
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <HeaderNav onToggleSidebar={toggleSidebar} />
        <section className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}