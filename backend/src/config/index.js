import dotenv from "dotenv";

dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI,
  ENV: process.env.NODE_ENV || "development",
  STRIPE_SK: process.env.STRIPE_SK,
};

export default config;
