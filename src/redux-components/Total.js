import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.total);
  return (
    <div>
      <h3>Total Component</h3>
      <h5>Total price: {total}</h5>
    </div>
  );
};

export default Total;
