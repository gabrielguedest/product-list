import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class ProductPagination extends Component {
  renderPages = () => {
    const maxBlocks = 5;
    const { pages } = this.props;

    const actualPage = parseInt(this.props.actualPage);

    switch (true) {
      case pages < maxBlocks:
        return this.renderItems(1, pages);
      case actualPage <= 2:
        return this.renderItems(1, maxBlocks);
      case actualPage > 2 && actualPage <= pages - 2:
        return this.renderItems(actualPage - 2, actualPage + 2);
      case actualPage > pages - 2 && actualPage < pages:
        return this.renderItems(actualPage - 3, actualPage + 1);
      case actualPage === pages:
        return this.renderItems(actualPage - 4, pages);
      default:
        return;
    }
  };

  renderItems = (param1, param2) => {
    const items = [];

    for (let i = param1; i <= param2; i++) {
      items.push(
        <div
          key={i}
          className={
            parseInt(this.props.actualPage) === i
              ? "pagination-item-active"
              : "pagination-item"
          }
        >
          <Link to={"/" + i} onClick={() => this.props.handlePagination(i)}>
            {i}
          </Link>
        </div>
      );
    }

    return items;
  };

  render() {
    return <div className="pagination">{this.renderPages()}</div>;
  }
}
