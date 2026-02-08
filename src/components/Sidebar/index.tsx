import redaProLogo from '../../assets/img/redapro.png';
import { useState } from "react";
import { RouterLinks } from '../RouterLinks';
import { BookOpen, Calendar, FileText, HelpCircle, Home, PenLine, User } from 'lucide-react';

import avatarUser  from '../../assets/img/avatar-default.jpg';

export function Sidebar() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <section>
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition-transform origin-left transform bg-white shadow-lg w-60 ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <RouterLinks href="/" className="flex items-center px-4 py-5">
          <img src={redaProLogo} alt="Kutty Logo" className="w-15 rounded-full" />
        </RouterLinks>

        <nav className="text-sm font-medium text-gray-600" aria-label="Main Navigation">
          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group bg-gray-100 hover:bg-gray-100 hover:text-gray-900"
            href="/"
          >
            <Home />
            <span>Início</span>
          </RouterLinks>

          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
            href="/my-profile"
          >
            <User />
            <span>Meu Perfil</span>
          </RouterLinks>

          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 text-gray-900 transition  cursor-pointer group hover:bg-gray-200"
            href="/my-essays"
          >
            <FileText />
            <span>Minhas Redações</span>
          </RouterLinks>

          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 text-gray-900 transition cursor-pointer group hover:bg-gray-200"
            href="/essay-upload"
          >
            <PenLine />
            <span>Enviar Redação</span>
          </RouterLinks>

          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
            href="/calendar"
          >
            <Calendar />
            <span>Agendamentos</span>
          </RouterLinks>

          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
            href="/models"
          >
            <BookOpen />
            <span>Modelos nota 1000</span>
          </RouterLinks>

          <RouterLinks
            className="flex gap-4 items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
            href="/support"
          >
            <HelpCircle />
            <span>Ajuda e suporte</span>
          </RouterLinks>
        </nav>
      </nav>

      {/* Header */}
     <div className="ml-0 transition md:ml-60 p-4">
  <header className="flex items-center justify-between w-full px-4 h-14 bg-white shadow-sm">
    {/* Botão do menu mobile */}
    <button
      className="block md:hidden text-gray-600 hover:text-gray-800"
      onClick={() => setSideBar(true)}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        />
      </svg>
    </button>

    {/* Campo de busca */}
    <div className="hidden -ml-3 form-icon md:block w-96">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="border-0 pl-10 pr-4 py-2 w-full form-input focus:ring-0"
        placeholder="Search for articles..."
      />
    </div>

    {/* Ícones à direita */}
    <div className="flex items-center">
        <img src={avatarUser} alt="Photo of Praveen Juge" className="rounded-full w-8 h-8" />
    </div>
  </header>
</div>


      {/* Backdrop Mobile */}
      {sideBar && (
        <div
          className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden"
          onClick={() => setSideBar(false)}
        ></div>
      )}
    </section>
  );
}