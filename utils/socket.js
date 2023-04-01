import { io } from "socket.io-client";
const socket = io.connect("http://localhost:80");
export default socket
