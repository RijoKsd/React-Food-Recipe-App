import { useState, useEffect } from "react";

// components
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";

export default function App() {
  // state to hold the data from the API and display it in our special section
  let [menus, setMenus] = useState([]);
  // state to hold the data from the API and display it in our filtered section
  let [categories, setCategories] = useState([]);
  // state to hold the loading state of the data
  let [loading, setLoading] = useState(false);

  // fetch data from the API to display in our special section
  async function getAllMenus() {
    setLoading(true);
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=c`
    );
    let data = await response.json();
    setMenus(data.meals);
    setLoading(false);
  }

  // fetch data from the API to display in our filtered section
  async function getAllTheCategories() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let categoryData = await response.json();
    setCategories(categoryData.categories);
  }

  useEffect(() => {
    // call the functions to fetch the data from the API
    getAllMenus();
    getAllTheCategories();
  }, []);

  return (
    <div>
      <Hero />

      {!loading ? (
        <SpecialDishes specialMenus={menus} />
      ) : <Loader />}

      {!loading ? (
        <FilteredDishes categories={categories} allMenus={menus} />
      ) : null}
    </div>
  );
}
