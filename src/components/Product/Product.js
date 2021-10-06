import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { name, price, stock, img, seller } = props.product;
  return (
    <div className="product">
      <div className="img-card">
        <img src={img} alt="" />
      </div>
      <div className="item-card">
        <h2 className="product-title">{name}</h2>
        <h4>{price}</h4>
        <p> by {seller}</p>
        <p> Only {stock} left in stock , order soon</p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="cart-btn"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
