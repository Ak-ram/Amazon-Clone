import { CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BetaCart from "../../components/cart/beta cart/betaCart";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../stateProvider";
import "./payment.sass";
function Payment() {
  const [state] = useStateValue();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing("Processing");
  };

  const handleChange = (event) => {
    // listen for changes in the CardElement and display any errors as the customer types their card details
    setError(event.error ? event.error.message : "Everything seems good");
  };
  let items = state.basket.map((item) => {
    return (
      <BetaCart
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        rating={item.rating}
      />
    );
  });
  return (
    <section className="payment">
      <div className="container">
        <h1>
          Checkout(
          <Link to="/checkout">{state.basket?.length} items</Link>)
        </h1>
        {/* section 1*/}
        <address className="payment__section">
          <h3 className="payment__title">Delivary Address</h3>
          <div className="payment__address">
            <pre>
              Hello,
              {state.user ? state.user?.email : "what are you gonna buy today?"}
              <br /> 123 React lane
              <br /> Beni-Suef, Egypt.
            </pre>
          </div>
        </address>

        {/*section 2*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delevary</h3>
          </div>
          <div className="payment__items">
            {state.basket.length ? items : "Your cart is empty"}
          </div>
        </div>

        {/*section 3*/}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic will go*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <h4>
                  Subtotal ({state.basket.length} item): $
                  {getBasketTotal(state.basket).toFixed(2)}
                </h4>

                <button>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Error will displayed in the screen to the user like numbers errors*/}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
