import io from "socket.io-client";

// const socket = io();
const socket = io("http://localhost:3001", {
  transports: ["websocket"], // use webSocket only
});

export default socket;
