export const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
export const IS_API_LOADED = 'IS_API_LOADED';
export const ARE_DETAILS_LOADED = 'ARE_DETAILS_LOADED'
export const SET_POKEMON_DETAILS = 'SET_POKEMON_DETAILS';

export const setPokemonList = pokemonList => ({
  type: SET_POKEMON_LIST,
  pokemonList
})

export const setPokemonDetails = pokemonDetails => ({
  type: SET_POKEMON_DETAILS,
  pokemonDetails
})

export const isApiLoaded = apiLoaded => ({
  type: IS_API_LOADED, 
  apiLoaded
})

export const areDetailsLoaded = detailsLoaded => ({
  type: ARE_DETAILS_LOADED,
  detailsLoaded
})