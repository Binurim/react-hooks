import { Component } from "react";
import { connect } from "react-redux";

class PurchaseClass extends Component {
  render() {
    return (
      <div className="Card">
        <h3>Purchase Class Component</h3>
        <select onChange={(e) => this.props.purchaseHandler(e)}>
          {this.props.products.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.pName} - ${product.price}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

const actionPurchase = (e) => {
  let pName = e.target.options[e.target.selectedIndex].text;
  let price = e.target.value;
  let obj = { pName, price };
  return { type: "PURCHASE", payload: obj };
};

/** Anytime the store is updated this func will be called */
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseHandler: (e) => {
      dispatch(actionPurchase(e));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseClass);
