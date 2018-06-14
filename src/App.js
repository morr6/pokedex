import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { homePageView } from './homePageView/homePageView.jsx';
import { VisiblepokemonDetails } from './pokemonDetailsView/pokemonDetailsView.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={ homePageView } />

              <Route exact path="/:pokemonName" component={ VisiblepokemonDetails } />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
