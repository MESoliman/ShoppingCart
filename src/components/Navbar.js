import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(props);
  return (
    <header className="header">
      <div className="header-main">
        <Link to="/"> Shopping </Link>
      </div>
      <div>
        <span>{props.cartProps.itemsInCart} items in cart</span>
      </div>
      <div className="header-link">
        <Link to="/cart"> Cart </Link>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
