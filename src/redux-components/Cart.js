import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteHandler = (index, price)=>{
    dispatch({type: 'DELETE', payload: {index, price}})
  }
  
  return (
    <div className="card">
      <h5 className="card-header">Cart Component</h5>
      <div className="card-body">
        <ul>
          {cart.map((product, index) => {
            return (
              <li
                key={index}
                onClick={() => deleteHandler(index, product.price)}
              >
                {product.pName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
