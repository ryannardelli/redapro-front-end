import defaultEssay from '../../../../assets/img/defaultEssay.jpg';
import { Edit3, Award, Calendar, Sparkles, Lock, FileText } from 'lucide-react';
import { toast } from 'react-toastify';
import { showMessage } from 'adapters/showMessage';
import { Dialog } from '@components/feedback/DialogConfirm/Dialog';
import { DeleteEssay } from '../DeleteEssay';
import { EditEssay } from '../EditEssay';
import { RouterLinks } from '@components/ui/Links/RouterLinks';
import { ViewMoreEssay } from '../ViewMoreEssay';
import { ShowResultEssay } from '../ShowResultEssay';
import { AICorrectionButton } from '../AICorrectionButton';
import { useEffect, useMemo, useState } from 'react';
import type { EssayFilters } from 'types/EssayFilters';
import { EssayCardSkeleton } from '@components/ui/Loading/EssayCardSkeleton';
import { EmptyActivitiesStudent } from '@components/ui/feedback/EmptyActivitiesStudent';
import { EmptyState } from '@components/feedback/EmptyState';
import { useProfileStudentEssay } from '@hooks/useProfileStudentEssay';
import type { DialogProps } from 'types/DialogProps';
import { EssayProcessingModal } from '@components/ui/Modal/EssayProcessingModal';
import { EssayAttachmentDownload } from '../EssayAttachmentDownload';

