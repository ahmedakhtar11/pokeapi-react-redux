import React from "react";
import Button from 'react-bootstrap/Button';

class Pokemon extends React.Component {

    componentDidMount() {
        this.props.handlePokemon()
        this.props.handlePokemon2()
        this.props.handlePokemon3()
        this.props.handleRandomPokemon()
    }

    render() {
        return (
            <div className="wrapper">
                <h2>React Engineer Challenge:</h2>
                {/* Pokemon1 */}
                <div className="pokemons">
                    <div>
                        <strong>Pokemon#: </strong>{this.props.pokemon.id}<br />
                        <strong>Name: </strong>
                        {this.props.pokemon.name}<br />
                        <strong>Weight: </strong>
                        {this.props.pokemon.weight}<br />
                        <strong>Height: </strong>
                        {this.props.pokemon.height}<br />
                        <strong>Base Experience: </strong>
                        {this.props.pokemon.base_experience}<br />
                        <img height={150} width={150} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`}
                            alt={"pokemon1"} />
                    </div>
                </div>
                {/* Pokemon2 */}
                <div className="pokemons">
                    <div>
                        <strong>Pokemon#: </strong>{this.props.pokemon2.id}<br />
                        <strong>Name: </strong>
                        {this.props.pokemon2.name}<br />
                        <strong>Weight: </strong>
                        {this.props.pokemon2.weight}<br />
                        <strong>Height: </strong>
                        {this.props.pokemon2.height}<br />
                        <strong>Base Experience: </strong>
                        {this.props.pokemon2.base_experience}<br />
                        <img height={150} width={150} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon2.id}.png`}
                            alt={"pokemon2"} />
                    </div>
                </div>
                {/* Pokemon3 */}
                <div className="pokemons">
                    <div>
                        <strong>Pokemon#: </strong>{this.props.pokemon3.id}<br />
                        <strong>Name: </strong>
                        {this.props.pokemon3.name}<br />
                        <strong>Weight: </strong>
                        {this.props.pokemon3.weight}<br />
                        <strong>Height: </strong>
                        {this.props.pokemon3.height}<br />
                        <strong>Base Experience: </strong>
                        {this.props.pokemon3.base_experience}<br />
                        <img height={150} width={150} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon3.id}.png`}
                            alt={"pokemon3"} />
                    </div>
                </div>
                {/* Pokemon4 */}
                <div className="pokemons">
                    <div>
                        <strong>Pokemon#: </strong>{this.props.pokemon4.id}<br />
                        <strong>Name: </strong>
                        {this.props.pokemon4.name}<br />
                        <strong>Weight: </strong>
                        {this.props.pokemon4.weight}<br />
                        <strong>Height: </strong>
                        {this.props.pokemon4.height}<br />
                        <strong>Base Experience: </strong>
                        {this.props.pokemon4.base_experience}<br />
                        <img height={150} width={150} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon4.id}.png`}
                            alt={"randompokemon"} />
                    </div>
                    <Button variant="info" onClick={() => { this.props.handleRandomPokemon() }}>Load Random</Button>
                </div>
            </div>
        )
    }
}

export default Pokemon;