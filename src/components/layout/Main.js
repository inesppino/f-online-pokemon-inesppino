import React, { Component } from "react";
import Filter from '../Filter';
import PokeList from '../PokeList';

class Main extends Component {
  render() {
    const { filterPokemons, getFilter, havePokemons } = this.props;

    return (
        <main className="main">
            <div className="main-wrapper">
                <Filter getFilter={getFilter}/>
                <PokeList filterPokemons={filterPokemons} havePokemons={havePokemons}/>
            </div>
        </main>
    );
  }
}

export default Main;