export function CardEssays({ filters }: { filters: EssayFilters }) {
  const { stateEssay, deleteEssay, correctEssayAI } = useProfileStudentEssay();

  console.log(stateEssay.essays);

  const loading = stateEssay.loading;
  const essays = stateEssay.essays || [];
  const [correctingEssayId, setCorrectingEssayId] = useState<number | null>(null);

  const filteredEssays = useMemo(() => {
    return essays.filter((essay) => {

      if (
        filters.search &&
        !essay.title.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      if (
          filters.categoryId &&
          String(essay.category?.id) !== String(filters.categoryId)
        ) {
          return false;
        }

      if (filters.scoreRange) {
        if (essay.note === null || essay.note === undefined) return false;

        const [min, max] = filters.scoreRange.split('-').map(Number);
        if (essay.note < min || essay.note > max) return false;
      }

      if (filters.status) {
          const status = filters.status.toLowerCase();

          const hasGrade = essay.note !== null && essay.note !== undefined;

              if (status === 'corrigida' && !hasGrade) return false;
              if (status === 'pendente' && hasGrade) return false;

              if (status === 'em_correcao' && essay.status?.toLowerCase() !== 'em_correcao')
                  return false;
          }

      return true;
    });
  }, [essays, filters]);

  const isFiltering = Boolean(
      filters.search ||
      filters.categoryId ||
      filters.scoreRange ||
      filters.status
    );

  const handleDelete = async (id: number) => {
    showMessage.dismiss();

    toast(Dialog, {
      data: "Tem certeza que deseja excluir esta redação?",
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
      onClose: async (props) => {
      const isConfirmed = (props as unknown as DialogProps)?.data === true || props === true;

        if (isConfirmed) {
          try {
            const responseDeleteEssay = await deleteEssay(id);
            showMessage.success(responseDeleteEssay.message);
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Erro ao excluir redação";

            console.error(err);
            showMessage.error(errorMessage);
          }
        }
      }
    });
  };

  const handleAICorrection = async (id: number) => {
  showMessage.dismiss();

  try {
    setCorrectingEssayId(id);

    const AIcorrectResponse = await correctEssayAI(id);
    showMessage.success(AIcorrectResponse.message);

    setCorrectingEssayId(null);

  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Erro ao corrigir com AI.";

    console.error(err);
    showMessage.error(errorMessage);

    setCorrectingEssayId(null);
  }
};

useEffect(() => {
  if (!correctingEssayId) return;

  const essay = essays.find(e => e.id === correctingEssayId);

  if (essay?.status?.toLowerCase() === "corrigida") {
    setCorrectingEssayId(null);
  }
}, [essays, correctingEssayId]);

  return (
    <>
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-gray-900">
            Suas Redações
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Gerencie seu progresso e acompanhe suas avaliações.
          </p>
        </div>

        {filteredEssays.length > 0 && (
          <RouterLinks
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-sm cursor-pointer"
            href="/essay-upload"
          >
            <Edit3 size={18} />
            Nova Redação
          </RouterLinks>
        )}
      </header>

      {loading ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: essays.length || 6 }).map((_, i) => (
            <EssayCardSkeleton key={i} />
          ))}
        </div>
      ) : essays.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <EmptyActivitiesStudent message="Você ainda não possui redações." />
        </div>
      ) : filteredEssays.length === 0 && isFiltering ? (
          <EmptyState
            icon={FileText}
            title="Nenhuma redação encontrada"
            description="Não encontramos resultados para sua busca."
          />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEssays.map((essay) => {
            const hasGrade =
              essay.note !== null && essay.note !== undefined;

            return (
              <div
                key={essay.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                      key={essay.id}
                      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={defaultEssay}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          alt={essay.title}
                        />

                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm ${
                              essay.status === 'CORRIGIDA'
                                ? 'bg-green-100 text-green-700'
                                : essay.status === 'EM_CORRECAO'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {essay.status === 'CORRIGIDA'
                              ? 'Corrigida'
                              : essay.status === 'EM_CORRECAO'
                              ? 'Em correção'
                              : 'Pendente'}
                          </span>
                        </div>

                        <div className="absolute top-4 right-4 flex gap-2">
                          <ViewMoreEssay
                            essay={essay}
                            loading={loading}
                            title="Ver redação completa"
                          />

                          {essay.attachmentUrl && (
                            <EssayAttachmentDownload filename={essay.attachmentOriginalName} attachmentUrl={essay.attachmentUrl} />
                          )}

                          <DeleteEssay
                            onDelete={() => handleDelete(essay.id)}
                            loading={loading}
                            title="Excluir redação"
                          />
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                          {essay.category?.name}
                        </span>

                        <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                          {essay.title}
                        </h3>

                        <p className="mb-6 text-gray-500 text-sm line-clamp-3 leading-relaxed">
                          {typeof essay.content === 'string'
                            ? essay.content.slice(0, 120)
                            : 'Conteúdo não disponível'}
                        </p>

                        <div className="grid grid-cols-2 gap-y-3 mb-6 border-t border-gray-50 pt-4">
                          <div className="flex items-center text-gray-600 text-xs">
                            <Calendar size={14} className="mr-1.5 opacity-70" />
                            {new Date(essay.createdAt ?? "").toLocaleDateString()}
                          </div>

                          <div className="flex items-center text-gray-600 text-xs">
                            <Award size={14} className="mr-1.5 opacity-70" />
                            Nota:
                            <span
                              className={`ml-1 font-bold ${
                                hasGrade
                                  ? 'text-green-600'
                                  : 'text-gray-400'
                              }`}
                            >
                              {hasGrade ? essay.note : '--'}
                            </span>
                          </div>
                        </div>

                        <div className="mt-auto flex flex-col gap-3">
                          {!hasGrade ? (
                            <AICorrectionButton
                              onClick={() => handleAICorrection(essay.id)}
                              loading={loading}
                            >
                              <Sparkles size={18} className="animate-pulse" />
                              Corrigir com IA
                            </AICorrectionButton>
                          ) : (
                            <ShowResultEssay essay={essay} />
                          )}

                          <div className="flex gap-2 w-full">
                            {hasGrade ? (
                              <div 
                                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-100 text-gray-400 rounded-xl font-medium cursor-not-allowed border border-gray-200 transition-colors"
                                title="Esta redação já foi corrigida e não pode mais ser editada."
                              >
                                <Lock size={16} className="opacity-60" />
                                <span>Edição desativada</span>
                              </div>
                            ) : (
                              <EditEssay essay={essay} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
    
    <EssayProcessingModal
      isOpen={correctingEssayId !== null}
    />
    </>
  );
}