import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Cart Component</h3>
      <ul>
        {cart.map((product, index) => {
          return <li key={index}>{product.pName} </li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
