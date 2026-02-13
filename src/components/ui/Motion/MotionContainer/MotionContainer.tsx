import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface MotionContainerProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export const MotionContainer = ({
  children,
  className = "",
  ...props
}: MotionContainerProps) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};
