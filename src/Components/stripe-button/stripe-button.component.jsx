import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HiFIVFvjKAeBp1I8CDBmWjZ6tS9vh2gE3qxcQ4dwIgsP6iVbeEZDxCupThkRYivlLFxzX8jNt3Gk08qW45MAgkt00O6qIodne";

    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    }

    return (
    <StripeCheckout 
        label="Pay now"
        name="CRWN clothing Ltd."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel = "pay Now"
        token = {onToken}
        stripeKey = {publishableKey}
    />
    
    )
}

export default StripeCheckoutButton;