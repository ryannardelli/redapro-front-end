import { useEffect, useMemo, useState } from "react";
import {
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

/* ---------------- ICONES ---------------- */

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

/* ---------------- TIPOS ---------------- */

interface BackendProfile {
  id: number;
  name: string;
  description: string;
}

interface BackendMenu {
  label: string;
  route: string;
  icon: IconName;
}

/* ---------------- COMPONENTE ---------------- */

export function MenuBuilder() {
  const { stateProfile, loadMenusByProfile } = useProfile();
  const profiles: BackendProfile[] = stateProfile.profiles;

  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [localMenus, setLocalMenus] = useState<BackendMenu[]>([]);
  const [lastSavedMenus, setLastSavedMenus] = useState<BackendMenu[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  /* --------- tabs --------- */

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

  /* --------- tab inicial --------- */

  useEffect(() => {
    if (profiles.length && activeTab === null) {
      setActiveTab(profiles[0].id);
    }
  }, [profiles, activeTab]);

  /* --------- carrega menus --------- */

  useEffect(() => {
    if (activeTab) {
      loadMenusByProfile(activeTab);
    }
  }, [activeTab, loadMenusByProfile]);

  /* --------- sincroniza backend -> local --------- */

  useEffect(() => {
    if (stateProfile.menus) {
      setLocalMenus(stateProfile.menus);
      setLastSavedMenus(stateProfile.menus);
    }
  }, [stateProfile.menus]);

  const hasChanges =
    JSON.stringify(localMenus) !== JSON.stringify(lastSavedMenus);

  /* ---------------- AÇÕES ---------------- */

  const updateIcon = (route: string, icon: IconName) => {
    setLocalMenus(prev =>
      prev.map(menu =>
        menu.route === route ? { ...menu, icon } : menu
      )
    );
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
          menus: localMenus
        })
      });

      setLastSavedMenus(localMenus);
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar menus.");
    } finally {
      setIsSaving(false);
    }
  };

  /* ---------------- RENDER ---------------- */

  return (
    <div className="max-w-6xl mx-auto p-8 bg-slate-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-slate-900">
          Menus do Perfil
        </h1>
        <p className="text-slate-500 text-lg">
          Menus carregados diretamente do backend.
        </p>
      </header>

      {activeTab && (
        <ProfileTabs<number>
          tabs={profileTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      )}

      <section className="mt-8 space-y-4">
        {localMenus.length === 0 && (
          <p className="text-slate-400 text-center">
            Nenhum menu configurado para este perfil.
          </p>
        )}

        {localMenus.map(menu => {
          const Icon = AVAILABLE_ICONS[menu.icon as IconName] ?? AVAILABLE_ICONS.Home;

          return (
            <div
              key={menu.route}
              className="p-4 rounded-2xl border-2 bg-white border-slate-200"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Icon size={22} />
                  <div>
                    <p className="font-bold">{menu.label}</p>
                    <p className="text-xs text-slate-400">{menu.route}</p>
                  </div>
                </div>

                <CheckCircle2 className="text-green-500" />
              </div>

              <div className="mt-4 flex gap-2 flex-wrap">
                {(Object.keys(AVAILABLE_ICONS) as IconName[]).map(icon => {
                  const IconBtn = AVAILABLE_ICONS[icon];
                  return (
                    <button
                      key={icon}
                      onClick={() => updateIcon(menu.route, icon)}
                      className={`p-2 rounded-lg border transition-all ${
                        menu.icon === icon
                          ? "bg-blue-50 border-blue-300"
                          : "border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <IconBtn size={18} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
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