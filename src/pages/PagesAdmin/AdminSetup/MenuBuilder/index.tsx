import React, { useState } from "react";
import {
  Trash2,
  Plus,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Home,
  Settings,
  User,
  FileText,
  Calendar,
  MessageSquare,
  Layout,
  UserCheck,
  BookOpen,
  HelpCircle,
  PenLine
} from "lucide-react";

const AVAILABLE_ICONS = {
  Home,
  Settings,
  User,
  FileText,
  Calendar,
  BookOpen,
  HelpCircle,
  PenLine,
  MessageSquare,
  Layout,
  Briefcase,
  GraduationCap
};

type IconName = keyof typeof AVAILABLE_ICONS;

const DISPONIVEIS = {
  corretor: [
    { label: "Início", route: "/", defaultIcon: "Home" as IconName },
    { label: "Correções de Redação", route: "/essays-corrector", defaultIcon: "FileText" as IconName },
    { label: "Agenda de Correções", route: "/schedules-corrector", defaultIcon: "Calendar" as IconName },
     { label: "Meu Perfil", route: "/my-profile", defaultIcon: "User" as IconName },
    { label: "Ajuda e Suporte", route: "/support", defaultIcon: "HelpCircle" as IconName }
  ],

  estudante: [
    { label: "Início", route: "/", defaultIcon: "Home" as IconName },
    { label: "Minhas Redações", route: "/my-essays", defaultIcon: "FileText" as IconName },
    { label: "Enviar Redação", route: "/essay-upload", defaultIcon: "PenLine" as IconName },
    { label: "Modelos Nota 1000", route: "/models", defaultIcon: "BookOpen" as IconName },
    { label: "Meu Perfil", route: "/my-profile", defaultIcon: "User" as IconName },
    { label: "Ajuda e Suporte", route: "/support", defaultIcon: "HelpCircle" as IconName },
     { label: "Agendamentos", route: "/calendar", defaultIcon: "Calendar" as IconName }
  ]
} as const;

type UserProfile = "corrector" | "student";

interface MenuItem {
  id: string;
  label: string;
  route: string;
  iconName: IconName;
}

export function MenuBuilder() {
  const [activeTab, setActiveTab] = useState<UserProfile>("corretor");
  const [activeMenus, setActiveMenus] = useState<Record<UserProfile, MenuItem[]>>({
    corretor: [],
    estudante: []
  });

  /* Permite apenas 1 menu por perfil */
  const toggleMenu = (item: typeof DISPONIVEIS["corretor"][number]) => {
    const isAlreadyActive = activeMenus[activeTab].some(m => m.route === item.route);

    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: isAlreadyActive
        ? []
        : [{
            id: item.route,
            label: item.label,
            route: item.route,
            iconName: item.defaultIcon
          }]
    }));
  };

  const updateIcon = (route: string, newIcon: IconName) => {
    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: prev[activeTab].map(m =>
        m.route === route ? { ...m, iconName: newIcon } : m
      )
    }));
  };

  const hasActiveMenu = activeMenus[activeTab].length === 1;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-slate-50 min-h-screen font-sans">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-slate-900">Customização de Menu</h1>
        <p className="text-slate-500 text-lg">
          Escolha apenas uma funcionalidade por perfil para manter consistência com a API.
        </p>
      </header>

      <div className="flex gap-2 mb-8 p-1 bg-slate-200/50 w-fit rounded-2xl">
        {(["corretor", "estudante"] as UserProfile[]).map(profile => (
          <button
            key={profile}
            onClick={() => setActiveTab(profile)}
            className={`px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold transition-all ${
              activeTab === profile
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {profile === "corretor" ? <UserCheck size={18} /> : <GraduationCap size={18} />}
            <span className="capitalize">{profile}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <section className="lg:col-span-3 space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
            Funcionalidades (1 por vez)
          </h3>
          <p className="text-sm text-slate-500 px-2">
            Ao selecionar uma nova opção, a anterior será substituída.
          </p>

          {DISPONIVEIS[activeTab].map(item => {
            const activeItem = activeMenus[activeTab].find(m => m.route === item.route);
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {React.createElement(
                        AVAILABLE_ICONS[activeItem?.iconName || item.defaultIcon],
                        { size: 24 }
                      )}
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">{item.label}</p>
                      <p className="text-xs text-slate-400 font-mono">{item.route}</p>
                    </div>
                  </div>

                  <button
                    disabled={isDisabled}
                    onClick={() => toggleMenu(item)}
                    className={`p-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : isDisabled
                        ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                        : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                    }`}
                  >
                    {isActive ? <CheckCircle2 size={20} /> : <Plus size={20} />}
                  </button>
                </div>

                {isActive && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                      Trocar Ícone
                    </p>
                    <div className="flex gap-2 overflow-x-auto">
                      {(Object.keys(AVAILABLE_ICONS) as IconName[]).map(iconKey => (
                        <button
                          key={iconKey}
                          onClick={() => updateIcon(item.route, iconKey)}
                          className={`p-2 rounded-lg border transition-all ${
                            activeItem.iconName === iconKey
                              ? "bg-blue-50 border-blue-200 text-blue-600"
                              : "border-transparent text-slate-400 hover:bg-slate-50"
                          }`}
                        >
                          {React.createElement(AVAILABLE_ICONS[iconKey], { size: 18 })}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <section className="lg:col-span-2">
          <div className="sticky top-8 bg-slate-900 rounded-[3rem] p-4 h-[600px] flex flex-col border-[8px] border-slate-800 shadow-2xl">
            <div className="w-20 h-6 bg-slate-800 rounded-full mx-auto my-4" />

            <div className="flex-1 px-4">
              <h3 className="text-white font-bold text-xl mb-6">Menu</h3>

              {activeMenus[activeTab].length === 0 ? (
                <div className="h-40 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl">
                  <Layout size={32} className="mb-2 opacity-20" />
                  <p className="text-sm italic">Nenhum menu selecionado</p>
                </div>
              ) : (
                activeMenus[activeTab].map(menu => {
                  const Icon = AVAILABLE_ICONS[menu.iconName];
                  return (
                    <div
                      key={menu.id}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <Icon size={20} className="text-blue-400" />
                        <span className="text-slate-200 font-medium">{menu.label}</span>
                      </div>
                      <button
                        onClick={() => toggleMenu(menu as any)}
                        className="text-slate-600 hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <button className="mt-4 w-full bg-blue-600 py-4 rounded-2xl font-bold text-white hover:bg-blue-500 transition-all">
              Salvar Menu
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
