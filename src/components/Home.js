import React, { useState } from "react";
import { connect } from "react-redux";
import data from "../data";

import { addCart } from "../actions/addAction";

const Home = (props) => {
  console.log(props);
  return (
    <div className="content">
      <ul className="products">
        {data.products.map((product, i) => (
          <li key={i}>
            <div className="product">
              <img
                className="product-image"
                src={product.image}
                alt="product1"
              />
              <div className="product-name">{product.name}</div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <a
                onClick={() => props.addCart(i)}
                className="addToCart"
                href="#"
              >
                Add to cart
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(null, { addCart })(Home);
