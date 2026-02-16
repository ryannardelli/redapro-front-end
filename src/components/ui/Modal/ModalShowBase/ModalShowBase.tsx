import { AnimationPresenceMotion } from "@components/ui/Motion/AnimationPresenceMotion";
import { MotionContainer } from "@components/ui/Motion/MotionContainer";
import React, { type ReactNode } from "react";

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
            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <header className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </header>

            <div className="px-6 py-6 overflow-y-auto max-h-[70vh]">
              {children}
            </div>
          </MotionContainer>
        </MotionContainer>
      )}
    </AnimationPresenceMotion>
  );
};