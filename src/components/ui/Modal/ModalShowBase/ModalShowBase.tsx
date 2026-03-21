import { AnimationPresenceMotion } from "@components/ui/Motion/AnimationPresenceMotion";
import { MotionContainer } from "@components/ui/Motion/MotionContainer";
import React, { type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalShowBaseProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const ModalShowBase: React.FC<ModalShowBaseProps> = ({
  isOpen,
  title,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimationPresenceMotion>
      <MotionContainer
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MotionContainer
          className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[85vh]"
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <header className="px-8 py-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white leading-tight">
              {title}
            </h3>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </header>

          <div className="px-8 py-6 overflow-y-auto flex-1 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
            {children}
          </div>
        </MotionContainer>
      </MotionContainer>
    </AnimationPresenceMotion>,
    document.body
  );
};