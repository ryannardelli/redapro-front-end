import imageLogin from '../../assets/img/image-login.svg';
import { RouterLinks } from '../RouterLinks';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { showMessage } from "../../adapters/showMessage";
import { LoginSchema, type LoginFormData } from "../../schemas/LoginSchema";
import { useAuth } from "../../hooks/useAuth";
import { SpinnerLoading } from '../SpinnerLoading';
import { useNavigate } from 'react-router';

export function LoginForm() {
  const { login, state } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = await login(data.email, data.password);

      if(user.role === "admin") {
        navigate("/admin/setup");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      console.log(err);
      showMessage.error(err.message);
    }
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-0">
      {state.loading && <SpinnerLoading />}
      <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        
        <div className="md:max-w-md w-full px-4 py-4">
          <form onSubmit={onSubmit}>
            <div className="mb-12">
              <h1 className="text-slate-900 text-3xl font-bold">Entrar</h1>
              <p className="text-[15px] mt-6 text-slate-600">
                Não tem uma conta?  
                <RouterLinks href='/register' className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">
                  Cadastre-se aqui
                </RouterLinks>
              </p>
            </div>

            <div>
              <label className="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Digite seu email"
                  className={`w-full text-slate-900 text-sm border-b pl-2 pr-8 py-3 outline-none focus:border-blue-600 ${
                    errors.email ? "border-red-500" : "border-slate-300"
                  }`}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"></path>
                  </g>
                </svg>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mt-8">
              <label className="text-slate-900 text-[13px] font-medium block mb-2">Senha</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Digite sua senha"
                  className={`w-full text-slate-900 text-sm border-b pl-2 pr-8 py-3 outline-none focus:border-blue-600 ${
                    errors.password ? "border-red-500" : "border-slate-300"
                  }`}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
              
              {/* Link "Esqueceu a senha?" */}
              <div className="mt-2 text-right">
                <RouterLinks 
                  href="/forgot-password" 
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Esqueceu a senha?
                </RouterLinks>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>

        {/* Imagem lateral */}
        <div className="w-full h-96 flex items-center bg-[#000842] rounded-xl p-8">
          <img src={imageLogin} className="w-full aspect-[12/12] object-contain" alt="login-image" />
        </div>
      </div>
    </div>
  );
}

