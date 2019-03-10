import React, { Component } from 'react';
import './App.css';
import { PokeApi } from './services/PokeApi';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      havePokemons: false,
      pokeList: [],
      query: '',
    };

    this.paintPokemonList = this.paintPokemonList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
    this.getSavedLocalStorage = this.getSavedLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getSavedLocalStorage();
  }

  saveLocalStorage(idNumber, pokeList){
    localStorage.setItem(pokeList, JSON.stringify(idNumber))
  }
  
  getSavedLocalStorage(){
    if(localStorage.getItem('poke') !== null){
      const savePokemon = JSON.parse(localStorage.getItem('poke'));
      this.setState({
        pokeList: savePokemon,
        havePokemons: true
      })
    } else {
      this.paintPokemonList();
    }
  }

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
    })
    .catch(error => alert(`Ha ocurrido un error: ${error}`));
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
        pokeList: pokemonData.sort(((a, b) => a.id - b.id)),
        havePokemons: true
      })

      return pokemonData;
    });
    
    this.saveLocalStorage(this.state.pokeList,'pokeList');
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
          <Header />
          <Main filterPokemons={this.filterPokemons()} getFilter={this.getFilter}/>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
