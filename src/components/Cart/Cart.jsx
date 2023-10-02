import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
function Cart() {
  const products = useSelector((state) => state.cart.products);
  const total = () => {
    let totalVal = 0;
    products.forEach((item) => (totalVal += item.quantity * item.price));
    return totalVal.toFixed(2);
  };
  const url = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const dispatch = useDispatch();
  const handlePayment = async () => {
    const stripePromise = loadStripe(
      "pk_test_51Nw9oZSHobIQ96CRbmApobwCTi2WCzNN9jS81bTNOB10qjKAHTYbGkzeVo9XaA1r8sbt18hkt4ej8UluZhTiM6e000DVN3rfEU"
    );
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
    }
  };
  return (
    <div className="cart">
      <h1>Products In Your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={url + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} X {item.price.toFixed(2)} = $
              {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      ;
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>
      <button onClick={handlePayment}>Proceed To checkOut</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
