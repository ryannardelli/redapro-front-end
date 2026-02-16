interface ExibitionProps {
  title: string;
  category: string;
  content: string;
}

export function ExibitionMoreEssay({ title, category, content }: ExibitionProps) {
  return (
    <div className="max-w-3xl mx-auto py-4">
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full">
          {category}
        </span>
      </div>

      <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-8 leading-tight">
        {title}
      </h1>

      <div className="relative">
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

      <div className="mt-12 pt-6 border-t border-gray-100 flex justify-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
          Fim da Redação
        </p>
      </div>
    </div>
  );
}