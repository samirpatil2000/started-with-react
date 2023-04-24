import React, {useRef} from 'react'
import { cashfreeSandbox, Cashfree } from 'cashfree-dropjs';
import { Button } from '@mui/material';


const CASHFREE_COMPONETS = [ "order-details", "card", "app", "upi", "netbanking", "paylater", "creditcardemi", "debitcardemi", "cardlessemi",                                      ]

export default function CashFreeInt() {
  const dropinContainer = useRef(null);
  const style = {
      backgroundColor: "#ffffff",
      color: "#11385b", 
      fontFamily: "Lato",
      fontSize: "14px",
      errorColor: "#ff0000",
      theme: "light"      
  }
  let orderToken = "SimytC0MG4RkS4zP1ngU"
  const initiateDropIn = () => {
    let testCashfree = new cashfreeSandbox.Cashfree();
    testCashfree.initialiseDropin(dropinContainer.current, {
          orderToken : orderToken,
          onSuccess: handleSuccess,
          onFailure: handleFailure,
          components: CASHFREE_COMPONETS,
          style: style,
      })
    return
  }
  const handleSuccess = () => {
    console.log("Success")
  }
  const handleFailure = () => {
    console.log("Failure")
  }
  return (
    <div>
      <h1>Hello CashFree</h1>
      <Button onClick={initiateDropIn}>CashFreeDropIn</Button>
      <div ref={dropinContainer}></div>
    </div>
  )
}
