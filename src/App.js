import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { homePageView } from './homePageView/homePageView.jsx';
import { pokemonDetailsView } from './pokemonDetailsView/pokemonDetailsView.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={ homePageView } />

              <Route exact path="/:pokemonName" component={ pokemonDetailsView } />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
