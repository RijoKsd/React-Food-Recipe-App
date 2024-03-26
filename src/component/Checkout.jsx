import { StateContext } from "../context/AppProvider"
import { useContext } from "react"
const Checkout = ()=>{
 
    const  {cartItems} = useContext(StateContext);
    let cartItemsAre = cartItems.map((item,index) => {
      return (
        <div className="checkout-item" key={ index}>
          <img src={item.img} alt={item.addToCartId} />
          <h6>{item.title} </h6>
        </div>
      );
    });
    return(
        <div className="checkout-wrapper">
          <h2 className="text-center ">Checkout</h2>
          <div className="checkout-items">
         {cartItemsAre}
          </div>
      </div> 
    )
}
export default Checkout