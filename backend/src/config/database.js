import mongoose from "mongoose";
import config from "./index.js";

mongoose.connection.on("open", () => {
  console.log("DB Connected");
});

mongoose.connection.on("error", (error) => {
  console.log("DB Connection Error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("DB Disconnected");
});

const connectDB = async () => {
  await mongoose.connect(config.MONGO_URI);
};

export default connectDB;
