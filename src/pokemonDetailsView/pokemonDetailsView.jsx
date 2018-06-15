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
        PokemonStatValue,
        StatsBox,
        TypeIcon  } from './pokemonDetails.s';
import { PokemonNotFound } from './Components/PokemonNotFound';
import { setPokemonDetails, areDetailsLoading } from '../actions/pokemonActionsList';
import { fetchErrorMessage, FetchErrorMassage } from '../homePageView/Components/FetchErrorMessage';
import { LoadingMessage } from '../homePageView/Components/LoadingMessage'
import { connect } from 'react-redux'

class pokemonDetailsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        }
    }


    componentWillMount() {
        
        this.props.areDetailsLoading()

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonName}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.props.setPokemonDetails(result)
            this.props.areDetailsLoading()
        },
        (error) => {
          this.setState({ error })
          }
        ) 
    }


    render() {
        const { error } = this.state;
        return (
            <div>
                <Menu />          
                <MainBox> 

                    { 
                        error ? <FetchErrorMassage/> : 
                        this.props.detailsLoading ? <LoadingMessage /> :
                        !this.props.pokemonDetails.name ? <PokemonNotFound name={ this.props.match.params.pokemonName } /> : 
                        <div> 
                            
                            <NameWrapper>
                            <h1> 
                                { this.props.pokemonDetails.name.charAt(0).toUpperCase() + 
                                    this.props.pokemonDetails.name.slice(1).toLowerCase() } 
                            </h1>
                            <PokemonId> #{ this.props.pokemonDetails.id } </PokemonId>
                            </NameWrapper>
                            
                            <PokemonImageWrapper>
                                <img src={`https://img.pokemondb.net/artwork/${this.props.pokemonDetails.name}.jpg`} 
                                    alt='pokemonImage' style={{width:'100%',height:'100%'}}/>
                            </PokemonImageWrapper>

                            <CenterBox>
                                <TypesWrapper>  
                                    <span style={{ float:'left', margin:'10px 20px 0 0'}}> Type </span>
                                    {  
                                        this.props.pokemonDetails.types.map( (type,key) => 
                                            <TypeIcon title={`${type.type.name}`} key={key} 
                                                src={ require(`../img/typesIcons/${type.type.name}.png`) }
                                            /> 
                                        )
                                    }
                                </TypesWrapper>  

                                <AbilitiesWrapper>   
                                    <h1> Abilities </h1>
                                    {
                                        this.props.pokemonDetails.abilities.map( (ability,key) =>
                                            <div key={key}>
                                                { ability.ability.name }
                                            </div>
                                        )
                                    }
                                </AbilitiesWrapper> 
                            </CenterBox>

                            <StatsWrapper>
                                { 
                                    this.props.pokemonDetails.stats.map( (stat,key) =>
                                        <StatsBox key={key} > 
                                            <PokemonStatName> { stat.stat.name }: </PokemonStatName>
                                            <PokemonStatValue> { stat.base_stat } </PokemonStatValue>
                                        </StatsBox>
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

const mapStateToProps = state => ({
    pokemonDetails: state.pokemonDetails,
    detailsLoading: state.detailsLoading
})
const mapDispatchToProps = dispatch => ({
  setPokemonDetails: pokemonDetails => dispatch(setPokemonDetails(pokemonDetails)),
  areDetailsLoading: detailsLoading => dispatch(areDetailsLoading(detailsLoading))
})
export const VisiblepokemonDetails = connect(
    mapStateToProps,
    mapDispatchToProps
  )(pokemonDetailsView)