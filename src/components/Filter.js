import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    const { getFilter } = this.props;

    return (
      <div className="filter-wrapper">
        <label htmlFor="filter">
          <input id="filter" type="text" placeholder="Filtra pokemons por nombre..." onKeyUp={getFilter} />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  getFilter: PropTypes.func.isRequired
};

export default Filter;