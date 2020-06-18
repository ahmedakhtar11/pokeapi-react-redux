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
            return axios.get("https://pokeapi.co/api/v2/pokemon/"+rand).then((response)=>{
                  dispatch(randomPokemon(response.data));
                  console.log(response)
        })
    }
}

export function changePokemon(pokemon){
    return{
        type:"POKEMON1",
        pokemon:pokemon,
    }
}

export function changePokemon2(pokemon2){
    return{
        type:"POKEMON2",
        pokemon2:pokemon2,
    }
}

export function changePokemon3(pokemon3){
    return{
        type:"POKEMON3",
        pokemon3:pokemon3,
    }
}

export function randomPokemon(pokemon4){
    return{
        type:"POKEMON4",
        pokemon4:pokemon4,
    }
}