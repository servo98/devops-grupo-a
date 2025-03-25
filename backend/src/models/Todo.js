import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default model("Todo", todoSchema);
