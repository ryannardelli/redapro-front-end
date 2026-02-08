import { toast } from "react-toastify";

export const showMessage = {
  success: (msg: string, quick = false) =>
    toast.success(msg, {
      autoClose: quick ? 1000 : 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      closeOnClick: true,
      draggable: true,
    }),

  error: (msg: string, quick = false) =>
    toast.error(msg, {
      autoClose: quick ? 1000 : 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      closeOnClick: true,
      draggable: true,
    }),

  warn: (msg: string, quick = false) =>
    toast.warning(msg, {
      autoClose: quick ? 1000 : 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      closeOnClick: true,
      draggable: true,
    }),

  info: (msg: string, quick = false) =>
    toast.info(msg, {
      autoClose: quick ? 1000 : 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      closeOnClick: true,
      draggable: true,
    }),

  dismiss: () => toast.dismiss(),
};