import React from 'react';
import {Component} from 'react';
import { Menu } from './Components/Menu.jsx';
import { VisiblePokemonContainer } from './Components/MainContainer.jsx';
import { Footer } from './Components/Footer.jsx';


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