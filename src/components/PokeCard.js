import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokeCard extends Component {
    render() {
        const { myChoice } = this.props;
        const choiceId = this.props.match.params.id;

        if (myChoice.length > 0 && choiceId < myChoice.length) {
            const pokemon = myChoice[choiceId];

            return (
                <React.Fragment>
                    <div className="pokemon__wrapper">
                        <div className="pokemon__wrapper-fist">
                            <img className="pokemon__image" src={pokemon.image} alt={pokemon.name}></img>
                            <p className="pokemon__id">ID / {pokemon.id}</p>
                        </div>
                        <div className="pokemon__wrapper-second">
                            <h2 className="pokemon__name">{pokemon.name}</h2>
                            <p className="pokemon__height">{pokemon.height}</p>
                            <p className="pokemon__weight">{pokemon.weight}</p>
                            <ul className="pokemon__types">{pokemon.type.map((i, k) => { 
                                return <li className="pokemon__types-item" key={k}>{i}</li> })}
                            </ul>
                            <div className="pokemon__evolution">
                                <h3 className="pokemon__evolution-title">Evoluciona de:</h3>
                                <p className="pokemon__evolution-result">{pokemon.evolution}</p>
                            </div>
                        </div>
                        <div className="link"><Link className="router-link" to="/">Volver</Link></div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <p className="nofound">No has descubierto aún este pokemon</p>
                    <div className="link"><Link className="router-link" to="/">Volver</Link></div>
                </React.Fragment>
            )
        }
    }
}

export default PokeCard;