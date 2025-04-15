import { useState } from "react";
import stripePromise from "../utils/stripeConfig";

// import { PaymentElement, useStripe } from "@stripe/react-stripe-js";

// import { useState } from "react";
// import { CheckoutProvider } from "@stripe/react-stripe-js";
import {
  createPaymentIntent,
  //   getPaymentSecretById,
} from "../services/payment.service";

// const CheckoutForm = () => {
//   return (
//     <form>
//       <PaymentElement />
//       <button>Submit</button>
//     </form>
//   );
// };

// const Payment = () => {
//   const [amount, setamount] = useState(0);
//   const [paymentId, setPaymentId] = useState(null);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await createPaymentIntent(amount * 100);
//       const { paymentId } = data;
//       setPaymentId(paymentId);

//       console.log(data);
//     } catch (error) {
//       console.error("Error al crear intento de pago");
//       console.error(error);
//     }
//   };

//   const fetchClientSecret = async () => {
//     try {
//       const { data } = await getPaymentSecretById(paymentId);
//       return data.clientSecret;
//     } catch (error) {
//       console.error("Error al obtener client secret por payment id");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       {!paymentId ? (
//         <form>
//           <label htmlFor="amount">Cantidad</label>
//           <input
//             id="amount"
//             type="number"
//             name="amount"
//             value={amount}
//             onChange={(e) => {
//               setamount(e.target.value);
//             }}
//           />

//           <button type="submit" onClick={handleSubmit}>
//             Crear Pago
//           </button>
//         </form>
//       ) : (
//         <>
//           <button>Pagar</button>
//           <CheckoutProvider
//             stripe={stripePromise}
//             options={{ fetchClientSecret }}
//           >
//             <CheckoutForm />
//           </CheckoutProvider>
//         </>
//       )}
//     </>
//   );
// };

// export default Payment;

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  // Iniciamos stripe (sus estados sus hooks etc)
  const stripe = useStripe();
  const elements = useElements();
  // Estado para saber el estado del pago
  const [status, setStatus] = useState("");

  // Función para hacer el pago
  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO crear payment intent llamando a nuestra API
    const { data } = await createPaymentIntent(4400);

    const { clientSecret } = data;

    // Confirmamos pago con la info de la tarjeta de los elements de stripe y con el clientSecret de la api
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    // Si hay error en el pago
    if (result.error) {
      console.error(result.error);
      setStatus(`Error ${result.paymentIntent.status}`);
    } else {
      // Si el pago es realizado de manera exitosa
      if (result.paymentIntent.status === "succeeded") {
        setStatus("Pago exitoso");
      }
    }
  };

  return (
    // Formulario que ejecuta el pago
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      <p> status {status}</p>
    </form>
  );
};

// Componente que contiene el provider de stripe, todo lo relacionado a pagos debe estar dentro de este componente
const PaymentComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;
