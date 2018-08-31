import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { homePageView } from './views/homePageView/homePageView.jsx';
import { VisiblePokemonDetails } from './views/pokemonDetailsView/pokemonDetailsView.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <div>
              <Route exact path="/pokedex/" component={ homePageView } />

              <Route exact path="/:pokemonName" component={ VisiblePokemonDetails } />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
