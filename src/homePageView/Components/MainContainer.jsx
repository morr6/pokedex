import React from 'react';
import {Component} from 'react';
import { MainBox,
    PokemonsContainer,
    LoadMorePokemons, } from '../ComponentsStyles/MainContainer.s'
import { PokemonBox } from './PokemonBox.jsx'
import { Link } from 'react-router-dom'
import { FetchErrorMassage } from '../Components/FetchErrorMessage';
import { connect } from 'react-redux'
import { setPokemonList, isApiLoaded, loadMorePokemons } from "../../actions/pokemonActionsList";
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
          (result) => {console.log(result)
            this.props.setPokemonList(result.results.map( pokemon => pokemon.name ))

            if (!this.props.loadingSpecs.offset) {
                this.props.loadMorePokemons()
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
        this.props.loadMorePokemons()
        this.fetchApi();
    }
    
    render() {
      console.log(this.props.pokemonList)
        const { error } = this.state;
        return (
        <MainBox>
            <PokemonsContainer>

                { 
                    error ? <FetchErrorMassage /> : 
                    !this.props.apiLoaded ? <LoadingMessage/> :
                    this.props.pokemonList.map( (pokemon,key) =>
                          <Link key={key} style={{color:'black'}} to={`/${pokemon}`}> 
                              <PokemonBox key={key} name={ pokemon } /> 
                          </Link>
                      )   
                }
                { this.props.apiLoaded && !error ? 
                    <LoadMorePokemons onClick={ () => this.LoadMorePokemons('mewtwo','mew') }>
                        Load more pokemons 
                    </LoadMorePokemons> : null
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
  loadMorePokemons: loadingSpecs => dispatch(loadMorePokemons(loadingSpecs))
});

export const VisiblePokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonContainer)