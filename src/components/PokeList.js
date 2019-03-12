import React, { Component } from "react";
import PokeDetail from './PokeDetail';

class PokeList extends Component {
  render() {
    const { filterPokemons, havePokemons } = this.props;
    
    if( havePokemons && filterPokemons.length > 0 ){
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
    } else {
      return <p className="no-data">No hay datos</p>
    }
  }
}

export default PokeList;