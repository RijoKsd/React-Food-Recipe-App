const AddToCart = ({ addToCardItem }) => {
  let addToCartData = addToCardItem.map((item) => {
    return (
      <div className="add-to-cart-item" key={item.addToCartId}>
        <img src={item.addToCartImg} alt={item.addToCartId} />
        <h6>{item.addToCartTitle} </h6>
      </div>
    );
  });

  return (
    addToCardItem.length > 0 && (
      <div className="add-to-cart-wrapper">{addToCartData}</div>
    )
  );
};

export default AddToCart;
