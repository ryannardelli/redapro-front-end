import { Outlet, NavLink } from "react-router";

export default function AdminSetupTemplate() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 font-bold text-xl">Painel Admin</div>
        <nav className="flex flex-col flex-1">
          <NavLink
            to="/admin/setup"
            end
            className={({ isActive }) =>
              `p-3 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/admin/setup/menus"
            className={({ isActive }) =>
              `p-3 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Menus
          </NavLink>
          <NavLink
            to="/admin/setup/profiles"
            className={({ isActive }) =>
              `p-3 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Perfis
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}