import React, { Component } from "react";
import { Container } from "reactstrap";

import Products from "./Products";
import ProductDropdown from "./ProductDropdown";
import ProductPagination from "./ProductPagination";

class ProductList extends Component {
  render() {
    const { products, results } = this.props.products;

    return (
      <Container>
        <div className="products-quantity">{results} produtos encontrados</div>
        <Products products={products} />
        <div className="product-list-options">
          <ProductDropdown
            limit={this.props.limit}
            handleLimit={this.props.handleLimit}
          />
          <ProductPagination
            actualPage={this.props.actualPage}
            pages={this.props.pages}
            handlePagination={this.props.handlePagination}
          />
        </div>
      </Container>
    );
  }
}

export default ProductList;
