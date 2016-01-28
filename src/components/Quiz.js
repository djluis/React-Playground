require('normalize.css');

import React from 'react';
import Book from './Book'

class QuizComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {books: props.books};
  }
  update(){
  	this.setState({ books : this.state.books.push('b99') });
  }
  render() {
    return (
      <div>
      	{this.state.books.map(function(b){
      		return <Book title={b} />
      	})}
      </div>
    );
  }
}

QuizComponent.propTypes = { books : React.PropTypes.array}
QuizComponent.defaultProps = {};

export default QuizComponent;
