import express from "express";
import cors from "cors";
import todoRouter from "./routes/todo.route.js";

const api = express();

/**
 * Acá se registra la configuración de la API (moddlewares)
 */
api.use(cors());
api.use(express.json());

/**
 * Acá se registran los routers
 */

api.get("/", (req, res) => {
  res.json({
    mesage: "API Live!",
  });
});

api.use("/api/todos", todoRouter);

export default api;
