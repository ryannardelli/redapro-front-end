import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import { ArrowLeft } from "lucide-react";
import animationData from "@assets/animation/error_404.json";

const NotFound = () => {
  const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#FDFDFD] px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute -top-20 -left-10 text-[20rem] font-bold text-gray-50 opacity-[0.4] select-none">
          404
        </span>
      </div>

      <div className="z-10 w-full max-w-2xl text-center">
        <div className="mx-auto w-64 h-64 sm:w-80 sm:h-80 mb-8">
          <Lottie
            animationData={animationData}
            loop
            className="drop-shadow-sm"
          />
        </div>

        <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
          Página <span className="font-serif italic text-indigo-600">não encontrada</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-500 max-w-lg mx-auto">
          O conteúdo que você procura parece ter se movido para outra dimensão ou o link foi digitado incorretamente.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6">
          <button
            onClick={handleBack}
            className="group flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white shadow-xl hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para onde estava
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;