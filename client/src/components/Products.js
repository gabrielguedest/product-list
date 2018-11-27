import React from "react";

import ItemProductList from "./ItemProductList";

const Products = props => (
  <div className="products">
    {props.products &&
      props.products.map(product => (
        <ItemProductList product={product} key={product._id} />
      ))}
  </div>
);

export default Products;
