// type ExibitionMoreEssayProps = {
//     title: string;
//     content: string;
//     category: string;
// }

// export const ExibitionMoreEssay = ({ title, category, content }: ExibitionMoreEssayProps) => {
//   return (
//     <div className="max-w-4xl mx-auto my-8 bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
//       <header className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
//         <div className="flex items-center gap-3 mb-3">
//           <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-indigo-100 text-indigo-700 rounded-full">
//             {category}
//           </span>
//         </div>
//         <h1 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
//           {title}
//         </h1>
//       </header>

//       <main className="p-8 md:p-12">
//         <article className="font-serif text-lg text-slate-800 leading-loose text-justify space-y-6">
//           {content.split('\n').map((paragrafo, index) => (
//             <p key={index} className="first-line:indent-8">
//               {paragrafo}
//             </p>
//           ))}
//         </article>
//       </main>

//       {/* Footer com informações extras (opcional) */}
//       <footer className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
//         <span>Formato: Dissertativo-Argumentativo</span>
//         <button className="hover:text-indigo-600 transition-colors">
//           Baixar PDF
//         </button>
//       </footer>
//     </div>
//   );
// };

interface ExibitionProps {
  title: string;
  category: string;
  content: string;
}

export function ExibitionMoreEssay({ title, category, content }: ExibitionProps) {
  return (
    <div className="max-w-3xl mx-auto py-4">
      {/* Badge de Categoria */}
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full">
          {category}
        </span>
      </div>

      {/* Título Estilizado */}
      <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-8 leading-tight">
        {title}
      </h1>

      {/* Simulador de Folha de Papel / Conteúdo */}
      <div className="relative">
        {/* Linha decorativa lateral opcional para parecer caderno */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-red-100 ml-[-20px] hidden md:block" />
        
        <article className="font-serif text-lg text-gray-800 leading-loose text-justify space-y-6">
          {content ? (
            content.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="indent-8 first-line:uppercase first-line:tracking-tight">
                  {paragraph}
                </p>
              )
            ))
          ) : (
            <p className="text-gray-400 italic text-center">Nenhum conteúdo disponível.</p>
          )}
        </article>
      </div>

      {/* Footer do Modal */}
      <div className="mt-12 pt-6 border-t border-gray-100 flex justify-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
          Fim da Redação
        </p>
      </div>
    </div>
  );
}