import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51Nh1XELJdmUZimAWIFfdfhVpzVW9nH0XjkGbyONJwVS1M9TiuhZAo9vqQhZfeZGPf2aHq1VnI5nh0EXnNYufCG1m00PMEjXTSn"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
