import React from "react";
import "./productCart.sass";
import { useStateValue } from "../../../stateProvider";
function ProductCart(props) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        ...props,
      },
    });
  };
  return (
    <div class=" page-wrapper">
      <div class="page-inner">
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <img class="img" src={props.image} alt={props.title} />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">{props.title.slice(0, 10)}</span>
                  <span class="p-company">{props.speed}</span>
                </div>
                <div class="a-size">
                  <p>{props.rating.rate}</p>
                  <span class="size">
                    {Array(Math.round(props.rating.rate)).fill("⭐")}
                  </span>
                </div>
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <div class="cart" href="#d" onClick={addToBasket}>
                <span class="price">${props.price}</span>
                <span class="add-to-cart">
                  <span class="txt">Add in cart</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
