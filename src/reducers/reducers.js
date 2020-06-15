let initialState = {
    pokemon: "Charmander"
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POKEMON1":
            return {
                ...state,
                pokemon: action.pokemon
           
            };
        case "POKEMON2":
            return {
                ...state,
                pokemon: action.pokemon,
       
            };
        case "POKEMON3":
            return {
                ...state,
                pokemon: action.pokemon,
               
            };
        default:
            return state;
    }
}

export default pokemonReducer;