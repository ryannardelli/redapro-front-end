import defaultEssay from '../../assets/img/defaultEssay.jpg';
import { useEssay } from '../../hooks/useEssay';

export function CardEssays() {
  const { stateEssay } = useEssay();
  const essays = stateEssay.essays || [];

  return (
    <section className="px-4 py-10 mx-auto max-w-7xl">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Redações</h2>
      <p className="mb-20 text-lg text-gray-500">
        Confira suas redações.
      </p>

      {essays.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="mb-4 text-lg text-gray-500">Você ainda não tem nenhuma redação.</p>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            + Criar Redação
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {essays.map((essay) => (
            <div key={essay.id} className="p-5 bg-white rounded shadow-md">
              <a href="#">
                <img
                  src={defaultEssay}
                  className="object-cover w-full h-56 mb-5 bg-center rounded"
                  alt={essay.title}
                  loading="lazy"
                />
              </a>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  {essay.title}
                </a>
              </h2>
              <p className="mb-3 text-sm text-gray-500">{essay.content.slice(0, 120)}...</p>
              <p className="mb-1 text-sm font-medium text-gray-700">Categoria: {essay.category?.name}</p>
              <p className="mb-1 text-sm font-medium text-gray-700">Nota: {essay.note ?? 'Pendente'}</p>
              <p className="mb-1 text-sm font-medium text-gray-700">Status: {essay.status}</p>
              <p className="mb-3 text-sm text-gray-500">
                Enviada em: {new Date(essay.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
