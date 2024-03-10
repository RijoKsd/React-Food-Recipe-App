import React from "react";

function CardDish({ menu }) {
  return (
    <li>
      <img src={menu.strMealThumb} alt={menu.strMeal} className="br-10" />
      <h5>{menu.strMeal}</h5>
    </li>
  );
}

export default CardDish;
