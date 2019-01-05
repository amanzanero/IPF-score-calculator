import React, { Component } from 'react';

import ButtonAppBar from './components/Navbar';
import HomePage from './pages/homepage/homepage';

class App extends Component {
  render() {
    return (
      <div id="app">
        <ButtonAppBar/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
