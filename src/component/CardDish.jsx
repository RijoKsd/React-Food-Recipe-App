import React from "react";

function CardDish({ menu, showPopupHandler}) {

  return (
    <li>
      <button onClick={()=>{
        showPopupHandler(menu.strMeal);
      }}>
      <img src={menu.strMealThumb} alt={menu.strMeal} className="br-10" />
      <h5>{menu.strMeal}</h5>
      </button>
    </li>
  );
}

export default CardDish;
