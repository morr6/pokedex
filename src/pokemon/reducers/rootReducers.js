import { combineReducers } from 'redux';
import { pokemonList, apiLoading, pokemonDetails, detailsLoading, loadingSpecs } from "./pokemonListReducer";

export const rootReducer = combineReducers({
  pokemonList, 
  apiLoading,
  pokemonDetails,
  detailsLoading,
  loadingSpecs
})