import { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { Home, Users, Menu, X, MenuIcon, BookOpen, Tags, UserCog } from "lucide-react";
import { Logout } from "@components/domain/Auth/Logout";

export default function AdminSetupTemplate() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/admin/setup", label: "Home", icon: Home, end: true },
    { to: "/admin/setup/menus", label: "Menus", icon: MenuIcon },
    { to: "/admin/setup/profiles", label: "Perfis", icon: Users },
    { to: "/admin/setup/users", label: "Usuários", icon: UserCog },
    { to: "/admin/setup/categories", label: "Categorias", icon: Tags },
    { to: "/admin/setup/reference-essay", label: "Modelos Nota 1000", icon: BookOpen },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 text-2xl font-bold border-b border-slate-800 tracking-tight">
          Painel<span className="text-blue-400">Admin</span>
        </div>

        <nav className="mt-6 px-3 space-y-1 mb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <Logout />

       
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center px-8 hidden lg:flex">
          <h1 className="text-sm text-gray-500 italic">Configurações do Sistema</h1>
        </header>
        
        <section className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}