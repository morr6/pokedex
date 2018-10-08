import React from 'react';
import {Component} from 'react';
import { MenuBox, 
        MenuButton, 
        ButtonsBox, 
        SearchInput,
        SearchWrapper} from './Menu.s';
import SearchIcon from '../../../../../node_modules/react-material-icons/icons/action/search';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const searchStyle = {
    height:'20px',
    color:'black',
    margin:'2.5px 0 0 5px',
    borderRight:'1px solid black',
    float:'left',
}


export class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeMenuStyle: false,
            searchHidden: true,
            searchValue: null
        }
    }


    componentWillMount() {
        window.addEventListener( 'scroll', () => this.handleScroll() )
    }
    
    handleScroll() { 
        let supportPageOffset = window.pageXOffset !== undefined;
          let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
          let scroll = {    
             y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
          };
          
        if ( window.location.pathname === '/pokedex' ) {
            this.setState({ changeMenuStyle: scroll.y > 350 ? true : false })
            setTimeout( () => this.setState({ searchHidden: scroll.y > 350 ? false : true }),500 )
        }
          
    }

    searchSubmit(event) {
        event.preventDefault(event);
        window.location.pathname = `/${ this.state.searchValue.toLowerCase() }`
    }
      
    scrollToContact() {
        scroll.scrollToBottom({
            duration: 1500,
        });
    }
    scrollToTop() {
        scroll.scrollToTop({
            duration: 1000
        })
    }

    scrollToPokemonList() {
        scroll.scrollTo(500)
    }


    render() {
        return (
            <MenuBox scrolled={ this.state.changeMenuStyle } >
                <ButtonsBox scrolled={ this.state.changeMenuStyle } >
                    <Link to={'/pokedex'} ><MenuButton onClick={ () => this.scrollToPokemonList() } > Pokemons list </MenuButton> </Link>
                    <Link to={`/pokedex/${ Math.round(Math.random() * 806) }`} > <MenuButton> Random pokemon </MenuButton> </Link>
                    <MenuButton onClick={ () => this.scrollToContact() }> Contact </MenuButton>
                </ButtonsBox>

                { this.state.changeMenuStyle === true &&
                  <form onSubmit={ (event) => this.searchSubmit(event) } > 
                    <SearchWrapper hidden={ this.state.searchHidden  }>
                        <SearchIcon style={ searchStyle } />
                        <SearchInput onChange={ (event) => this.setState({ 
                            searchValue: event.target.value }) }
                            placeholder='Search for pokemon...' />
                    </SearchWrapper>
                  </form>
                }
                
            </MenuBox>
        )
    }
}