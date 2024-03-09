import React, { useState } from "react";

function FilteredDishes({ categories, allMenus }) {
    let [allMenu] = useState(allMenus);

    let [filteredDishes, setFilteredDishes] = useState([]);

    // function to display the filtered dishes
    function showFilteredDishesHandler(categoryName) {
        let sortedDishes = allMenu
            .filter((menu) => {
                return menu.strCategory === categoryName;
            })
            .map((item, key) => {

                return (
                    <li key={key}>
                        <img src={item.strMealThumb} alt={item.strMeal} className="br-10" />
                        <h5>{item.strMeal}</h5>
                    </li>
                );
            });
        setFilteredDishes(sortedDishes);
    }

    //  map this data to display the categories
    let category = categories.map((category, key) => {
        return (
            <li
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
                    <ul className="flex flex-wrap text-white">{category}</ul>
                </div>
                <div className="filtered-dishes-menu">
                    <ul className="flex flex-wrap gap-30">{filteredDishes}</ul>
                </div>
            </div>
        </section>
    );
}

export default FilteredDishes;
