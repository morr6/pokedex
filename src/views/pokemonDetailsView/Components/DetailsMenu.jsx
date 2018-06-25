import React from 'react';
import {Component} from 'react';
import logo from '../../../assets/img/pokelogo.png';
import { MenuBox, 
        MenuButton, 
        ButtonsBox, 
        Logo, 
        LogoWrapper, 
        SearchInput,
        SearchWrapper} from '../ComponentsStyles/DetailsMenu.s';
import SearchIcon from '../../../../node_modules/react-material-icons/icons/action/search';
import { Link } from 'react-router-dom';

const searchStyle = {
    height:'20px',
    color:'black',
    margin:'2.5px 0 0 5px',
    borderRight:'1px solid black',
    float:'left',
}


export class DetailsMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: null,

        }
    }

    searchSubmit(event) {
        event.preventDefault(event);
        window.location.pathname = `/${ this.state.searchValue.toLowerCase() }`
    }
   
    findRandomPokemon() {
        window.location.pathname = `/${ Math.round(Math.random() * 806) }`
    }

    render() {
        return (
            <MenuBox>
                <LogoWrapper> <Logo src={logo} alt='logo' /> </LogoWrapper>
                <ButtonsBox scrolled={ this.state.changeMenuStyle } >

                    <Link to={'/'} ><MenuButton> Pokemons list </MenuButton> </Link>

                    <MenuButton onClick={ () => this.findRandomPokemon() }> 
                        Random pokemon 
                    </MenuButton>

                    <MenuButton onClick={ () => this.props.activeContact() } > Contact </MenuButton>

                </ButtonsBox>

            
            
                <form onSubmit={ (event) => this.searchSubmit(event) } > 
                    <SearchWrapper hidden={ this.state.searchHidden  }>
                        <SearchIcon style={ searchStyle } />
                        <SearchInput onChange={ (event) => this.setState({ 
                            searchValue: event.target.value }) }
                            placeholder='Search for pokemon...' />
                    </SearchWrapper>
                </form>
              
            </MenuBox>
        )
    }
}