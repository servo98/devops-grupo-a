import dotenv from "dotenv";

dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI,
  ENV: process.env.NODE_ENV || "development",
};

export default config;
