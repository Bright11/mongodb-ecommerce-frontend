import "./Cartpage.css";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Delete } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useIncreaseCartMutation,
  useRemoveFromCartMutation,
  useDecreaseCartProductMutation,
} from "../services/appApi";
//import strip
import { loadStripe } from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from './CheckoutForm';
//the end
 ///cart page
function Cartpage({ setShownav }) {
  setShownav(true);
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const userCartObj = user.cart;
  let cart = products.filter((product) => userCartObj[product._id] != null);

  const [increaseCart] = useIncreaseCartMutation();
  const [decreaseCart] = useDecreaseCartProductMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [myerror, setMyerror] = useState("")
  function handleDecreas( product) {
    const quantity = user.cart.count;
    if (quantity ===1)
      //return setMyerror("Cant proccess this request without standard quantity");
       return toast.success("Success Notification !", {
         position: toast.POSITION.TOP_RIGHT,
       });
     
    decreaseCart(product);
  }
//working on payment with strip
  const stripePromise = loadStripe(
    "pk_test_zGzG82rJJHUcZxAv2R4vhDkM00Cp3kfLXR"
  );
  //the end
  
  return (
    <div className="cartpage">
      <div className="cartpage-content">
        {myerror}
        <h1>Shopping cart</h1>
        {cart.length === 0 ? (
          <div className="emptycart">Your Cart is empty</div>
        ) : (
          <div className="cartflex">
            {cart.length > 0 && (
              <div className="cartitems">
                <div className="cart-left">
                  {cart.map((c) => (
                    <div className="cartdata">
                      <img
                        className="cartimg"
                        src={c.pictures[0].url}
                        alt={c.name}
                      />
                      <div className="cartinfo">
                        <div className="cartnames">
                          <p>{c.name}</p>

                          <p>Price {c.price}</p>
                          <p>Total price&nbsp;{c.price * user.cart[c._id]}</p>
                        </div>
                        <div className="cartactions">
                          <div
                            className="deletecart"
                            onClick={() =>
                              increaseCart({
                                ProductId: c._id,
                                price: c.price,
                                userId: user._id,
                              })
                            }
                          >
                            Increase
                          </div>
                          <div
                            className="deletecart decreasecart"
                            onClick={() =>
                              handleDecreas({
                                productId: c._id,
                                price: c.price,
                                userId: user._id,
                              })
                            }
                          >
                            Decreased
                          </div>
                          <div
                            className="deletecart"
                            onClick={() =>
                              removeFromCart({
                                productId: c._id,
                                price: c.price,
                                userId: user._id,
                              })
                            }
                          >
                            <Delete /> Delete
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="payment-flex">
                    <p>Enter your credit card</p>
                    <Elements stripe={stripePromise}>
                      <CheckoutForm/>
                    </Elements>
                </div>
              </div>
            )}
          </div>
        )}
        <p>Total $ {user.cart.total}</p>
      </div>
    </div>
  );
}

export default Cartpage