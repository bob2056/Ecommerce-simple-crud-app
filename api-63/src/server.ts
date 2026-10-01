// server from nodejs 
import http from "http";
import app from "./app";
import sequelize from "./config/sql"
import {Server} from "socket.io";
import { socketEvents } from "./services/SocketService";

// server application 
const httpServer = http.createServer(app)

// listen to the server 
// TODO: Pass these configurations from Environment
const HOST = "localhost"    // 127.0.0.1
// const HOST = "10.10.14.137";
const PORT = 9005;


// socket implementation 
const server = new Server(httpServer, {
  cors: {
    origin: "*"
  }
})
server.on("connection", socketEvents);


(async () => {
    try {
      await sequelize.authenticate();

      httpServer.listen(PORT, HOST, () => {
        console.log("Server is running on port: " + PORT);
        console.log("PRess CTRL + C to disconnect the server...");
      });

      // error
      httpServer.on("error", (err) => {
        console.error(err);
        process.exit(1);
      }); 
      console.log("********* SQL DB CONNECTED *********");
    } catch (exception) {
      console.error("Error while connecting SQL DB", exception);
      process.exit(1);
    }
  }
)();

// httpServer.listen(PORT, HOST, () => {
//   console.log("Server is running on port: "+PORT)
//   console.log("PRess CTRL + C to disconnect the server...")
// })

// // error
// httpServer.on("error", (err) => {
//   console.error(err);
//   process.exit(1);
// }) 