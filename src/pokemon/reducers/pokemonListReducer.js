import { SET_POKEMON_LIST, 
         SET_POKEMON_DETAILS, 
         ARE_DETAILS_LOADING,
         IS_API_LOADING, 
         INCREASE_OFFSET} from "../actions/pokemonActionsList";


export const pokemonList = ( state = [] , action ) => {
  switch ( action.type ) {
    case SET_POKEMON_LIST:
      return [ ...state, ...action.pokemonList ]
    default:
      return state
  }
}

export const pokemonDetails = ( state = [], action ) => {
  switch ( action.type ) {
    case SET_POKEMON_DETAILS:
      return action.pokemonDetails
    default:
      return state
  }
}

export const apiLoading = ( state = false, action ) => {
  switch ( action.type ) {
    case IS_API_LOADING:
      return !state
    default:
      return state
  }
}

export const detailsLoading = ( state = false, action ) => {
  switch ( action.type ) {
    case ARE_DETAILS_LOADING:
      return !state
    default:
      return state
  }
}

export const loadingSpecs = ( state = { limit: 24, offset: 0 } , action ) => {
  switch ( action.type ) {
    case INCREASE_OFFSET:
      return { ...state, offset: state.offset + 24 }
    default:
      return state
  }
}
