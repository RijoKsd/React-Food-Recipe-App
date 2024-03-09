import heroImage from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt="food" />
      <div className="hero-content">
        <h1>Its all about good food and taste</h1>

        <p>Discover our range of delicious food, freshly made everyday</p>
      </div>
    </div>
  );
}
