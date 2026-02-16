import React, { useState } from "react";
import { Trash2, Plus, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

// 1. Definição das Rotas Disponíveis no seu Front-end
const DISPONIVEIS = {
  corretor: [
    { label: "Dashboard Vendas", route: "/corretor/dash" },
    { label: "Meus Imóveis", route: "/corretor/imoveis" },
    { label: "Agenda de Visitas", route: "/corretor/agenda" },
    { label: "Relatórios de Comissão", route: "/corretor/financeiro" },
  ],
  estudante: [
    { label: "Minha Área", route: "/estudante/home" },
    { label: "Cursos Inscritos", route: "/estudante/cursos" },
    { label: "Biblioteca Digital", route: "/estudante/materiais" },
    { label: "Suporte Acadêmico", route: "/estudante/ajuda" },
  ]
} as const;

type UserProfile = "corretor" | "estudante";

interface MenuItem {
  id: string; // Usaremos a rota como ID único para evitar duplicatas
  label: string;
  route: string;
}

export function MenuBuilder() {
  const [activeTab, setActiveTab] = useState<UserProfile>("corretor");
  
  // Estado dos menus que o usuário "ativou"
  const [activeMenus, setActiveMenus] = useState<Record<UserProfile, MenuItem[]>>({
    corretor: [],
    estudante: []
  });

  const toggleMenu = (item: typeof DISPONIVEIS['corretor'][number]) => {
    const isAlreadyActive = activeMenus[activeTab].some(m => m.route === item.route);

    if (isAlreadyActive) {
      // Remove se já estiver ativo
      setActiveMenus(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].filter(m => m.route !== item.route)
      }));
    } else {
      // Adiciona se não estiver ativo
      setActiveMenus(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], { ...item, id: item.route }]
      }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 font-sans">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Customização de Menu</h1>
        <p className="text-slate-500">Selecione as funcionalidades que estarão visíveis para cada perfil.</p>
      </header>

      {/* Tabs de Perfil */}
      <div className="flex gap-4 mb-8 border-b border-slate-200">
        {(["corretor", "estudante"] as UserProfile[]).map((profile) => (
          <button
            key={profile}
            onClick={() => setActiveTab(profile)}
            className={`pb-4 px-2 flex items-center gap-2 font-semibold transition-all border-b-2 ${
              activeTab === profile 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {profile === "corretor" ? <Briefcase size={20}/> : <GraduationCap size={20}/>}
            <span className="capitalize">{profile}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Lado Esquerdo: Biblioteca de Itens Disponíveis */}
        <section>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Funcionalidades Disponíveis</h3>
          <div className="grid gap-3">
            {DISPONIVEIS[activeTab].map((item) => {
              const isActive = activeMenus[activeTab].some(m => m.route === item.route);
              return (
                <button
                  key={item.route}
                  onClick={() => toggleMenu(item)}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${
                    isActive 
                      ? "border-blue-100 bg-blue-50 text-blue-700 shadow-sm" 
                      : "border-slate-100 bg-white hover:border-slate-200 text-slate-600"
                  }`}
                >
                  <div>
                    <p className="font-bold">{item.label}</p>
                    <p className="text-xs opacity-70 font-mono">{item.route}</p>
                  </div>
                  {isActive ? <CheckCircle2 className="text-blue-600" size={24}/> : <Plus size={20}/>}
                </button>
              );
            })}
          </div>
        </section>

        {/* Lado Direito: Preview do Menu Ativo */}
        <section className="bg-slate-900 rounded-3xl p-6 text-white h-fit shadow-2xl ring-8 ring-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Preview do Menu</h3>
            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-full text-slate-400 uppercase tracking-tighter">Mobile View</span>
          </div>

          <nav className="space-y-2">
            {activeMenus[activeTab].length > 0 ? (
              activeMenus[activeTab].map((menu) => (
                <div key={menu.id} className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">{menu.label}</span>
                  </div>
                  <button 
                    onClick={() => toggleMenu(menu)}
                    className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-400 transition-opacity"
                  >
                    <Trash2 size={16}/>
                  </button>
                </div>
              ))
            ) : (
              <div className="py-10 text-center border-2 border-dashed border-slate-800 rounded-2xl text-slate-600 text-sm">
                Nenhum item selecionado. <br/> Adicione itens à esquerda.
              </div>
            )}
          </nav>
          
          <div className="mt-8 pt-6 border-t border-slate-800">
             <button className="w-full bg-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors">
               Salvar Configuração
             </button>
          </div>
        </section>
      </div>
    </div>
  );
}