import { io } from "socket.io-client";
const socket = io.connect("http://34.141.29.214:80");
export default socket;
