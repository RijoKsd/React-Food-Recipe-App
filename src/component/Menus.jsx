
// components
import Header from "./Header";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenuContext";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AllMenus>
        <SpecialDishes />
        <FilteredDishes />
      </AllMenus>
    </div>
  );
}
