import React, { Component } from "react";

class PokeDetail extends Component {
  render() {
    const { pokemon } = this.props;

    return (
        <div className="pokemon__wrapper">
            <div className="pokemon__wrapper-fist">
                <img className="pokemon__image" src={pokemon.image} alt={pokemon.name}></img>
                <p className="pokemon__id">ID / {pokemon.id}</p>
            </div>
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