import React, { useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";

export default function SpecialDishes({ specialMenus }) {
  let [showPopUp, setShowPopUp] = useState(false);
  // This value is coming from the CardDish component
  let [currentDish, setCurrentDish] = useState("");

  //  function to show the popup
  function showPopupHandler(dishName) {
    setShowPopUp(true);
    setCurrentDish(dishName);
  }
  // console.log(currentDish);

  //  function to close the popup
  function closePopupHandler() {
    setShowPopUp(false);
  }

  let maxSpecialMenus = 8;
  let specialMenu = specialMenus.map((menu, index) => {
    if (index >= maxSpecialMenus) return null;

    return (
      // reusable component
      <CardDish
        key={menu.idMeal}
        menu={menu}
        showPopupHandler={showPopupHandler}
      />
    );
  });

  return (
    <section className="special-dishes bg-primary">
      {showPopUp && (
        <Popup
          closePopupHandler={closePopupHandler}
          currentDish={currentDish}
          allDishes = {specialMenus}
        />
      )}
      <div className="container ">
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Indulge in an unforgettable dining experience with our fresh and
            authentic cuisine.
          </p>
        </div>
        <div className="special-dishes-items">
          <ul className="flex flex-wrap gap-30 flex-center">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
}
