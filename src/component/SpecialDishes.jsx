import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";
// context
import { AllMenuContext } from "./AllMenuContext";

export default function SpecialDishes() {
  // global context
  let allMenus = useContext(AllMenuContext);
  let [showPopUp, setShowPopUp] = useState(false);
  // This value is coming from the CardDish component
  let [currentDish, setCurrentDish] = useState("");

  let [addToCardItem, setAddToCardItem] = useState([]);

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

  // add to cart handler

  function addToCartHandler(addToCartImg, addToCartTitle, addToCartId) {
    let newItemInAddToCart =  { addToCartTitle, addToCartId, addToCartImg } 

    setAddToCardItem((prevValuesInCart)=> [...prevValuesInCart,newItemInAddToCart])
  }


  
  let maxSpecialMenus = 8;
  let specialMenu = allMenus.map((menu, index) => {
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
          addToCartHandler={addToCartHandler}
        />
      )}
      <div className="container ">
        <AddToCart  addToCardItem = {addToCardItem}/>
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
