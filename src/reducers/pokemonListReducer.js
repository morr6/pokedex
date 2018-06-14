import { SET_POKEMON_LIST } from "../actions/pokemonActionsList";
import { SET_POKEMON_DETAILS } from "../actions/pokemonActionsList";
import { IS_API_LOADED } from '../actions/pokemonActionsList';

export const pokemonList = ( state = [] , action ) => {
  switch ( action.type ) {
    case SET_POKEMON_LIST:
      return action.pokemonList
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

export const apiLoaded = ( state = false, action ) => {
  switch ( action.type ) {
    case IS_API_LOADED:
      return true
    default:
      return state
  }
}
