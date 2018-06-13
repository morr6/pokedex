import React from 'react';
import {Component} from 'react';
import { MainBox, 
    PokemonsContainer, 
    LoadMorePokemons, 
    SortingButton,
    SortingButtonsBox } from '../ComponentsStyles/MainContainer.s'
import { PokemonBox } from './PokemonBox.jsx'
import { Link } from 'react-router-dom'
import { FetchErrorMassage } from '../Components/FetchErrorMessage'

export class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isApiLoaded: false,
            pokemons: [],
            initialPokemonsNumber: 24,
            findInputValue: '',
            pyk: []
        }
    }

    componentDidMount() { 
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=806`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isApiLoaded: true,
              pokemons: result.results.map( pokemon => pokemon.name )
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
    }
    
    SortFromA() {
      this.setState({ pokemon: this.state.pokemons.sort() })
    }
    SortFromZ() {
      this.setState({ pokemon: this.state.pokemons.sort().reverse() })
    }

    pyk(event) {
      this.setState({ findInputValue: event.target.value })

      this.setState({ pokemons:
        this.state.pokemons.filter( pokemon => 
          pokemon.slice(0,this.state.findInputValue.length) === this.state.findInputValue )
      })

    }
        

    render() { 
      console.log(this.state.pokemons)
        const { error, isApiLoaded } = this.state;
        return (
        <MainBox>
            <PokemonsContainer>
              
            <input onChange={ (event) => this.pyk(event) } style={{ float:'left' }}/>
                { isApiLoaded && !error ? 
                    <SortingButtonsBox>
                      <SortingButton onClick={ () => this.SortFromA() }> Sort from A to Z </SortingButton>
                      <SortingButton onClick={ () => this.SortFromZ() }> Sort from Z to A </SortingButton>
                    </SortingButtonsBox> : null
                }
                { 
                    error ? <FetchErrorMassage /> : 
                    !isApiLoaded ? <div> Loading... </div> :
                    this.state.pokemons
                      .slice(0, this.state.initialPokemonsNumber)
                      .map( (pokemon,key) => 
                          <Link key={key} style={{color:'black'}} to={`/${pokemon}`}> 
                              <PokemonBox key={key} name={ pokemon } /> 
                          </Link>
                      )   
                }
                { isApiLoaded && !error ? 
                    <LoadMorePokemons onClick={ () => this.LoadMorePokemons() } >
                        Load more pokemons 
                    </LoadMorePokemons> : null
                }
            </PokemonsContainer>
        </MainBox>
        )
    }  
}