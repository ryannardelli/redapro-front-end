import { useState } from "react";

export function ProfileBuilder() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Admin", menus: ["/", "/admin/setup"] },
  ]);
  const [newProfile, setNewProfile] = useState("");

  const addProfile = () => {
    if (!newProfile) return;
    setProfiles([...profiles, { id: Date.now(), name: newProfile, menus: [] }]);
    setNewProfile("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gerenciador de Perfis</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Nome do perfil"
          value={newProfile}
          onChange={(e) => setNewProfile(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <button
          onClick={addProfile}
          className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
        >
          Adicionar Perfil
        </button>
      </div>

      <ul className="bg-white rounded shadow p-4">
        {profiles.map((profile) => (
          <li key={profile.id} className="p-2 border-b last:border-b-0">
            <strong>{profile.name}</strong> → Menus: {profile.menus.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}