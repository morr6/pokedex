import React from 'react';
import {Component} from 'react';
import { MainBox,
    PokemonsContainer,
    LoadMorePokemons, } from '../ComponentsStyles/MainContainer.s'
import { PokemonBox } from './PokemonBox.jsx'
import { Link } from 'react-router-dom'
import { FetchErrorMassage } from '../Components/FetchErrorMessage';
import { connect } from 'react-redux'
import { setPokemonList, isApiLoaded, increaseOffset } from "../../../pokemon/actions/pokemonActionsList";
import { LoadingMessage } from './LoadingMessage'

class PokemonContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        }
    }

    fetchApi() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ this.props.loadingSpecs.limit }&offset=${ this.props.loadingSpecs.offset }`)
        .then(res => res.json())
        .then(
          (result) => {
            this.props.setPokemonList(result.results.map( pokemon => pokemon.name ))

            if (!this.props.loadingSpecs.offset) {
                this.props.increaseOffset()
            }

            this.props.isApiLoaded()
          },
          (error) => {
            this.props.isApiLoaded()
            this.setState({ error })
          }
        )  
    }

    componentWillMount() { 
        if (!this.props.pokemonList.length) { 
            this.fetchApi()
        }
    }        

    LoadMorePokemons() {
        this.props.increaseOffset()
        this.fetchApi();
    }

    renderContent() {
        return !this.props.apiLoaded ? <LoadingMessage/> :
          this.props.pokemonList.map((pokemon, key) =>
            <Link key={key} style={{color: 'black'}} to={`/${pokemon}`}>
              <PokemonBox key={key} name={pokemon}/>
            </Link>
          ) 
    }
  
      render() {
          const { error } = this.state;
          return (
          <MainBox>
              <PokemonsContainer>
  
                  {
                      error ? <FetchErrorMassage /> :
                      this.renderContent()
                  }
  
                  { this.props.apiLoaded && !error &&
                      <LoadMorePokemons onClick={ () => this.LoadMorePokemons() }>
                          Load more pokemons
                      </LoadMorePokemons>
                  }
  
              </PokemonsContainer>
          </MainBox>
        )
    }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  apiLoaded: state.apiLoaded,
  loadingSpecs: state.loadingSpecs
});

const mapDispatchToProps = dispatch => ({
  setPokemonList: pokemonList => dispatch(setPokemonList(pokemonList)),
  isApiLoaded: apiLoaded => dispatch(isApiLoaded(apiLoaded)),
  increaseOffset: loadingSpecs => dispatch(increaseOffset(loadingSpecs))
});

export const VisiblePokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonContainer)