import React, { Component } from 'react';
import './App.css';
import { PokeApi } from './services/PokeApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      query: '',
    };

    this.paintPokemonList = this.paintPokemonList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  paintPokemonList() {
    PokeApi().then(data => {
      const newPokeList = data.results.map((item, index) => {
        return { ...item, id: index+1 };
      });
      this.setState({
        pokeList: newPokeList
      });
    });
  }

  getFilter(e){
    const query = e.currentTarget.value;
    this.setState({
      query: query
    })
  }

  filterPokemons(){
    const { pokeList, query } = this.state;
    return pokeList.filter(pokemon => {
      const name = pokemon.name.toUpperCase().includes(query.toUpperCase());
      return name;
    })
  }

  render() {
    return (
        <main className="main">
          <div className="triangle t-left"></div>
          <div className="triangle t-right"></div>
          <div className="circle c-left"></div>
          <div className="circle c-right"></div>
          <div className="main-wrapper">
          <div className="filter-wrapper">
            <label htmlFor="filter">
              <input id="filter" type="text" placeholder="Filtra pokemons por nombre..." onKeyUp={this.getFilter} />
            </label>
          </div>
          <button onClick={this.paintPokemonList}>PULSA AQUI</button>
            <ul className="main-list">
            {this.filterPokemons().map(pokemon => {
              return (
                <li className="main-list-item" key={pokemon.id}>{pokemon.name}</li>
              )
            })}
            </ul>
          </div>
        </main>
    );
  }
}

export default App;
