import React from 'react';
import { cashfreeSandbox, Cashfree } from 'cashfree-dropjs';

const Payment = () => {
  const paymentSessionId = "session_0Ruzhs9jKcRRDTePI3IquOkiYkrWDsnwtZ3-Xi2tw7YloeQg5HVVkJze-PpYdC3AuPlRnMHVctnXpChQJZ_NtA25ZbkslDtAO0_D1MnNQUZT";

  const success = function(data) {
    if (data.order && data.order.status === "PAID") {
      console.log("Success");
    } else {
      //order is still active
      alert("Order is ACTIVE");
    }
  }

  const failure = function(data) {
    alert(data.order.errorText);
  }

  const onPayClick = () => {
    const dropConfig = {
      "components": [
        "order-details",
        "card"
      ],
      "onSuccess": success,
      "onFailure": failure,
      "style": {
        "backgroundColor": "#ffffff"
      }
    };

    const cashfree = new Cashfree(paymentSessionId);
    cashfree.drop("payment-form", dropConfig);
  };

  return (
    <div>
      <div id="payment-form"></div>
      <button onClick={onPayClick}>Pay</button>
    </div>
  );
}

export default Payment;
