import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  GraduationCap,
  CheckCircle2,
  Home,
  Settings,
  User,
  FileText,
  Calendar,
  Layout,
  UserCheck,
  BookOpen,
  HelpCircle,
  PenLine
} from "lucide-react";

import { ProfileTabs } from "@components/ui/ProfileTabs";
import { useProfile } from "@hooks/useProfile";
import type { Menu } from "models/Menu";
import type { Profile } from "models/Profile";
import { ListLoading } from "@components/ui/Loading/ListLoading";

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

export function MenuBuilder() {
  const { stateProfile, loadMenusByProfile } = useProfile();

  const profiles: Profile[] = stateProfile.profiles;
  const backendMenus: Menu[] = stateProfile.menus;

  console.log(backendMenus);

  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [activeMenus, setActiveMenus] = useState<Record<number, Menu[]>>({});
  const [lastSavedMenus, setLastSavedMenus] = useState<Record<number, Menu[]>>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (activeTab) {
      loadMenusByProfile(activeTab);
    }
  }, [activeTab, loadMenusByProfile]);

  useEffect(() => {
    if (!activeTab) return;

    const formattedMenus: Menu[] = backendMenus.map(menu => ({
      id: String(menu.id),
      label: menu.name,
      route: menu.route,
      iconName: menu.icon as IconName
    }));

    setActiveMenus(prev => ({ ...prev, [activeTab]: [] }));
    setLastSavedMenus(prev => ({ ...prev, [activeTab]: formattedMenus }));
  }, [backendMenus, activeTab]);

  const profileTabs = useMemo(() => {
    return profiles.map(profile => ({
      value: profile.id,
      label: profile.name,
      icon:
        profile.name === "Administrador" ? <Settings size={18} /> :
        profile.name === "Corretor" ? <UserCheck size={18} /> :
        <GraduationCap size={18} />
    }));
  }, [profiles]);

  useEffect(() => {
    if (profiles.length && activeTab === null) {
      setActiveTab(profiles[0].id);
    }
  }, [profiles, activeTab]);

  const currentMenus = activeTab ? activeMenus[activeTab] || [] : [];
  const hasActiveMenu = currentMenus.length === 1;

  const hasChanges =
    activeTab !== null &&
    JSON.stringify(currentMenus) !== JSON.stringify(lastSavedMenus[activeTab]);

  const toggleMenu = (menu: Menu) => {
    if (!activeTab) return;

    const isAlreadyActive = currentMenus.some(m => m.route === menu.route);

    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: isAlreadyActive
        ? []
        : [{
            id: String(menu.id),
            label: menu.name,
            route: menu.route,
            iconName: menu.icon as IconName
          }]
    }));
  };

  const updateIcon = (route: string, newIcon: IconName) => {
    if (!activeTab) return;

    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).map(menu =>
        menu.route === route ? { ...menu, iconName: newIcon } : menu
      )
    }));
  };

  const updateLabel = (route: string, newLabel: string) => {
    if (!activeTab) return;

    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).map(menu =>
        menu.route === route ? { ...menu, label: newLabel } : menu
      )
    }));
  };

  const saveMenus = async () => {
    if (!activeTab) return;

    try {
      setIsSaving(true);
      setLastSavedMenus(prev => ({ ...prev, [activeTab]: currentMenus }));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-slate-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-slate-900">Customização de Menu</h1>
        <p className="text-slate-500 text-lg">
          Apenas uma funcionalidade pode ficar ativa por perfil.
        </p>
      </header>

      {activeTab !== null && (
        <ProfileTabs<number>
          tabs={profileTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      )}
      
     <section className="space-y-4">
        {stateProfile.loadingMenus ? (
          <div className="flex items-center justify-center py-20">
            <ListLoading text="Carregando menus..." />
          </div>
        ) : (
          backendMenus.map((menu) => {
            const activeItem = currentMenus.find(m => m.route === menu.route);
            const isActive = !!activeItem;
            const isDisabled = hasActiveMenu && !isActive;

            return (
              <div
                key={menu.route}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 bg-white ${
                  isActive
                    ? "border-blue-500 ring-4 ring-blue-50"
                    : isDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 flex-1">
                    {React.createElement(
                      AVAILABLE_ICONS[
                        (activeItem?.iconName || menu.icon) as IconName
                      ] || HelpCircle,
                      { size: 22 }
                    )}

                    <div className="flex-1">
                      {isActive ? (
                        <div className="relative flex items-center group/name">
                          <input
                            type="text"
                            value={activeItem?.label}
                            onChange={(e) =>
                              updateLabel(menu.route, e.target.value)
                            }
                            className="font-bold bg-transparent border-b border-blue-200 focus:border-blue-500 outline-none pr-6 w-full max-w-[250px]"
                          />
                          <PenLine
                            size={14}
                            className="absolute right-0 text-slate-300 opacity-0 group-hover/name:opacity-100"
                          />
                        </div>
                      ) : (
                        <p className="font-bold">{menu.name}</p>
                      )}

                      <p className="text-xs text-slate-400">{menu.route}</p>
                    </div>
                  </div>

                  <button
                    disabled={isDisabled}
                    onClick={() => toggleMenu(menu)}
                    className="transition-transform active:scale-90"
                  >
                    {isActive ? (
                      <CheckCircle2 className="text-blue-500" />
                    ) : (
                      <Plus />
                    )}
                  </button>
                </div>

                {isActive && (
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {(Object.keys(AVAILABLE_ICONS) as IconName[]).map(icon => (
                      <button
                        key={icon}
                        onClick={() => updateIcon(menu.route, icon)}
                        className={`p-2 rounded-lg border ${
                          activeItem?.iconName === icon
                            ? "bg-blue-50 border-blue-300 text-blue-600"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {React.createElement(AVAILABLE_ICONS[icon], { size: 18 })}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      <button
        onClick={saveMenus}
        disabled={!hasChanges || isSaving}
        className="mt-8 w-full bg-blue-600 py-4 rounded-2xl font-bold text-white
                   hover:bg-blue-500 disabled:opacity-50"
      >
        {isSaving ? "Salvando..." : "Salvar alterações"}
      </button>
    </div>
  );
}