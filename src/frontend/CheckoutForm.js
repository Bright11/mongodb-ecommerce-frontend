import {CardElement, useElements,useStripe} from "@stripe/react-stripe-js"
import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from "../services/appApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CheckoutForm.css";
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState("");
  const [myerror, setMyerror] = useState("");
    
  const [createOrder, { isLoading, isError,isSuccess }] = useCreateOrderMutation();
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
    const [paying, setPaying] = useState(false);

    async function handlepay(e) {
       e.preventDefault()
        if (!stripe || !elements || user.cart.count <= 0) return;
        setPaying(true);
        const { client_secret } = await fetch(
          "http://localhost:1000/orderspayment/payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer",
            },
            
            body: JSON.stringify({ amount: user.cart.total }),
          }
        ).then((res) => res.json());
       const { paymentIntent } = await stripe.confirmCardPayment(
         client_secret,
         {
           payment_method: {
             card: elements.getElement(CardElement),
           },
         }
       );
       //after payment
       setPaying(false)
       if (paymentIntent) {
           createOrder({ userId: user._id, cart: user.cart, address, country }).then((res) => {
               if (!isLoading && !isError) {
                   setAlertMessage(`Payment ${paymentIntent.status}`);
                   setMyerror('Success')
                   setTimeout(() => {
                       navigate("/orders");
                   }, 2000)
               } 
           });
       }
        
  }

  return (
    <div className="checkoutForm">
      <div className="allertdiv">
        <p>{myerror}</p>
        {alertMessage && toast.error("errors messages")}
        <p> {alertMessage}</p>
      </div>
      <div className="orderform">
        <form onSubmit={handlepay}>
          <label>First Name</label>
          <input
            type="text"
            placehlder="First Name"
            value={user.name}
            disabled
          />
          <label>Email</label>
          <input type="text" placehlder="Email" value={user.email} disabled />
          <label>Address</label>
          <input
            type="text"
            placehlder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label>Country</label>
          <input
            type="text"
            placehlder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <label htmlFor="Card-element">Card</label>
          <CardElement id="card-element" />
          <button
            type="submit"
            disabled={user.cart.count <= 0 || paying || isSuccess}
          >
            {paying ? "Proccessing..." : "Pay"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm