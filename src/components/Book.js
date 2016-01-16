require('normalize.css');

import React from 'react';

class BookComponent extends React.Component {
  render() {
    return (
      <div><h4>{this.props.title}</h4></div>
    );
  }
}

BookComponent.defaultProps = {};

export default BookComponent;
