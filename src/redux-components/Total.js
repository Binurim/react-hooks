import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.total);
  return (
    <div className="card">
      <h5 className="card-header">Total Component</h5>
      <div className="card-body">
        <h5>Total price: {total}</h5>
      </div>
    </div>
  );
};

export default Total;
