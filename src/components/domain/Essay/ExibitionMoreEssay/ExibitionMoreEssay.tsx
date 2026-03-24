interface ExibitionProps {
  title: string;
  category: string;
  content: string;
}

export function ExibitionMoreEssay({ title, content }: ExibitionProps) {
  return (
    <div className="w-4xl mx-auto py-16 px-5 bg-gray-50 min-h-screen">
      
      <div className="bg-white shadow-2xl rounded-sm border border-gray-200 px-8 py-12 md:px-16 md:py-16 relative overflow-hidden min-h-[1000px]">
        
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-red-200" />

        <header className="relative z-10 mb-14 border-b-2 border-gray-800 pb-6">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-900 text-center uppercase tracking-wide leading-relaxed">
            {title}
          </h1>
        </header>

        <article className="relative z-10">
          <div 
            className="relative font-serif text-[1.05rem] text-gray-700 leading-[2.6rem] text-justify"
            style={{
              backgroundImage: 'linear-gradient(transparent 97%, #e5e7eb 97%)',
              backgroundSize: '100% 2.6rem',
              minHeight: '78rem',
            }}
          >

            {content ? (
              content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="indent-10">
                    {paragraph}
                  </p>
                )
              ))
            ) : (
              <p className="text-gray-400 italic text-center pt-24">Nenhum conteúdo disponível.</p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}