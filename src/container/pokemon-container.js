import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions.js"
import Pokemon from "../component/pokemon.js";

class PokemonContainer extends React.Component {
    render() {
        return (
            <Pokemon
                handlePokemon={this.props.loadCharmander}
                handlePokemon2={this.props.loadBulbasaur}
                handlePokemon3={this.props.loadSquirtle}
                pokemon={this.props.pokemon}
                pokemon2={this.props.pokemon2}
                pokemon3={this.props.pokemon3}>
            </Pokemon>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(PokemonContainer);