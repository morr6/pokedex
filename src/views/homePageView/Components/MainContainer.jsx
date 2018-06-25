import React from 'react';
import {Component} from 'react';
import { MainBox,
    PokemonsContainer,
    LoadMorePokemons, } from '../ComponentsStyles/MainContainer.s'
import { PokemonBox } from './PokemonBox.jsx'
import { Link } from 'react-router-dom'
import { FetchErrorMessage } from '../Components/FetchErrorMessage';
import { connect } from 'react-redux'
import { setPokemonList, isApiLoading, increaseOffset } from "../../../pokemon/actions/pokemonActionsList";
import { LoadingMessage } from './LoadingMessage'

class PokemonContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        }
    }

    fetchApi() {
        
        this.props.isApiLoading()

        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ this.props.loadingSpecs.limit }&offset=${ this.props.loadingSpecs.offset }`)
        .then(res => res.json())
        .then(
          (result) => {
            this.props.setPokemonList(result.results.map( pokemon => pokemon.name ))

            if (!this.props.loadingSpecs.offset) {
                this.props.increaseOffset()
            }

            this.props.isApiLoading()
          },
          (error) => {
            this.props.isApiLoading()
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
        return this.props.apiLoading ? <LoadingMessage/> :
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
                      error ? <FetchErrorMessage /> :
                      this.renderContent()  
                  }
                  
                  { !this.props.apiLoading && !error &&
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
  apiLoading: state.apiLoading,
  loadingSpecs: state.loadingSpecs
});

const mapDispatchToProps = dispatch => ({
  setPokemonList: pokemonList => dispatch(setPokemonList(pokemonList)),
  isApiLoading: apiLoading => dispatch(isApiLoading(apiLoading)),
  increaseOffset: loadingSpecs => dispatch(increaseOffset(loadingSpecs))
});

export const VisiblePokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonContainer)