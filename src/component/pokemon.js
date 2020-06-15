import React from "react";
import Button from 'react-bootstrap/Button';

class Pokemon extends React.Component {

    componentDidMount() {
        this.props.handlePokemon()
    }

    render() {
    
        return (
            <div className="wrapper">
                <h2>React Engineer Challenge:</h2>
                <div className="pokemons">
                    <div>
                        <h4>Pokemon Details:</h4>
                        <strong>Pokemon#: </strong>{this.props.id}<br/>
                        <strong>Name: </strong>
                        {this.props.pokemon.name}<br/>
                        <strong>Weight: </strong>
                        {this.props.pokemon.weight}<br/>
                        <strong>Height: </strong>
                        {this.props.pokemon.height}<br/>
                        <strong>Base Experience: </strong>
                        {this.props.pokemon.base_experience}<br/>
                    </div>
                    <img height={200} width = {200} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}
                    alt={"pokemon"}/>
                </div>
                <div>
                    <Button variant="danger" onClick={() => {this.props.handlePokemon()}}>Choose Charmander</Button>
                    <Button variant="success" onClick={() => {this.props.handlePokemon2()}}>Choose Bulbasaur</Button>
                    <Button variant="info" onClick={() => {this.props.handlePokemon3()}}>Choose Squirtle</Button>
                    <Button variant="warning" onClick={() => {this.props.handleRandomPokemon()}}>Load Random</Button>
                </div>
            </div>
        )
    }
}

export default Pokemon;