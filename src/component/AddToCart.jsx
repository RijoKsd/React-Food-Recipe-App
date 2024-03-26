import { StateContext } from "../context/AppProvider";
import { useContext } from "react";
const AddToCart = ({ addToCardItem }) => {
  const  {cartItems} = useContext(StateContext);

  console.log("rijo", cartItems)

  let cartItemsAre = cartItems.map((item,index) => {
    return (
      <div className="add-to-cart-item" key={ index}>
        <img src={item.img} alt={item.addToCartId} />
        <h6>{item.title} </h6>
      </div>
    );
  });
 
  // let addToCartData = addToCardItem.map((item) => {
  //   return (
  //     <div className="add-to-cart-item" key={item.addToCartId}>
  //       <img src={item.addToCartImg} alt={item.addToCartId} />
  //       <h6>{item.addToCartTitle} </h6>
  //     </div>
  //   );
  // });

  return (
    cartItemsAre.length >0 && <div className="add-to-cart-wrapper">
       {cartItemsAre} 
      </div>
  );
};

export default AddToCart;
