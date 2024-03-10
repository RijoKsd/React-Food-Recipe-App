import React, { useState } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";

function FilteredDishes({ categories, allMenus, singleDish, setSingleDish }) {
  //   console.log("setSingleDish", setSingleDish);
  let [allMenu] = useState(allMenus);
  let [filteredDishes, setFilteredDishes] = useState([]);
  let [active, setActive] = useState("Beef");
  // For pagination
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(4);

  let indexOfLastItem = currentPage * itemsPerPage;

  //  1 * 4 = 4
  //  2 * 4 = 8
  //  3 * 4 = 12
  //  4 * 4 = 16

  let indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 4 - 4 = 0
  // 8 - 4 = 4
  // 12 - 4 = 8
  // 16 - 4 = 12

  let currentItems = filteredDishes.slice(indexOfFirstItem, indexOfLastItem); // total 4 items at a time

  // function to display single dish
  let singleDishItem = singleDish.map((item, key) => {
    return (
      <li key={key}>
        <img src={item.strMealThumb} alt={item.strMeal} className="br-10" />
        <h5>{item.strMeal}</h5>
      </li>
    );
  });

  // function to display the filtered dishes
  function showFilteredDishesHandler(categoryName) {
    setSingleDish([]);
    setActive(categoryName);
    let sortedDishes = allMenu
      .filter((menu) => {
        return menu.strCategory === categoryName;
      })
      .map((menu) => {
        return (
          <CardDish key={menu.idMeal}  menu = {menu}/>
        );
      });
    setFilteredDishes(sortedDishes);
  }

  //  map this data to display the categories
  let category = categories.map((category, key) => {
    return (
      <li
        className={category.strCategory === active ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(category.strCategory);
        }}
        key={key}
      >
        {" "}
        {category.strCategory}{" "}
      </li>
    );
  });

  return (
    <section className="filtered-dishes">
      <div className="container">
        <div className="filtered-dishes-content text-center">
          <h2>Choose your dishes</h2>
          <p>Discover exquisite dishes that enchant your palate.</p>
        </div>
        <div className="filtered-dishes-items">
          <ul className="flex flex-wrap text-white flex-center">{category}</ul>
        </div>
        <div className="filtered-dishes-menu">
          <ul className="flex flex-wrap gap-30 flex-center">
            {!singleDishItem.length && !filteredDishes.length ? (
              <div className="alert">
                <h3>Sorry, no dishes found</h3>
                <h4>Try another category</h4>
              </div>
            ) : (
              <>
                {singleDishItem}
                {currentItems}
              </>
            )}
          </ul>
        </div>
        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          setCurrentPage = {setCurrentPage}
         
        />
      </div>
    </section>
  );
}

export default FilteredDishes;
