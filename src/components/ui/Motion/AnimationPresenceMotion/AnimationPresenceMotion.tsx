import { AnimatePresence } from 'framer-motion';

type AnimationPresenceMotion = {
    children: React.ReactNode;
}

export function AnimationPresenceMotion({ children }: AnimationPresenceMotion) {
    return(
        <AnimatePresence>
            {children}
        </AnimatePresence>
    );
}