import React, {Component} from 'react';
import { DetailsMenu } from '../pokemonDetailsView/Components/DetailsMenu';
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
import { DetailsFooter } from './Components/DetailsFooter'
import { PokemonNotFound } from './Components/PokemonNotFound';
import { setPokemonDetails, areDetailsLoading } from '../../pokemon/actions/pokemonActionsList';
import { FetchErrorMessage } from '../homePageView/Components/FetchErrorMessage';
import { LoadingMessage } from '../homePageView/Components/LoadingMessage'
import { connect } from 'react-redux'

class pokemonDetailsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            contactIsActive: false,
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

    activeContact() {
        this.setState({ contactIsActive: !this.state.contactIsActive })
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                <DetailsMenu  activeContact={ () => this.activeContact() }  />          
                <MainBox> 

                    { 
                        error ? <FetchErrorMessage/> : 
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
                                                src={ require(`../../assets/img/typesIcons/${type.type.name}.png`) }
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
                    
                <DetailsFooter contactIsActive={ this.state.contactIsActive } />
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
export const VisiblePokemonDetails = connect(
    mapStateToProps,
    mapDispatchToProps
  )(pokemonDetailsView)