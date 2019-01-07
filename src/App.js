import React, { Component } from 'react';
import ButtonAppBar from './components/Navbar';
import HomePage from './pages/homepage/homepage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';

class App extends Component {
  render() {
    return (
      <div id="app">
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar/>
          <HomePage/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
