import React, {Component} from 'react';
import { Menu } from '../pokemonDetailsView/Components/Menu';
import { MainBox, 
        PokemonWrapper, 
        NameWrapper, 
        TypesWrapper,
        PokemonId,
        StatsWrapper,
        PokemonStatName,
        PokemonStatValue } from './pokemonDetails.s';

const typeIconStyle = {
    height: '60px', width: '60px',
    float: 'left',
    cursor: 'pointer'
}

const statsBoxStyle = { 
    marginBottom:'50px',
    width:'100%',
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


    componentDidMount() {
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
          this.setState({ error: error, pokemonLoaded: true })
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
                    <div> 
                        
                        <NameWrapper>
                          <h1> 
                            { pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1).toLowerCase() } 
                          </h1>
                          <PokemonId> #{ pokemonDetails.id } </PokemonId>
                        </NameWrapper>
                        
                        <PokemonWrapper>
                            <img src={`https://img.pokemondb.net/artwork/${pokemonDetails.name}.jpg`} 
                                alt='pokemonImage' style={{ height:'100%',width:'100%' }}/>
                        
                            <TypesWrapper>  
                                <div style={{ float:'left',padding: '10px 20px 0 100px' }}> Type </div>
                                {  
                                    pokemonDetails.types.map( (type,key) => 
                                        <img title={`${type.type.name}`} key={key} 
                                            src={ require(`../img/typesIcons/${type.type.name}.png`) }
                                            style={ typeIconStyle } 
                                        /> 
                                    )
                                }
                            </TypesWrapper>  

                        </PokemonWrapper>
                        <StatsWrapper>
                            { 
                                pokemonDetails.stats.map( (stat,key) =>
                                    <div key={key} style={ statsBoxStyle } > 
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