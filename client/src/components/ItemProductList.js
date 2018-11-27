import React from "react";
import "../App.css";

import { formatPrice, calculatePrice } from "./../utils/price";

const ItemProductList = props => (
  <a className="item-product-list" href="#">
    <div className="product-images">
      <img src={props.product.images[0]} alt={props.product.name} />
      <img src={props.product.images[1]} alt={props.product.name} />
      <img src={props.product.images[2]} alt={props.product.name} />
      <img src={props.product.images[3]} alt={props.product.name} />
    </div>
    <div className="product-infos">
      <div>
        <div className="product-name">{props.product.name}</div>
        <div className="font-weight-light product-category">
          <span className="product-brand">{props.product.brand}</span>
          <span> · </span>
          <span className="product-size">{props.product.size}</span>
        </div>
      </div>
      <div className="product-price">
        <span className="product-old-price">
          R$ {formatPrice(props.product.price)}
        </span>{" "}
        por{" "}
        <span className="product-discount">
          R$ {calculatePrice(props.product.price, props.product.discount)}
        </span>
      </div>
    </div>
  </a>
);

export default ItemProductList;
