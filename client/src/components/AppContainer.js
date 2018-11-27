import React, { Component } from "react";

import { connect } from "react-redux";

import { getProducts } from "../actions/productsAction";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductHeader from "./ProductHeader";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  componentDidMount() {
    const page = this.props.match.params.page || 1;

    this.props.getProducts({
      query: this.state.query,
      limit: this.props.products.limit,
      page: page
    });
  }

  handleSubmit = query => {
    this.setState({ query: query });
    this.props.getProducts({
      query: query,
      limit: this.props.products.limit,
      page: 1
    });
  };

  handleLimit = limit => {
    this.props.history.push("/1");
    this.props.getProducts({
      page: 1,
      limit: limit,
      query: this.state.query
    });
  };

  handlePagination = page => {
    this.props.getProducts({
      page: page,
      limit: this.props.products.limit,
      query: this.state.query
    });
  };

  handleLoading = () => {
    if (this.props.loading) {
      return "Carregando resultados";
    } else {
      return (
        <div>
          <ProductHeader title={this.state.query} />
          <ProductList
            handleLimit={this.handleLimit}
            products={this.props.products}
            limit={this.props.products.limit}
            actualPage={this.props.products.currentPage}
            pages={this.props.products.pages}
            handlePagination={this.handlePagination}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar handleSubmit={this.handleSubmit} />
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(AppContainer);
