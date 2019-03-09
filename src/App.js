import React, { Component } from 'react';
import './App.css';
import { PokeApi } from './services/PokeApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: []
    };

    this.paintPokemonList = this.paintPokemonList.bind(this);
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

  render() {
    const { pokeList } = this.state;
    return (
      <div className="app">
        <main className="app__main">
          <div className="app__main-wrapper">
          <button onClick={this.paintPokemonList}>PULSA AQUI</button>
            <ul className="app__main-list">
            {pokeList.map(pokemon => {
              return (
                <li key={pokemon.id}>{pokemon.name}</li>
              )
            })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
