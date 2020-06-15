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

export function changePokemon(pokemon, id){
    return{
        type:"POKEMON1",
        pokemon:pokemon,

    }
}

export function changePokemon2(pokemon, id){
    return{
        type:"POKEMON2",
        pokemon:pokemon,
    
    }
}

export function changePokemon3(pokemon, id){
    return{
        type:"POKEMON3",
        pokemon:pokemon,
    
    }
}
