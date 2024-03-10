import React from "react";

function Header() {
  return (
    <header className="flex flex-center flex-between ">
      <a href="#logo" className="logo ">
        Food Palate
      </a>
      <nav>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#checkout">Checkout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
