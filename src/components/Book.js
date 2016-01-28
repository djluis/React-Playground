require('normalize.css');

import React from 'react';

class BookComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {title: props.title};
  }
  render() {
    return (
      <div>
      	<h4>{this.props.title}</h4>
      </div>
    );
  }
}

BookComponent.propTypes = { books : React.PropTypes.string}
BookComponent.defaultProps = {};

export default BookComponent;
