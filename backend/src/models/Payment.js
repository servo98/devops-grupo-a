import { model, Schema } from "mongoose";

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
});

export default model("Payment", paymentSchema);
