import { SetupCard } from '@components/ui/Card/SetupCard/SetupCard';
import { Layout, Users, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router';

export function SetupHome() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Menus",
      description: "Crie, edite e organize a navegação principal e submenus do sistema.",
      icon: Layout,
      color: "blue",
      action: () => navigate("/admin/setup/menus")
    },
    {
      title: "Perfis",
      description: "Controle quem pode acessar o quê definindo permissões e grupos de usuários.",
      icon: Users,
      color: "purple",
      action: () => navigate("/admin/setup/profiles")
    },
    {
      title: "Modelos nota 1000",
      description: "Explore a galeria de redações exemplares e aprenda com os melhores.",
      icon: FileCheck,
      color: "amber",
      action: () => navigate("/admin/setup/reference-essay")
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Painel de Configurações
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Gerencie a estrutura do sistema, acessos e visualize métricas de desempenho.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <SetupCard 
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            onClick={card.action}
          />
        ))}
      </div>
    </div>
  );
}