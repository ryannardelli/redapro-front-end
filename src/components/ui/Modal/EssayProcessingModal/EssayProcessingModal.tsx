// import Lottie from "lottie-react";

// export function EssayProcessingModal({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full text-center">
        
//         <div className="flex flex-col items-center gap-4">
//           <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent" />

//           <h3 className="text-lg font-bold text-gray-900">
//             Corrigindo sua redação...
//           </h3>

//           <p className="text-sm text-gray-500">
//             Isso pode levar alguns segundos. Você será notificado quando estiver pronto.
//           </p>

//           <button
//             onClick={onClose}
//             className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//           >
//             Fechar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import Lottie from "lottie-react";
import processingAnimation from "../../../../assets/animation/graduation.json";

interface EssayProcessingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EssayProcessingModal({ isOpen, onClose }: EssayProcessingModalProps) {
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

          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-8">
            <div className="bg-indigo-600 h-full rounded-full animate-progress-loading" />
          </div>

          <button
            onClick={onClose}
            className="w-full cursor-pointer py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors duration-200 border border-slate-200"
          >
            Entendi, aguardar em segundo plano
          </button>
        </div>
      </div>
    </div>
  );
}