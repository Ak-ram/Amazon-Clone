import React from "react";
import { Link } from "react-router-dom";
import BetaCart from "../../components/cart/beta cart/betaCart";
import Subtotal from "../../components/subtotal/subtotal";
import { useStateValue } from "../../stateProvider";
import "./checkout.sass";

function Checkout() {
  const [state] = useStateValue();
  let emptyCart = (
    <div className="backToShoppingPage">
      <img src="https://vividparts.com/site_assets/images/empty_cart.gif" />
      <Link to='/'>Back to Shopping page</Link>
    </div>
  );
  return (
    <div className="checkoutPage container">
      <header className="checkoutPage__header">
        <h1>Shopping Cart</h1>
        <Subtotal />
      </header>
      <div className="checkoutPage__breadcrumb">
        <div>
          Hello,{" "}
          {state.user === null
            ? "what are you gonna buy today?"
            : state.user.displayName}{" "}
        </div>
        <div>{state.basket.length} items in the bag</div>
      </div>
      <section className="checkoutPage__betaCardWrapper">
        {state.basket.length
          ? state.basket.map((item, index) => {
              return (
                <BetaCart
                  key={(item.title + index).toString()}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                  image={item.image}
                />
              );
            })
          : emptyCart}
      </section>
    </div>
  );
}

export default Checkout;
