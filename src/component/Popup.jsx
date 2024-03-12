import React, { useContext } from "react";
import { AllMenuContext } from "./AllMenuContext";

function Popup({ closePopupHandler, currentDish }) {
  let allMenus = useContext(AllMenuContext);
  let dishDetails = allMenus
    .filter((menuItem) => {
      return menuItem.strMeal === currentDish;
    })
    .map((item, key) => {
      return (
        <div key={key} className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h5 className="popup-header-category"> {item.strCategory}</h5>
          </div>
          <h3 className="text-white">{item.strMeal}</h3>
          <p className="text-white">{item.strInstructions}</p>

          <ul className="dish-ingredients flex">
            <li> {item.strIngredient1} </li>
            <li> {item.strIngredient2}</li>
            <li> {item.strIngredient3}</li>
            <li> {item.strIngredient4}</li>
          </ul>
        </div>
      );
    });
  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}

        {/* <h5 className="text-white dish-price">Price: $10</h5> */}
        <button className="cta-btn">Order Now </button>
        <h5 className="popup-content-close" onClick={closePopupHandler}>
          Close
        </h5>
      </div>
    </div>
  );
}

export default Popup;
