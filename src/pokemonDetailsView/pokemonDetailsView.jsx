import React, {Component} from 'react';
import { Menu } from '../pokemonDetailsView/Components/Menu';
import { PokemonDetailsBox } from './pokemonDetails.s'

export class pokemonDetailsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonName: '',

        }
    }

    componentWillMount() {
        this.setState({ pokemonName: this.props.match.params.pokemonName })
    }

    render() {
        return (
            <div>
                <Menu />          
                <PokemonDetailsBox>
                    { this.state.pokemonName }
                </PokemonDetailsBox>    
            </div>
        )
    }
}