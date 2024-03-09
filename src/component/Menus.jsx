import { useState, useEffect } from "react";

// components
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

export default function App() {
  // state to hold the data from the API and display it in our special section
  let [menus, setMenus] = useState([]);
  // state to hold the data from the API and display it in our filtered section
  let [categories, setCategories] = useState([]);
  // state to hold the loading state of the data
  let [loading, setLoading] = useState(true);

  // fetch data from the API to display in our special section
  async function getAllMenus() {
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
      ) : (
        <div className="loader">
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <linearGradient id="a12">
                <stop offset="0" stopColor="#ffcf5b" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#ffcf5b"></stop>
              </linearGradient>
              <circle
                fill="none"
                stroke="url(#a12)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="0 44 0 44 0 44 0 44 0 360"
                cx="100"
                cy="100"
                r="70"
                transform-origin="center"
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="discrete"
                  dur="2"
                  values="360;324;288;252;216;180;144;108;72;36"
                  repeatCount="indefinite"
                ></animateTransform>
              </circle>
            </svg>
            Loading...
          </h1>
        </div>
      )}
      {!loading ? (
        <FilteredDishes categories={categories} allMenus={menus} />
      ) : null}
    </div>
  );
}
