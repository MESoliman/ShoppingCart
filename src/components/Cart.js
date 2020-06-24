import React, { Fragment } from "react";
import { connect } from "react-redux";
import { updateQuantity, removeItem } from "../actions/updateQuantity";

function Cart(props) {
  console.log(props.cartProps.products);

  let itemsInCart = [];

  Object.keys(props.cartProps.products).forEach(function (item) {
    console.log(item);
    if (props.cartProps.products[item].inCart) {
      itemsInCart.push(props.cartProps.products[item]);
    }
  });
  console.log(itemsInCart);

  itemsInCart = itemsInCart.map((product, i) => {
    return (
      <Fragment key={i}>
        <div className="item">
          <ion-icon
            onClick={() => props.removeItem(product.id)}
            name="close-circle"
          ></ion-icon>
          <img src={product.image}></img>
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price}</div>
        <div className="quantity">
          <ion-icon
            onClick={() => props.updateQuantity("decrease", product.id)}
            className="decrease"
            name="remove-circle-outline"
          ></ion-icon>
          <span>{product.quantity}</span>
          <ion-icon
            onClick={() => props.updateQuantity("increase", product.id)}
            className="increase"
            name="add-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.quantity * product.price},00</div>
      </Fragment>
    );
  });

  return (
    <div className="items-container">
      <div className="items-header">
        <h5 className="item-title">Product</h5>
        <h5 className="price sm-hide">Price</h5>
        <h5 className="quantity">Quantity</h5>
        <h5 className="total">Total</h5>
      </div>
      <div className="items">{itemsInCart}</div>
      <div className="totalCostContainer">
        <h4 className="costTitle">subtotal: </h4>
        <h4 className="costTotal">${props.cartProps.cartCost},00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { updateQuantity, removeItem })(Cart);
