// import { io } from "socket.io-client";

// export const socket = io("http://localhost:8080", {
//     withCredentials: true,
//     autoConnect: false
// })

import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const socket = io(SOCKET_URL, {
  withCredentials: true,
  autoConnect: false
});