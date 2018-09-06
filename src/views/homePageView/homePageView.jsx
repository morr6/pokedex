import React from 'react';
import {Component} from 'react';
import { Menu } from './Components/Menu/Menu.jsx';
import { VisiblePokemonContainer } from './Components/MainContainer/MainContainer.jsx';
import { Footer } from './Components/Footer/Footer.jsx';


export class homePageView extends Component {
    
    render() {
      return (
        <div>
          <Menu />
          <VisiblePokemonContainer />
          <Footer />           
        </div>
      );
    }

}