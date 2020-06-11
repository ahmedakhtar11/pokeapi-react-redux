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
                    {/* Pokemon 1 */}
                    <div>
                        <h4>Pokemon Details:</h4>
                        <strong>Name: </strong>
                        {this.props.pokemon.name}<br/>
                        <strong>Weight: </strong>
                        {this.props.pokemon.weight}<br/>
                        <strong>Height: </strong>
                        {this.props.pokemon.height}<br/>
                        <strong>Base Experience: </strong>
                        {this.props.pokemon.base_experience}<br/>
                    </div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${4}.png`}
                    alt={"charmander"}/>
                </div>
                <div>
                    <Button variant="danger" onClick={() => {this.props.handlePokemon()}}>Choose Charmander</Button>
                    <Button variant="success" onClick={() => {this.props.handlePokemon2()}}>Choose Bulbasaur</Button>
                    <Button variant="info" onClick={() => {this.props.handlePokemon3()}}>Choose Squirtle</Button>
                </div>
            </div>
        )
    }
}

export default Pokemon;