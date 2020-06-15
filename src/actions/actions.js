import axios from "axios";

export function loadCharmander(){
    return(dispatch)=>{
            return axios.get("https://pokeapi.co/api/v2/pokemon/4").then((response)=>{
                  dispatch(changePokemon(response.data));
                  console.log(response)
        })
    }
}

export function loadBulbasaur(){
    return(dispatch)=>{
            return axios.get("https://pokeapi.co/api/v2/pokemon/1").then((response)=>{
                  dispatch(changePokemon2(response.data));
                  console.log(response)
        })
    }
}

export function loadSquirtle(){
    return(dispatch)=>{
            return axios.get("https://pokeapi.co/api/v2/pokemon/7").then((response)=>{
                  dispatch(changePokemon3(response.data));
                  console.log(response)
        })
    }
}

export function loadRandom(){
    return(dispatch)=>{
        const rand = Math.floor(Math.random() * 20)
            return axios.get("https://pokeapi.co/api/v2/pokemon").then((response)=>{
                  dispatch(randomPokemon(response.data.results[rand]));
                  console.log(response)
        })
    }
}

export function changePokemon(pokemon){
    return{
        type:"POKEMON1",
        pokemon:pokemon,
        id:pokemon.id

    }
}

export function changePokemon2(pokemon){
    return{
        type:"POKEMON2",
        pokemon:pokemon,
        id:pokemon.id
    }
}

export function changePokemon3(pokemon){
    return{
        type:"POKEMON3",
        pokemon:pokemon,
        id:pokemon.id
    }
}

export function randomPokemon(pokemon, rand){
    return{
        type:"POKEMON4",
        pokemon:pokemon
    }
}