export const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
export const IS_API_LOADING = 'IS_API_LOADING';
export const ARE_DETAILS_LOADING = 'ARE_DETAILS_LOADING'
export const SET_POKEMON_DETAILS = 'SET_POKEMON_DETAILS';
export const INCREASE_OFFSET = 'INCREASE_OFFSET';

export const setPokemonList = pokemonList => ({
  type: SET_POKEMON_LIST,
  pokemonList
})

export const setPokemonDetails = pokemonDetails => ({
  type: SET_POKEMON_DETAILS,
  pokemonDetails
})

export const isApiLoading = apiLoading => ({
  type: IS_API_LOADING, 
  apiLoading
})

  export const areDetailsLoading = detailsLoading => ({
  type: ARE_DETAILS_LOADING,
  detailsLoading
})

export const increaseOffset = loadingSpecs => ({
  type: INCREASE_OFFSET,
  loadingSpecs
})