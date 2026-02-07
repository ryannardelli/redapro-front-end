import { useState } from "react";

export function MenuBuilder() {
  const [menus, setMenus] = useState([
    { id: 1, label: "Home", route: "/", order: 1 },
    { id: 2, label: "Profile", route: "/my-profile", order: 2 },
  ]);

  const [newMenu, setNewMenu] = useState({ label: "", route: "" });

  const addMenu = () => {
    if (!newMenu.label || !newMenu.route) return;
    setMenus([
      ...menus,
      { id: Date.now(), label: newMenu.label, route: newMenu.route, order: menus.length + 1 },
    ]);
    setNewMenu({ label: "", route: "" });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gerenciador de Menus</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Nome do menu"
          value={newMenu.label}
          onChange={(e) => setNewMenu({ ...newMenu, label: e.target.value })}
          className="p-2 border rounded flex-1"
        />
        <input
          type="text"
          placeholder="Rota do menu"
          value={newMenu.route}
          onChange={(e) => setNewMenu({ ...newMenu, route: e.target.value })}
          className="p-2 border rounded flex-1"
        />
        <button
          onClick={addMenu}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>

      <ul className="bg-white rounded shadow p-4">
        {menus.map((menu) => (
          <li key={menu.id} className="p-2 border-b last:border-b-0">
            <strong>{menu.label}</strong> → {menu.route}
          </li>
        ))}
      </ul>
    </div>
  );
}
