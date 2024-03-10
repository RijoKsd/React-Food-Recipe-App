import CardDish from "./CardDish";

export default function SpecialDishes({ specialMenus }) {
  let maxSpecialMenus = 8;
  let specialMenu = specialMenus.map((menu, index) => {
    if (index >= maxSpecialMenus) return null;

    return (
      // reusable component
      <CardDish key={menu.idMeal} menu={menu} />
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
        <div className="special-dishes-items"  >
          <ul className="flex flex-wrap gap-30 flex-center">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
}
