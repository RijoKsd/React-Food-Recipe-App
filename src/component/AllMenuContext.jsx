import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export const AllMenuContext = React.createContext();

export const AllMenus =(props) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    // call the functions to fetch the data from the API
    getAllMenus();
  }, []);

  return (
    <AllMenuContext.Provider value={menus}>
      {!loading ? props.children : <Loader />}
    </AllMenuContext.Provider>
  );
};
