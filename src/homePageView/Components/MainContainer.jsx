import React from 'react';
import {Component} from 'react';
import { MainBox,
    PokemonsContainer,
    LoadMorePokemons, } from '../ComponentsStyles/MainContainer.s'
import { PokemonBox } from './PokemonBox.jsx'
import { Link } from 'react-router-dom'
import { FetchErrorMassage } from '../Components/FetchErrorMessage';
import { connect } from 'react-redux'
import { setPokemonList, isApiLoaded } from "../../actions/pokemonActionsList";

class PokemonContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            initialPokemonsNumber: 24,
        }
    }

    componentDidMount() { 
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ this.state.initialPokemonsNumber }`)
        .then(res => res.json())
        .then(
          (result) => {
            this.props.setPokemonList(result.results.map( pokemon => pokemon.name ))
            this.props.isApiLoaded()
          },
          (error) => {
            this.props.isApiLoaded()
            this.setState({ error })
          }
        )  
    }        

    LoadMorePokemons() {
        this.setState({ initialPokemonsNumber: this.state.initialPokemonsNumber + 24 })
    }
    
    render() {
      console.log(this.props.apiLoaded)
        const { error } = this.state;
        return (
        <MainBox>
            <PokemonsContainer>

                { 
                    error ? <FetchErrorMassage /> : 
                    !this.props.apiLoaded ? <div> Loading... </div> :
                    this.props.pokemonList.map( (pokemon,key) =>
                          <Link key={key} style={{color:'black'}} to={`/${pokemon}`}> 
                              <PokemonBox key={key} name={ pokemon } /> 
                          </Link>
                      )   
                }
                { this.props.apiLoaded && !error ? 
                    <LoadMorePokemons onClick={ () => this.LoadMorePokemons() }>
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
});

const mapDispatchToProps = dispatch => ({
  setPokemonList: pokemonList => dispatch(setPokemonList(pokemonList)),
  isApiLoaded: loaded => dispatch(isApiLoaded(loaded))
});

export const VisiblePokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonContainer)