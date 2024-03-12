import { useState, useEffect } from "react";

// components
import Header from "./Header";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import {AllMenus} from "./AllMenuContext";


export default function App() {

  let [categories, setCategories] = useState([]);
  let [singleDish, setSingleDish] = useState([]);

  // fetch data from the API to display in our filtered section
  async function getAllTheCategories() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let categoryData = await response.json();
    setCategories(categoryData.categories);
  }

  async function getOnlyOneDish() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
    );
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  }

  useEffect(() => {
    // call the functions to fetch the data from the API
    getAllTheCategories();
    getOnlyOneDish();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <AllMenus>
        <SpecialDishes />
        <FilteredDishes
          categories={categories}
          singleDish={singleDish}
          setSingleDish={setSingleDish}
        />
      </AllMenus>
    </div>
  );
}
