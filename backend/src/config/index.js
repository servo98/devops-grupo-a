import dotenv from "dotenv";

const hola = "mundo";

dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI,
};

export default config;
