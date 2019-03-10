import React, { Component } from "react";
import Filter from '../Filter';
import PokeList from '../PokeList';

class Main extends Component {
  render() {
    const { filterPokemons, getFilter } = this.props;

    return (
        <main className="main">
            <div className="main-wrapper">
                <Filter getFilter={getFilter}/>
                <PokeList filterPokemons={filterPokemons}/>
            </div>
        </main>
    );
  }
}

export default Main;