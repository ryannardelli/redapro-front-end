import { useState } from "react";
import { ChevronRight, Home, User, FileText, Calendar, BookOpen, HelpCircle } from "lucide-react";
import redaProLogo from '../../assets/img/redapro.png';
import { RouterLinks } from "../RouterLinks";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
      className={`bg-[#f7f7f8] h-screen fixed top-0 left-0 py-6 px-4 transition-all duration-300
        ${isCollapsed ? 'w-20' : 'w-[250px]'}`}
    >
      <div className="relative flex items-center justify-between">
        <RouterLinks href="/home">
          <img
            src={redaProLogo}
            alt="Redapro"
            className={`w-[90px] rounded-full transition-all duration-300
              ${isCollapsed ? 'w-10' : 'w-[90px]'}`}
          />
        </RouterLinks>

        <div
          className="absolute -right-6 top-1 h-6 w-6 cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full"
          onClick={toggleSidebar}
        >
          <ChevronRight
            size={16}
            color="#fff"
            className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      <div className={`overflow-auto py-6 h-full mt-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <ul className="space-y-2">
          <li>
            <RouterLinks href="/home" className="text-slate-800 font-medium hover:text-slate-900 hover:bg-gray-200 text-[15px] flex items-center gap-3 rounded px-4 py-2 transition-all">
              <Home size={18} />
              <span>Início</span>
            </RouterLinks>
          </li>
          <li>
            <RouterLinks href="/profile" className="text-slate-800 font-medium hover:text-slate-900 hover:bg-gray-200 text-[15px] flex items-center gap-3 rounded px-4 py-2 transition-all">
              <User size={18} />
              <span>Meu Perfil</span>
            </RouterLinks>
          </li>
          <li>
            <RouterLinks href="/my-essays" className="text-slate-800 font-medium hover:text-slate-900 hover:bg-gray-200 text-[15px] flex items-center gap-3 rounded px-4 py-2 transition-all">
              <FileText size={18} />
              <span>Minhas Redações</span>
            </RouterLinks>
          </li>
          <li>
            <RouterLinks href="/calendar" className="text-slate-800 font-medium hover:text-slate-900 hover:bg-gray-200 text-[15px] flex items-center gap-3 rounded px-4 py-2 transition-all">
              <Calendar size={18} />
              <span>Agendamentos</span>
            </RouterLinks>
          </li>
          <li>
            <RouterLinks href="/my-models" className="text-slate-800 font-medium hover:text-slate-900 hover:bg-gray-200 text-[15px] flex items-center gap-3 rounded px-4 py-2 transition-all">
              <BookOpen size={18} />
              <span>Modelos Nota 1000</span>
            </RouterLinks>
          </li>
          <li>
            <RouterLinks href="/support" className="text-slate-800 font-medium hover:text-slate-900 hover:bg-gray-200 text-[15px] flex items-center gap-3 rounded px-4 py-2 transition-all">
              <HelpCircle size={18} />
              <span>Ajuda e Suporte</span>
            </RouterLinks>
          </li>
        </ul>
      </div>
    </nav>
  );
}
