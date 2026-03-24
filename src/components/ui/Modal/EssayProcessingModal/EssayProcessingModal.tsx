import Lottie from "lottie-react";
import processingAnimation from "../../../../assets/animation/graduation.json";

interface EssayProcessingModalProps {
  isOpen: boolean;
}

export function EssayProcessingModal({ isOpen }: EssayProcessingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 transform transition-all border border-slate-100">
        <div className="flex flex-col items-center">
          
          <div className="w-48 h-48 mb-2">
            <Lottie 
              animationData={processingAnimation} 
              loop={true} 
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="space-y-2 text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-800 tracking-tight">
              Analisando sua redação
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed px-4">
              Nossa inteligência artificial está avaliando sua estrutura e gramática. Isso leva apenas alguns instantes.
            </p>
          </div>

          <div className="w-full mb-6">
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-loading-bar" />
            </div>

            <p className="text-xs text-slate-400 mt-2 text-center">
              Processando...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}