import React from 'react';
import {Component} from 'react';
import { Menu } from './Components/Menu.jsx';
import { MainContainer } from './Components/MainContainer.jsx';
import { Footer } from './Components/Footer.jsx';


export class homePageView extends Component {
    
    render() {
      return (
        <div>
          <Menu/>
          <MainContainer/> 
          <Footer />           
        </div>
      );
    }

}