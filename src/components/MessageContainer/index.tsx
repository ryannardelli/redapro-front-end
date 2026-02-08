import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Não esqueça do CSS base!

type MessageContainerProps = {
    children: React.ReactNode;
}

export function MessageContainer({ children }: MessageContainerProps) {
    return (
        <>
            {children}
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
                toastClassName="custom-toast" 
            />
        </>
    );
}