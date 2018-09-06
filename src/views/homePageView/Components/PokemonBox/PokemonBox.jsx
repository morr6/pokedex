import React, {Component} from 'react';
import {NameWrapper, 
        PokemonImage, 
        PokemonWrapper } from './PokemonBox.s';     



export class PokemonBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        pokemon: [],
        isLoaded: false,
        error: null,
    }
  }

  render() {
    return (
      <PokemonWrapper>
        <PokemonImage 
          src={`https://img.pokemondb.net/artwork/${this.props.name}.jpg`} 
          alt='image' /> 
        <NameWrapper> { this.props.name } </NameWrapper> 
      </PokemonWrapper>         
    )
  }
}
