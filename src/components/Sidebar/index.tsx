// import redaProLogo from '../../assets/img/redapro.png';
// import { useState } from "react";
// import { RouterLinks } from '../RouterLinks';
// import { BookOpen, Calendar, FileText, HelpCircle, Home, PenLine, User } from 'lucide-react';

// import avatarUser  from '../../assets/img/avatar-default.jpg';
// import { HeaderNav } from '../HeaderNav';

// export function Sidebar() {
//   const [sideBar, setSideBar] = useState(false);

//   return (
//     <section>
//       {/* Sidebar */}
//       <nav
//         className={`fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition-transform origin-left transform bg-white shadow-lg w-60 ${
//           sideBar ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
//         <RouterLinks href="/" className="flex items-center px-4 py-5">
//           <img src={redaProLogo} alt="Kutty Logo" className="w-15 rounded-full" />
//         </RouterLinks>

//         <nav className="text-sm font-medium text-gray-600" aria-label="Main Navigation">
//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group bg-gray-100 hover:bg-gray-100 hover:text-gray-900"
//             href="/"
//           >
//             <Home />
//             <span>Início</span>
//           </RouterLinks>

//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
//             href="/my-profile"
//           >
//             <User />
//             <span>Meu Perfil</span>
//           </RouterLinks>

//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 text-gray-900 transition  cursor-pointer group hover:bg-gray-200"
//             href="/my-essays"
//           >
//             <FileText />
//             <span>Minhas Redações</span>
//           </RouterLinks>

//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 text-gray-900 transition cursor-pointer group hover:bg-gray-200"
//             href="/essay-upload"
//           >
//             <PenLine />
//             <span>Enviar Redação</span>
//           </RouterLinks>

//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
//             href="/calendar"
//           >
//             <Calendar />
//             <span>Agendamentos</span>
//           </RouterLinks>

//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
//             href="/models"
//           >
//             <BookOpen />
//             <span>Modelos nota 1000</span>
//           </RouterLinks>

//           <RouterLinks
//             className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
//             href="/support"
//           >
//             <HelpCircle />
//             <span>Ajuda e suporte</span>
//           </RouterLinks>
//         </nav>
//       </nav>

//       {/* Header */}
//      <div className="ml-0 transition md:ml-60 p-4">
//   <header className="flex items-center justify-between w-full px-4 h-14 bg-white shadow-sm">
//     {/* Botão do menu mobile */}
//     <button
//       className="block md:hidden text-gray-600 hover:text-gray-800"
//       onClick={() => setSideBar(true)}
//     >
//       <span className="sr-only">Menu</span>
//       <svg
//         className="w-6 h-6"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//         />
//       </svg>
//     </button>

//     <HeaderNav />
//   </header>
// </div>


//       {/* Backdrop Mobile */}
//       {sideBar && (
//         <div
//           className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden"
//           onClick={() => setSideBar(false)}
//         ></div>
//       )}
//     </section>
//   );
// }

import { useState } from "react";
import { 
  BookOpen, Calendar, FileText, HelpCircle, 
  Home, PenLine, User, LogOut, X 
} from 'lucide-react';
import { RouterLinks } from '../RouterLinks';
import { HeaderNav } from '../HeaderNav';
import redaProLogo from '../../assets/img/redapro.png';
import { useAuth } from "../../hooks/useAuth";
import { formatRole } from "../../utils/formatRole";

interface MenuItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

const mainMenus: MenuItem[] = [
  { title: "Início", icon: Home, path: "/" },
  { title: "Minhas Redações", icon: FileText, path: "/my-essays" },
  { title: "Enviar Redação", icon: PenLine, path: "/essay-upload" },
  { title: "Modelos Nota 1000", icon: BookOpen, path: "/models" },
];

const secondaryMenus: MenuItem[] = [
  { title: "Agendamentos", icon: Calendar, path: "/calendar" },
  { title: "Meu Perfil", icon: User, path: "/my-profile" },
  { title: "Ajuda e Suporte", icon: HelpCircle, path: "/support" },
];

export function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const { state, logout } = useAuth();
  const user = state.user;

  return (
    <div className="bg-gray-50">
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out shadow-xl md:shadow-none ${
          sideBarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 flex items-center justify-between">
          <RouterLinks href="/" className="flex items-center gap-3 group">
            <img src={redaProLogo} alt="RedaPro" className="w-10 h-10 rounded-xl shadow-md" />
            <span className="text-xl font-black text-indigo-600 tracking-tight">RedaPro</span>
          </RouterLinks>
          
          <button onClick={() => setSideBarOpen(false)} className="md:hidden p-2 text-gray-400">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-8 mt-4">
          <div>
            <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Menu Principal</p>
            <div className="space-y-1">
              {mainMenus.map((item) => (
                <RouterLinks
                  key={item.path}
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-600 rounded-xl transition-all hover:bg-indigo-50 hover:text-indigo-600 group"
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                  {item.title}
                </RouterLinks>
              ))}
            </div>
          </div>

          <div>
            <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Preferências</p>
            <div className="space-y-1">
              {secondaryMenus.map((item) => (
                <RouterLinks
                  key={item.path}
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-600 rounded-xl transition-all hover:bg-indigo-50 hover:text-indigo-600 group"
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                  {item.title}
                </RouterLinks>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-50 mt-auto">
          <button className="flex w-full items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
          onClick={logout}
          >
            <LogOut size={20} />
            Sair da Plataforma
          </button>
        </div>
      </aside>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className={`transition-all duration-300 ${sideBarOpen ? "blur-sm md:blur-none" : ""} md:ml-64`}>
        <HeaderNav 
          onToggleSidebar={() => setSideBarOpen(true)} 
          userName={user?.name}
          userRole={formatRole(user?.role)}
        />
        
        <main className="p-6 md:p-10">
          {/* Aqui entrarão as páginas (Outlet se usar React Router) */}
          <div className="max-w-7xl mx-auto">
            {/* O conteúdo das suas rotas vai aqui */}
          </div>
        </main>
      </div>
      {sideBarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setSideBarOpen(false)}
        ></div>
      )}
    </div>
  );
}