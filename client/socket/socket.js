import io from "socket.io-client";

// const socket = io();
const socket = io(import.meta.env.VITE_SERVER_BASE_URL, {
  transports: ["websocket"], // use webSocket only
});

export default socket;
