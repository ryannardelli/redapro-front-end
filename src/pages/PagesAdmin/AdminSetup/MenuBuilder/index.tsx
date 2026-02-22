import React, { useEffect, useMemo, useState } from "react";
import {
  Trash2,
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

/* -------------------------------- ICONES -------------------------------- */

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

/* --------------------------- MENUS DISPONIVEIS --------------------------- */

const DISPONIVEIS = {
  Corretor: [
    { label: "Início", route: "/", defaultIcon: "Home" as IconName },
    { label: "Correções de Redação", route: "/essays-corrector", defaultIcon: "FileText" as IconName },
    { label: "Agenda de Correções", route: "/schedules-corrector", defaultIcon: "Calendar" as IconName },
    { label: "Meu Perfil", route: "/my-profile", defaultIcon: "User" as IconName },
    { label: "Ajuda e Suporte", route: "/support", defaultIcon: "HelpCircle" as IconName }
  ],

  Estudante: [
    { label: "Início", route: "/", defaultIcon: "Home" as IconName },
    { label: "Minhas Redações", route: "/my-essays", defaultIcon: "FileText" as IconName },
    { label: "Enviar Redação", route: "/essay-upload", defaultIcon: "PenLine" as IconName },
    { label: "Modelos Nota 1000", route: "/models", defaultIcon: "BookOpen" as IconName },
    { label: "Agendamentos", route: "/calendar", defaultIcon: "Calendar" as IconName },
    { label: "Meu Perfil", route: "/my-profile", defaultIcon: "User" as IconName },
    { label: "Ajuda e Suporte", route: "/support", defaultIcon: "HelpCircle" as IconName }
  ]
} as const;

/* -------------------------------- TIPOS -------------------------------- */

interface BackendProfile {
  id: number;
  name: string;
  description: string;
}

interface MenuItem {
  id: string;
  label: string;
  route: string;
  iconName: IconName;
}

/* ------------------------------ COMPONENTE ------------------------------ */

export function MenuBuilder() {
  const { stateProfile } = useProfile();
  const profiles: BackendProfile[] = stateProfile.profiles;

  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [activeMenus, setActiveMenus] = useState<Record<number, MenuItem[]>>({});
  const [lastSavedMenus, setLastSavedMenus] = useState<Record<number, MenuItem[]>>({});
  const [isSaving, setIsSaving] = useState(false);
  
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

  const currentProfile = profiles.find(p => p.id === activeTab);
  const currentMenus = activeTab ? activeMenus[activeTab] || [] : [];
  const hasActiveMenu = currentMenus.length === 1;

  const hasChanges =
    activeTab !== null &&
    JSON.stringify(currentMenus) !==
      JSON.stringify(lastSavedMenus[activeTab]);

  const toggleMenu = (item: any) => {
    if (!activeTab) return;

    const isAlreadyActive = currentMenus.some(m => m.route === item.route);

    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: isAlreadyActive
        ? []
        : [
            {
              id: item.route,
              label: item.label,
              route: item.route,
              iconName: item.defaultIcon
            }
          ]
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

  const saveMenus = async () => {
    if (!activeTab) return;

    try {
      setIsSaving(true);

      await fetch("/api/profile-menus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileId: activeTab,
          menus: currentMenus.map(menu => ({
            label: menu.label,
            route: menu.route,
            icon: menu.iconName
          }))
        })
      });

      setLastSavedMenus(prev => ({
        ...prev,
        [activeTab]: currentMenus
      }));
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar menu.");
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

      {currentProfile &&
        DISPONIVEIS[currentProfile.name as keyof typeof DISPONIVEIS] && (
          <>
            <section className="space-y-4">
              {DISPONIVEIS[currentProfile.name as keyof typeof DISPONIVEIS].map(item => {
                const activeItem = currentMenus.find(m => m.route === item.route);
                const isActive = !!activeItem;
                const isDisabled = hasActiveMenu && !isActive;

                return (
                  <div
                    key={item.route}
                    className={`p-4 rounded-2xl border-2 transition-all bg-white ${
                      isActive
                        ? "border-blue-500 ring-4 ring-blue-50"
                        : isDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        {React.createElement(
                          AVAILABLE_ICONS[activeItem?.iconName || item.defaultIcon],
                          { size: 22 }
                        )}
                        <div>
                          <p className="font-bold">{item.label}</p>
                          <p className="text-xs text-slate-400">{item.route}</p>
                        </div>
                      </div>

                      <button
                        disabled={isDisabled}
                        onClick={() => toggleMenu(item)}
                      >
                        {isActive ? <CheckCircle2 /> : <Plus />}
                      </button>
                    </div>

                    {isActive && (
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {(Object.keys(AVAILABLE_ICONS) as IconName[]).map(icon => (
                          <button
                            key={icon}
                            onClick={() => updateIcon(item.route, icon)}
                            className={`p-2 rounded-lg border transition-all ${
                              activeItem.iconName === icon
                                ? "bg-blue-50 border-blue-300"
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
              })}
            </section>

            <button
              onClick={saveMenus}
              disabled={!hasChanges || isSaving}
              className="mt-8 w-full bg-blue-600 py-4 rounded-2xl font-bold text-white
                         hover:bg-blue-500 transition-all disabled:opacity-50"
            >
              {isSaving ? "Salvando..." : "Salvar alterações"}
            </button>
          </>
        )}
    </div>
  );
}