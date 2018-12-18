import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from '../components/Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonAppBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
