import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteHandler = (index, price)=>{
    dispatch({type: 'DELETE', payload: {index, price}})
  }
  
  return (
    <div>
      <h3>Cart Component</h3>
      <ul>
        {cart.map((product, index) => {
          return <li key={index} onClick={()=>deleteHandler(index, product.price)}>{product.pName} </li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
