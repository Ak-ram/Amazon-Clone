import React from "react";
import { useStateValue } from "../../stateProvider";
import "./carousel.scss";
function CheckoutCard() {
  const [state] = useStateValue();
  const handlePostion = (e) => {
    const item = e.target.closest("Li");
    let items = document.getElementsByClassName("carousel__item");
    let itemPosition = item.getAttribute("data-pos");
    Object.values(items).forEach((ele) => {
      if (ele.getAttribute("data-pos") === "0") {
        ele.setAttribute("data-pos", itemPosition);
        item.setAttribute("data-pos", "0");
      }
    });
  };
  let item = state?.basket.map((item, index) => {
    return (
      <li class="carousel__item" data-pos={index} onClick={handlePostion}>
        <img width="100%" src={item.image} alt={item.title} />
      </li>
    );
  });
  return (
    <div class="carousel">
      <ul
        className={
          state.basket.length ? "expand carousel__list" : "carousel__list"
        }
      >
        {item}
      </ul>
    </div>
  );
}

export default CheckoutCard;
