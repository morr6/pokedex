import React, {Component} from 'react';
import { DetailsMenu } from './Components/DetailsMenu/DetailsMenu';
import { MainBox,  
        NameWrapper, 
        PokemonId,
        PokemonImageWrapper,
        TypesWrapper,
        AbilitiesWrapper,
        AbilitiesTitle,
        CenterBox,
        StatsWrapper,
        PokemonStatName,
        PokemonStatValue,
        StatsBox,
        TypeIcon  } from './pokemonDetails.s';
import { DetailsFooter } from './Components/DetailsFooter/DetailsFooter'
import { PokemonNotFound } from './Components/PokemonNotFound/PokemonNotFound';
import { setPokemonDetails, areDetailsLoading } from '../../pokemon/actions/pokemonActionsList';
import { FetchErrorMessage } from '../homePageView/Components/FetchErrorMessage/FetchErrorMessage';
import { LoadingMessage } from '../homePageView/Components/LoadingMessage/LoadingMessage'
import { connect } from 'react-redux';
import { PokemonApi } from '../../pokemon/api/pokemonApi'
 
class pokemonDetailsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            contactIsActive: false,
        }
    }


    componentDidMount() {
        
        this.props.areDetailsLoading()

        PokemonApi.fetchPokemon( this.props.match.params.pokemonName )
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
                            
                                { 
                                    this.props.pokemonDetails.name.charAt(0).toUpperCase() + 
                                    this.props.pokemonDetails.name.slice(1).toLowerCase() 
                                } 
                            
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

                                <AbilitiesTitle>
                                    Abilities
                                </AbilitiesTitle>

                                <AbilitiesWrapper>
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