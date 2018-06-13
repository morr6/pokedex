import React, {Component} from 'react';
import { Menu } from '../pokemonDetailsView/Components/Menu';
import { MainBox,  
        NameWrapper, 
        PokemonId,
        PokemonImageWrapper,
        TypesWrapper,
        AbilitiesWrapper,
        CenterBox,
        StatsWrapper,
        PokemonStatName,
        PokemonStatValue,  } from './pokemonDetails.s';
import { PokemonNotFound } from './Components/PokemonNotFound'

const typeIconStyle = {
    height: '60px', width: '60px',
    float: 'left',
    cursor: 'pointer'
}

const statsBoxStyle = { 
    marginBottom:'50px',
    width:'100%',
}
const pokemonImageStyle = { 
    height:'100%',
    width:'100%' 
}

export class pokemonDetailsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonDetails: [],
            pokemonLoaded: false,
            error: null,
            statHovered: false
        }
    }


    componentWillMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonName}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                pokemonDetails: result,
                pokemonLoaded: true
            })
        },
        (error) => {
          this.setState({ 
              error: error, 
              pokemonLoaded: true })
          }
        ) 
    }

    render() {
        console.log(this.state.pokemonDetails)
        const { pokemonDetails, pokemonLoaded, error } = this.state;
        return (
            <div>
                <Menu />          
                <MainBox> 

                    { 
                        error ? <div> Error: { error.message } </div> : 
                        !pokemonLoaded ? <div> Loading... </div> :
                        !pokemonDetails.name ? <PokemonNotFound name={ this.props.match.params.pokemonName } /> : 
                        <div> 
                            
                            <NameWrapper>
                            <h1> 
                                { pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1).toLowerCase() } 
                            </h1>
                            <PokemonId> #{ pokemonDetails.id } </PokemonId>
                            </NameWrapper>
                            
                            <PokemonImageWrapper>
                                <img src={`https://img.pokemondb.net/artwork/${pokemonDetails.name}.jpg`} 
                                    alt='pokemonImage' style={ pokemonImageStyle }/>
                            </PokemonImageWrapper>

                            <CenterBox>
                                <TypesWrapper>  
                                    <span style={{ float:'left', margin:'10px 20px 0 0'}}> Type </span>
                                    {  
                                        pokemonDetails.types.map( (type,key) => 
                                            <img title={`${type.type.name}`} key={key} 
                                                src={ require(`../img/typesIcons/${type.type.name}.png`) }
                                                style={ typeIconStyle } 
                                            /> 
                                        )
                                    }
                                </TypesWrapper>  

                                <AbilitiesWrapper>   
                                    <h1> Abilities </h1>
                                    {
                                        pokemonDetails.abilities.map( (ability,key) =>
                                            <div key={key}>
                                                { ability.ability.name }
                                            </div>
                                        )
                                    }
                                </AbilitiesWrapper> 
                            </CenterBox>

                            <StatsWrapper>
                                { 
                                    pokemonDetails.stats.map( (stat,key) =>
                                        <div key={key} style={ statsBoxStyle }> 
                                            <PokemonStatName> { stat.stat.name }: </PokemonStatName>
                                            <PokemonStatValue> { stat.base_stat } </PokemonStatValue>
                                        </div>
                                    )
                                }
                            </StatsWrapper> 

                        </div>
                    }        

                </MainBox>  

                
            </div>
        )
    }    
}