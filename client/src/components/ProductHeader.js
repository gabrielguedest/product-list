import React from "react";

const ProductHeader = props => (
  <div className="product-header">
    <p className="display-4 product-search-name">
      {props.title ? props.title : "Lista de produtos"}
    </p>
  </div>
);

export default ProductHeader;
