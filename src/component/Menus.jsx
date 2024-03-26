//  import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Header from "./Header";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../context/AppProvider";

export default function App() {
  return (
    <div>
      <Router>
        <AppProvider>
          <Header />
          <Hero />
          <Routes>
            {/*  this is the home page */}
            <Route
              exact
              path="/"
              element={
                <AllMenus>
                  <SpecialDishes />
                  <FilteredDishes />
                </AllMenus>
              }
            ></Route>
            {/*  this is the checkout page */}
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}
