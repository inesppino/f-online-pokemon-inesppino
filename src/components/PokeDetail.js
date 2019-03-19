import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PokeDetail extends Component {
  render() {
    const { pokemon } = this.props;

    return (
        <div className="pokemon__wrapper">
            <Link className="router-link" to={`/pokemon/${pokemon.id}`}>   
                <div className="pokemon__wrapper-fist">
                    <img className="pokemon__image" src={pokemon.image} alt={pokemon.name}></img>
                    <p className="pokemon__id">ID / {pokemon.id}</p>
                </div>
            </Link>
                <div className="pokemon__wrapper-second">
                    <h2 className="pokemon__name">{pokemon.name}</h2>
                    <ul className="pokemon__types">{pokemon.type.map((i, k) => { 
                        return <li className="pokemon__types-item" key={k}>{i}</li> })}
                    </ul>
                    <div className="pokemon__evolution">
                        <h3 className="pokemon__evolution-title">Evoluciona de:</h3>
                        <p className="pokemon__evolution-result">{pokemon.evolution}</p>
                    </div>
                </div>
            
        </div>
    );
  }
}

export default PokeDetail;