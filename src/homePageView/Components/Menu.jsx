import React from 'react';
import {Component} from 'react';
import logo from '../../img/pokelogo.png';
import { MenuBox, 
        MenuButton, 
        ButtonsBox, 
        Logo, 
        LogoWrapper, 
        SearchInput,
        SearchWrapper} from '../ComponentsStyles/Menu.s';
import SearchIcon from '../../../node_modules/react-material-icons/icons/action/search';
import { Link } from 'react-router-dom';

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
            mouseOverMenuButton: false,
            changeMenuStyle: false,
            searchHidden: true,
            searchValue: null
        }
    }

    mouseOver() {
        this.setState({ mouseOverMenuButton:true })
    }
    mouseOut() {
        this.setState({ mouseOverMenuButton:false })
    }
    componentDidMount() {
        window.addEventListener( 'scroll', () => this.handleScroll() )
    }
    handleScroll() { 
        let supportPageOffset = window.pageXOffset !== undefined;
          let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
          let scroll = {
             x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
             y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
          };
      
        this.setState({ changeMenuStyle: scroll.y > 700 ? true : false })
        setTimeout( () => this.setState({ searchHidden: scroll.y > 700 ? false : true }),300 )
          
    }

    searchSubmit(event) {
        event.preventDefault(event);
        window.location.pathname = `/${ this.state.searchValue.toLowerCase() }`
    }
      

    render() {
        console.log(this.state.searchValue)
        return (
            <MenuBox scrolled={ this.state.changeMenuStyle } >
                <LogoWrapper> <Logo src={logo} alt='logo' /> </LogoWrapper>
                <ButtonsBox scrolled={ this.state.changeMenuStyle } >
                    <Link to={'/'} ><MenuButton> Home </MenuButton> </Link>
                    <MenuButton> Sort </MenuButton>
                    <MenuButton> Coś </MenuButton>
                    <MenuButton> Contact </MenuButton>
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