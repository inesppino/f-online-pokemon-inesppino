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
    this.getPokemons = this.getPokemons.bind(this);

  }

  // componentDidMount() {
  //   this.paintPokemonList();
  // }

  paintPokemonList() {
    let pokemonUrl = [];
    PokeApi().then(data => {
      data.results.map(item => {
        const getUrl = fetch(item.url).then(response => response.json());
        getUrl.then(data => {
          pokemonUrl.push(data);
          this.getPokemons(pokemonUrl);
        })
      });
    });
  }

  getPokemons(data){
    let pokemonData = [];
    
    data.map(poke => {
      let types = [];
      poke.types.map(pokeTypes => {
        return types.push(pokeTypes.type.name);
      })

      let pokemonJson = {
        'id': poke.id,
        'name': poke.name,
        'type': types,
        'image': poke.sprites.front_default
      }

      pokemonData.push(pokemonJson);

      this.setState({
        pokeList: pokemonData.sort(((a, b) => a.id - b.id))
      })

      return pokemonData;
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
      <React.Fragment>
        <div className="page">
          <header>
            <div className="triangle t-left"></div>
            <div className="triangle t-right"></div>
          </header>
          <main className="main">
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
                  <li className="main-list-item" key={pokemon.id}>
                    <div className="pokemon__wrapper">
                      <img className="pokemon__image" src={pokemon.image} alt={pokemon.name}></img>
                      <div className="pokemon__id">ID / {pokemon.id}</div>
                      <h2 className="pokemon__name">{pokemon.name}</h2>
                      <ul className="pokemon__types">{pokemon.type.map((i, k) => { 
                        return <li className="pokemon__types-item" key={k}>{i}</li> 
                        })}</ul>
                    </div>
                  </li>
                )
              })}
              </ul>
            </div>
          </main>
          <footer>
            <div className="circle c-left"></div>
            <div className="circle c-right"></div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
