require('normalize.css');
require('styles/App.css');

import Quiz from './Quiz';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <Quiz books={['b1','b2','b3']} />
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
