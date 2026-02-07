export function SetupHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Painel Admin</h1>
      <p>
        Aqui você pode configurar menus, perfis e permissões do sistema.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-bold">Menus</h2>
          <p>Crie e organize os menus do sistema.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-bold">Perfis</h2>
          <p>Gerencie os perfis de usuários e permissões.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-bold">Relatórios</h2>
          <p>Acompanhe estatísticas e histórico do sistema.</p>
        </div>
      </div>
    </div>
  );
}
