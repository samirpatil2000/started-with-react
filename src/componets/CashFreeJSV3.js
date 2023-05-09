import React from 'react'
import {load} from '@cashfreepayments/cashfree-js';



export default async function CashFreeJSV3() {
    const cashfree = await load({
        mode: "sandbox" //or production
    });
    console.log("Hello YYYY")
    let options = {
        values: {               
            upiId: "rohit@icici"
        }
      };
      let component = cashfree.create("upiCollect", options);
        return (
            <div id="componentContainer">
      <h1>Hello CashFree NEW</h1>
      <div></div>
    </div>
    )
}
