import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51JjLhsL8n04d34pH27tCwn3SmMVjz6Fr7mNmg46JL1C9xyVUbjtjF0XawD9z9a5Cjw27saYFC6UAMXhunOjgZduX00PhND0XPp'

      const onToken=token=>{ 
        console.log(token)
        alert('Payment succesful')
       }
    return(
     <StripeCheckout
     label='Pay Now'
     name='CRWN Clothing Ltd.'
     billingAddress
     shippingAddress
     currency="EUR"
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is  ${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     />   
    )
}

export  default StripeCheckoutButton