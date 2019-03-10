import React, { Component } from "react";
import PokeDetail from './PokeDetail';

class PokeList extends Component {
  render() {
    const { filterPokemons } = this.props;

    return (
        <ul className="main-list">
            {filterPokemons.map(pokemon => {
            return (
                <li className="main-list-item" key={pokemon.id}>
                    <PokeDetail pokemon={pokemon}/>
                </li>
            )
            })}
        </ul>
    );
  }
}

export default PokeList;