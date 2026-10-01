import { Socket } from "socket.io";

export const socketEvents = (socket: Socket) => {
  // socket.emit("NEW_MESSAGE", { sender: loggedInUser?._id, receiver: user._id });
  socket.on("NEW_MESSAGE", (data) => {
    // network daata pass 
    socket.emit("NEW_MESSAGE_ACK", data)
    socket.broadcast.emit("NEW_MESSAGE_ACK", data)
  });
};