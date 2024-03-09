import { useState, useEffect } from "react";

export default function App() {
  let [menus, setMenus] = useState([]);

  async function getAllMenus() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=c`
    );
    let data = await response.json();
    setMenus(data.meals);
  }
  useEffect(() => {
    getAllMenus();
  }, []);

  return <div></div>;
}
