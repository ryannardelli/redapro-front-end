import { useState } from "react";
import {
  Home,
  Settings,
  User,
  FileText,
  Calendar,
  BookOpen,
  HelpCircle,
  PenLine,
  Layout,
  GraduationCap,
  X
} from "lucide-react";

import { useAuth } from "@hooks/useAuth";
import { useProfile } from "@hooks/useProfile";
import { formatRole } from "utils/formatRole";
import { RouterLinks } from "@components/ui/Links/RouterLinks";
import { HeaderNav } from "../HeaderNav";
import { Logout } from "@components/domain/Auth/Logout";

import redaProLogo from "../../../assets/img/redapro.png";
import { MenuSkeletonList } from "@components/ui/Loading/MenuSkeleton/MenuSkeletonList";

const AVAILABLE_ICONS = {
  Home,
  Settings,
  User,
  FileText,
  Calendar,
  BookOpen,
  HelpCircle,
  PenLine,
  Layout,
  GraduationCap
};

type IconName = keyof typeof AVAILABLE_ICONS;

export function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const { state } = useAuth();
  const { stateProfile } = useProfile();

  const user = state.user;
  const menus = stateProfile.menusByLoggedUser || [];

  return (
    <div className="bg-gray-50">
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white
        border-r border-gray-100 flex flex-col
        transition-transform duration-300 ease-in-out
        shadow-xl md:shadow-none
        ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >

        <div className="p-6 flex items-center justify-between">
          <RouterLinks href="/" className="flex items-center gap-3 group">
            <img
              src={redaProLogo}
              alt="RedaPro"
              className="w-10 h-10 rounded-xl shadow-md"
            />
            <span className="text-xl font-black text-indigo-600 tracking-tight">
              RedaPro
            </span>
          </RouterLinks>

          <button
            onClick={() => setSideBarOpen(false)}
            className="md:hidden p-2 text-gray-400"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 mt-6">
          <div className="space-y-1">
            {stateProfile.loadingMenusByLoggedUser ? (
              <MenuSkeletonList items={menus.length} />
            ) : menus.length === 0 ? (
              <p className="px-4 text-sm text-gray-400 px-4">
                Nenhum menu disponível
              </p>
            ) : (
              menus.map(menu => {
                const Icon =
                  AVAILABLE_ICONS[menu.icon as IconName] || HelpCircle;

                return (
                  <RouterLinks
                    key={menu.id}
                    href={menu.route}
                    className="flex items-center gap-3 px-4 py-3
                              text-sm font-semibold text-gray-600
                              rounded-xl transition-all
                              hover:bg-indigo-50 hover:text-indigo-600
                              group"
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                    {menu.name}
                  </RouterLinks>
                );
              })
            )}
          </div>
        </nav>

        <Logout />
      </aside>

      <div className={`md:ml-64 transition-all`}>
        <HeaderNav
          onToggleSidebar={() => setSideBarOpen(true)}
          userName={user?.name}
          userRole={formatRole(user?.role)}
        />

        <main className="p-6 md:p-10">
          <div className="max-w-7xl mx-auto" />
        </main>
      </div>
    </div>
  );
}