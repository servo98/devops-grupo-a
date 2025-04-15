import Stripe from "stripe";
import config from "./index.js";

console.log(config.STRIPE_SK);

const stripe = new Stripe(config.STRIPE_SK);

export default stripe;
