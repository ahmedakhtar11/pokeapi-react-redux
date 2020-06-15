let initialState = {
    pokemon: "Charmander",
    id: 0
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POKEMON1":
            return {
                ...state,
                pokemon: action.pokemon,
                id:action.id
           
            };
        case "POKEMON2":
            return {
                ...state,
                pokemon: action.pokemon,
                id:action.id
       
            };
        case "POKEMON3":
            return {
                ...state,
                pokemon: action.pokemon,
                id:action.id
               
            };
        case "POKEMON4":
            return {
                ...state,
                pokemon: action.pokemon,
                id:action.id
                
            };
        default:
            return state;
    }
}

export default pokemonReducer;