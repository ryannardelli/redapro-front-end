import { AnimationPresenceMotion } from "@components/ui/Motion/AnimationPresenceMotion";
import { MotionContainer } from "@components/ui/Motion/MotionContainer";
import React, { type ReactNode } from "react";

interface ModalViewResultBaseProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;

  actions?: ReactNode;

  hideFooter?: boolean;
}

export const ModalViewBaseResult: React.FC<ModalViewResultBaseProps> = ({
  isOpen,
  title,
  onClose,
  children,
  actions,
  hideFooter = false,
}) => {
  return (
    <AnimationPresenceMotion>
      {isOpen && (
        <MotionContainer
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MotionContainer
            className="
              bg-white dark:bg-slate-900
              w-full max-w-xl
              rounded-xl shadow-2xl
              overflow-hidden flex flex-col
            "
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.35 }}
          >
            <header className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {title}
              </h3>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>
            </header>

            <div className="px-6 py-6 overflow-y-auto max-h-[70vh] text-slate-700 dark:text-slate-300">
              {children}
            </div>

            {!hideFooter && (
              <footer className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center gap-3">
                <div className="flex gap-2">
                  {actions}
                </div>

                <button
                  onClick={onClose}
                  className="
                    px-4 py-2 rounded-lg
                    text-slate-600 dark:text-slate-300
                    hover:bg-slate-200 dark:hover:bg-slate-700
                    transition-all cursor-pointer
                  "
                >
                  Fechar
                </button>
              </footer>
            )}
          </MotionContainer>
        </MotionContainer>
      )}
    </AnimationPresenceMotion>
  );
};