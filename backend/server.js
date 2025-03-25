import http from "http";
import api from "./src/api.js";
import connectDB from "./src/config/database.js";

const server = http.createServer(api);

connectDB();

server.on("listening", () => {
  console.log("Server is listening on port 8081");
});

server.listen(8081);
