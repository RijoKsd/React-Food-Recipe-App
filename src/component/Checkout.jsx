import { StateContext } from "../context/AppProvider"
import { useContext } from "react"
const Checkout = ()=>{
 
    const  {cartItems} = useContext(StateContext);

 
  
    let cartItemsAre = cartItems.map((item,index) => {
      return (
        <div className="add-to-cart-item" key={ index}>
          <img src={item.img} alt={item.addToCartId} />
          <h6>{item.title} </h6>
        </div>
      );
    });
    return(
        <div className="checkout-wrapper">
       
        <div className="checkout-item">
         {cartItemsAre}
         
        </div>
      </div> 
    )
}
export default Checkout