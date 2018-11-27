import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Buscar..."
          onChange={this.handleSearch}
          value={this.state.search}
        />
      </form>
    );
  }
}
