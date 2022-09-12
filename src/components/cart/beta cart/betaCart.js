import React from "react";
import { useStateValue } from "../../../stateProvider";
import "./betaCart.sass";
function BetaCart({ title, price, id, description, image }) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <main className="checkoutPage__product">
      <div className="checkoutPage__product--img">
        <img src={image} alt={title} />
      </div>
      <div className="checkoutPage__product--info">
        <strong>{title}</strong>
        <br />
        <p>{description}</p>
        <strong>${price}</strong>
        <button
          className="checkoutPage__product--remove cursor-pointer"
          onClick={removeFromBasket}
        >
          Remove from the cart
        </button>
      </div>
    </main>
  );
}

export default BetaCart;
