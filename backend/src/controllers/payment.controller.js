import Payment from "../models/Payment.js";
import stripe from "../config/stripeConfig.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
const createPaymentIntent = async (req, res) => {
  // Creamos intento de pago
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "MXN",
    payment_method_types: ["card"],
  });

  // Guardamos el intento el la db
  const payment = await Payment.create({
    amount: req.body.amount,
    secret: paymentIntent.client_secret,
  });

  // Regresamos el clientSecret para poder confirmar la compra en el front
  return res.json({
    msg: "Intento de pago",
    paymentId: payment._id,
    clientSecret: paymentIntent.client_secret,
  });
};

/**
 * @deprecated Esto ya no se usa
 * @param {@} req
 * @param {*} res
 * @returns
 */
const getPaymentSecretById = async (req, res) => {
  const payment = await Payment.findById(req.params.paymentId);

  if (!payment) {
    res.status(404).json({
      msg: "Payment intent not found",
    });
  }

  return res.json({
    clientSecret: payment.secret,
  });
};

export { createPaymentIntent, getPaymentSecretById };
