import { combineReducers } from 'redux';
import { pokemonList, apiLoaded, pokemonDetails, detailsLoading, loadingSpecs } from "./pokemonListReducer";

export const rootReducer = combineReducers({
  pokemonList, 
  apiLoaded,
  pokemonDetails,
  detailsLoading,
  loadingSpecs
})