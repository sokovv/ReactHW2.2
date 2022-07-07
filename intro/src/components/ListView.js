import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

export default function ListView({ products }) {
  return (
    <div className="ListView">
      {products.map((product) => {
        return (
          <div className="ShopItem" key={uuidv4()} id={uuidv4()}>
            <img src={product.img} alt={product.name} width="100" />
            <h3> {product.name} </h3>
            <div className="color"> {product.color} </div>
            <div className="price"> $ {product.price} </div>
            <div className="addCard"> ADD TO CARD </div>
          </div>
        );
      })}
    </div>
  );
}

ListView.propTypes = {
  products: PropTypes.array,
};
