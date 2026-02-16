// import { ModalBase } from "@components/ui/Modal/ModalBase";
// import { Eye } from "lucide-react";
// import { useState } from "react";
// import { ExibitionMoreEssay } from "../ExibitionMoreEssay";

// interface ViewMoreEssayProps {
//   onView: () => void;
//   loading?: boolean;
//   title?: string;
//   className?: string;
// }

// export function ViewMoreEssay({
//   onView,
//   loading = false,
//   title = "Ver redação completa",
//   className = "",
// }: ViewMoreEssayProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//     <button
//       onClick={onView}
//       disabled={loading}
//       title={title}
//       className={`
//         p-2 rounded-lg shadow-md transition
//         ${
//           loading
//             ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//             : "bg-white/90 hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 cursor-pointer"
//         }
//         ${className}
//       `}
//     >
//       <Eye size={18} />
//     </button>

//      <ModalBase
//         title="Editar Redação"
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//       >
//         <ExibitionMoreEssay />
//       </ModalBase>
//     </>
//   );
// }

import { ModalBase } from "@components/ui/Modal/ModalBase";
import { Eye } from "lucide-react";
import { useState } from "react";
import { ExibitionMoreEssay } from "../ExibitionMoreEssay";

interface ViewMoreEssayProps {
  essay: any;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function ViewMoreEssay({
  essay,
  loading = false,
  title = "Ver redação completa",
  className = "",
}: ViewMoreEssayProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        disabled={loading}
        title={title}
        className={`p-2 rounded-lg shadow-md transition ${
          loading
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white/90 hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 cursor-pointer"
        } ${className}`}
      >
        <Eye size={18} />
      </button>

      <ModalBase
        title="Visualização da Redação"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ExibitionMoreEssay 
          title={essay.title} 
          category={essay.category?.name} 
          content={essay.content} 
        />
      </ModalBase>
    </>
  );
}