import React, { useState } from "react";
import { 
  Trash2, Plus, GraduationCap, Briefcase, CheckCircle2, 
  Home, Settings, User, FileText, Calendar, PieChart, 
  MessageSquare, Layout, LucideIcon 
} from "lucide-react";

// 1. Lista de ícones disponíveis para escolha
const AVAILABLE_ICONS = {
  Home, Settings, User, FileText, Calendar, PieChart, MessageSquare, Layout, Briefcase, GraduationCap
};

type IconName = keyof typeof AVAILABLE_ICONS;

const DISPONIVEIS = {
  corretor: [
    { label: "Dashboard Vendas", route: "/corretor/dash", defaultIcon: "PieChart" as IconName },
    { label: "Meus Imóveis", route: "/corretor/imoveis", defaultIcon: "Home" as IconName },
    { label: "Agenda de Visitas", route: "/corretor/agenda", defaultIcon: "Calendar" as IconName },
    { label: "Relatórios de Comissão", route: "/corretor/financeiro", defaultIcon: "FileText" as IconName },
  ],
  estudante: [
    { label: "Minha Área", route: "/estudante/home", defaultIcon: "User" as IconName },
    { label: "Cursos Inscritos", route: "/estudante/cursos", defaultIcon: "Layout" as IconName },
    { label: "Biblioteca Digital", route: "/estudante/materiais", defaultIcon: "FileText" as IconName },
    { label: "Suporte Acadêmico", route: "/estudante/ajuda", defaultIcon: "MessageSquare" as IconName },
  ]
} as const;

type UserProfile = "corretor" | "estudante";

interface MenuItem {
  id: string;
  label: string;
  route: string;
  iconName: IconName; // Guardamos o nome do ícone
}

export function MenuBuilder() {
  const [activeTab, setActiveTab] = useState<UserProfile>("corretor");
  const [activeMenus, setActiveMenus] = useState<Record<UserProfile, MenuItem[]>>({
    corretor: [],
    estudante: []
  });

  const toggleMenu = (item: typeof DISPONIVEIS['corretor'][number]) => {
    const isAlreadyActive = activeMenus[activeTab].some(m => m.route === item.route);

    if (isAlreadyActive) {
      setActiveMenus(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].filter(m => m.route !== item.route)
      }));
    } else {
      setActiveMenus(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], { ...item, id: item.route, iconName: item.defaultIcon }]
      }));
    }
  };

  const updateIcon = (route: string, newIcon: IconName) => {
    setActiveMenus(prev => ({
      ...prev,
      [activeTab]: prev[activeTab].map(m => m.route === route ? { ...m, iconName: newIcon } : m)
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans bg-slate-50 min-h-screen">
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Customização de Menu</h1>
        <p className="text-slate-500 text-lg">Defina quais ferramentas cada perfil pode acessar e com qual ícone.</p>
      </header>

      {/* Tabs Estilizadas */}
      <div className="flex justify-center md:justify-start gap-2 mb-8 p-1 bg-slate-200/50 w-fit rounded-2xl">
        {(["corretor", "estudante"] as UserProfile[]).map((profile) => (
          <button
            key={profile}
            onClick={() => setActiveTab(profile)}
            className={`px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold transition-all ${
              activeTab === profile 
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {profile === "corretor" ? <Briefcase size={18}/> : <GraduationCap size={18}/>}
            <span className="capitalize">{profile}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Lado Esquerdo: Seleção */}
        <section className="lg:col-span-3 space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Funcionalidades</h3>
          {DISPONIVEIS[activeTab].map((item) => {
            const activeItem = activeMenus[activeTab].find(m => m.route === item.route);
            const isActive = !!activeItem;

            return (
              <div 
                key={item.route}
                className={`group p-4 rounded-2xl border-2 transition-all bg-white ${
                  isActive ? "border-blue-500 ring-4 ring-blue-50" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                      {/* Renderiza o ícone escolhido ou o padrão */}
                      {React.createElement(AVAILABLE_ICONS[activeItem?.iconName || item.defaultIcon], { size: 24 })}
                    </div>
                    <div>
                      <p className={`font-bold ${isActive ? "text-slate-900" : "text-slate-600"}`}>{item.label}</p>
                      <p className="text-xs text-slate-400 font-mono">{item.route}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleMenu(item)}
                    className={`p-2 rounded-full transition-colors ${isActive ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400 hover:bg-slate-200"}`}
                  >
                    {isActive ? <CheckCircle2 size={20}/> : <Plus size={20}/>}
                  </button>
                </div>

                {/* Seletor de Ícones (Só aparece se estiver ativo) */}
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Trocar Ícone:</p>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {(Object.keys(AVAILABLE_ICONS) as IconName[]).map((iconKey) => (
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

        {/* Lado Direito: Preview Mobile */}
        <section className="lg:col-span-2">
          <div className="sticky top-8 bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-[8px] border-slate-800 h-[600px] flex flex-col">
            <div className="w-20 h-6 bg-slate-800 rounded-full mx-auto mb-8 mt-2"></div>
            
            <div className="flex-1 px-4 overflow-y-auto">
              <h3 className="text-white font-bold text-xl mb-6 px-2">Menu</h3>
              <nav className="space-y-2">
                {activeMenus[activeTab].map((menu) => {
                  const Icon = AVAILABLE_ICONS[menu.iconName];
                  return (
                    <div key={menu.id} className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                      <div className="flex items-center gap-4">
                        <Icon size={20} className="text-blue-400" />
                        <span className="text-slate-200 font-medium">{menu.label}</span>
                      </div>
                      <button onClick={() => toggleMenu(menu as any)} className="text-slate-600 hover:text-red-400 transition-colors">
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  );
                })}
              </nav>

              {activeMenus[activeTab].length === 0 && (
                <div className="h-40 flex flex-col items-center justify-center text-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl p-6">
                  <Layout size={32} className="mb-2 opacity-20"/>
                  <p className="text-sm italic">Selecione opções para visualizar o menu</p>
                </div>
              )}
            </div>

            <button className="mt-4 w-full bg-blue-600 py-4 rounded-2xl font-bold text-white shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all">
              Salvar Menu
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}