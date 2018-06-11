import React from 'react';
import {Component} from 'react';
import { Menu } from './Components/Menu.jsx';
import { MainContainer } from './Components/MainContainer.jsx';
import { Footer } from './Components/Footer.jsx';


export class homePageView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            pokemons: [],
        }
    }
    
    render() {
      return (
        <div>
          <Menu/>
          <MainContainer pokemons={ this.state.pokemons }/> 
          <Footer />           
        </div>
      );
    }
}