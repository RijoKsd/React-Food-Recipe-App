export default function SpecialDishes({ specialMenus }) {
  let maxSpecialMenus = 8;
  let specialMenu = specialMenus.map((menu, key) => {
    if (key >= maxSpecialMenus) return null;

    return (
      <li key={key}>
        <img src={menu.strMealThumb} alt={menu.strMeal} className="br-10" />
        <h5>{menu.strMeal}</h5>
      </li>
    );
  });

  return (
    <section className="special-dishes bg-primary">
      <div className="container ">
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Indulge in an unforgettable dining experience with our fresh and
            authentic cuisine.
          </p>
        </div>
        <div className="special-dishes-items">
          {/* special menus goes here */}
          <ul className="flex flex-wrap gap-30 flex-center">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
}
