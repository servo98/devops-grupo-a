import api from "./api";

const createPaymentIntent = async (amount) => {
  return api.post("/payments/create-payment-intent", {
    amount,
  });
};

const getPaymentSecretById = async (paymentId) => {
  return api.get(`/payments/${paymentId}`);
};

export { createPaymentIntent, getPaymentSecretById };
