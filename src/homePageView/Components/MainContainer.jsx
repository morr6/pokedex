import React from 'react';
import {Component} from 'react';
import { MainBox, PokemonsContainer, LoadMorePokemons } from '../ComponentsStyles/MainContainer.s'
import { PokemonBox } from './PokemonBox.jsx'
import { Link } from 'react-router-dom'

export class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isApiLoaded: false,
            pokemons: [],
            initialPokemonsNumber: 24
        }
    }

    componentDidMount() { 
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.initialPokemonsNumber}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isApiLoaded: true,
              pokemons: result.results    
            }); 
          },
          (error) => {
            this.setState({
              isApiLoaded: true,
              error
            }); 
          }
        )  
    }
 
    LoadMorePokemons() {
        this.setState({ initialPokemonsNumber: this.state.initialPokemonsNumber += 24 })
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.initialPokemonsNumber}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isApiLoaded: true,
                pokemons: result.results    
              }); 
            },
            (error) => {
              this.setState({
                isApiLoaded: true,
                error
              }); 
            }
          )  
    }

    

    render() { 
        const { error, isApiLoaded, isPokemonsLoaded } = this.state;
        return (
        <MainBox>
            <PokemonsContainer>

                { 
                    error ? <div> Error: { error.message } </div> : 
                    !isApiLoaded ? <div> Loading... </div> :
                    this.state.pokemons.map( (pokemon,key) => 
                        <Link key={key} style={{color:'black'}} to={`/${pokemon.name}`}> 
                            <PokemonBox key={key} name={ pokemon.name } /> 
                        </Link>
                    )   
                }
                <LoadMorePokemons onClick={ () => this.LoadMorePokemons() } >
                    Load more pokemons 
                </LoadMorePokemons>
            </PokemonsContainer>
        </MainBox>
        )
    }  
}