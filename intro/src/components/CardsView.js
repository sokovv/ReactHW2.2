import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

export default function CardsView({ products }) {
  return (
    <div className="CardsView">
      {products.map((product) => {
        return (
          <div className="ShopCard" key={uuidv4()} id={uuidv4()}>
            <h2> {product.name} </h2>
            <div className="color"> {product.color} </div>
            <img src={product.img} alt={product.name} width="300" />
            <div className="control">
              <div className="price"> $ {product.price} </div>
              <div className="addCard"> ADD TO CARD </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

CardsView.propTypes = {
  products: PropTypes.array,
};
