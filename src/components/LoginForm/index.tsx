import imageLogin from '../../assets/img/image-login.svg'
import { RouterLinks } from '../RouterLinks';

export function LoginForm() {
    return(
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-0">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <form>
              <div className="mb-12">
                <h1 className="text-slate-900 text-3xl font-bold">Entrar</h1>
                <p className="text-[15px] mt-6 text-slate-600">Não tem uma conta  <RouterLinks href='/register' className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">
                      Cadastre-se aqui
                </RouterLinks></p>
              </div>

              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="text" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Digite seu email" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-8">
                <label className="text-slate-900 text-[13px] font-medium block mb-2">Senha</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Digite sua senha" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-sm" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                    Lembrar-me
                  </label>
                </div>
                <div>
                  <RouterLinks href='/forgot-password' className='text-blue-600 font-medium text-sm hover:underline'>
                      Esqueceu a senha?
                  </RouterLinks>
                </div>
              </div>

              <div className="mt-12">
                <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                  Entrar
                </button>
              </div>

              <div className="my-6 flex items-center gap-4">
                <hr className="w-full border-slate-300" />
                <p className="text-sm text-slate-900 text-center">ou</p>
                <hr className="w-full border-slate-300" />
              </div>

              <div className="space-x-8 flex justify-center">
                <button type="button" className="border-0 outline-0 cursor-pointer">
                   <svg
        className="w-5 h-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3033_94454)">
          <path
            d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
            fill="#4285F4"
          />
          <path
            d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
            fill="#34A853"
          />
          <path
            d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
            fill="#FBBC04"
          />
          <path
            d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_3033_94454">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
                    </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="w-full h-96 flex items-center bg-[#000842] rounded-xl p-8">
            <img src={imageLogin} className="w-full aspect-[12/12] object-contain" alt="login-image" />
          </div>
        </div>
      </div>
    );
}