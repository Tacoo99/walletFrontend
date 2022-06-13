import React, { useRef, useEffect } from "react";
import { ReactSession }  from 'react-client-session';

export default function Paypal() {
  const paypal = useRef();

  function Success(){
    let currUser = ReactSession.get("loggedUser");
    ReactSession.set("createWallet", currUser);
  }

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Możliwość tworzenia porfeli",
                amount: {
                  currency_code: "PLN",
                  value: 50.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          Success();
          console.log(order);
          window.location.href = "http://localhost:3000/success";
          
        },
        onError: (err) => {
          console.log(err);
          window.location.href = "http://localhost:3000/failed";
          
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
