import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions.js"
import Pokemon from "../component/pokemon.js";

class PokemonContainer extends React.Component {
    render() {
        return (
            <Pokemon
            // Method to Load Bulbasaur
                handlePokemon={this.props.loadCharmander}
             // Method to Load Bulbasaur
                handlePokemon2={this.props.loadBulbasaur}
             // Method to Load Bulbasaur 
                handlePokemon3={this.props.loadSquirtle}
             // Method to Load Random Pokemon 
                handleRandomPokemon={this.props.loadRandom}
             // Variable to Store Pokemon
                pokemon={this.props.pokemon}
             // Variable to Store Pokemon2
                pokemon2={this.props.pokemon2}
             // Variable to Store Pokemon3
                pokemon3={this.props.pokemon3}
             // Variable to Store Random Pokemon
                pokemon4={this.props.pokemon4}>
            </Pokemon>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(PokemonContainer);