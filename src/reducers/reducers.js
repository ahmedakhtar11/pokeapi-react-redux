// Initial State:
let initialState = {
    pokemon: "Charmander",
    pokemon2: "Bulbasaur",
    pokemon3: "Squirtle",
    pokemon4: "Random",
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POKEMON1":
            return {
                ...state,
                pokemon: action.pokemon,
            };
        case "POKEMON2":
            return {
                ...state,
                pokemon2: action.pokemon2,
            };
        case "POKEMON3":
            return {
                ...state,
                pokemon3: action.pokemon3,
            };
        case "POKEMON4":
            return {
                ...state,
                pokemon4: action.pokemon4,
            };
        default:
            return state;
    }
}

export default pokemonReducer;