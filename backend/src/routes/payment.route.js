import { Router } from "express";
import {
  createPaymentIntent,
  getPaymentSecretById,
} from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter.post("/create-payment-intent", createPaymentIntent);
paymentRouter.get("/:paymentId", getPaymentSecretById);

export default paymentRouter;
