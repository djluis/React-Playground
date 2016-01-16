require('normalize.css');

import React from 'react';
import Book from './Book'

class QuizComponent extends React.Component {
  constructor(){
  	return {books: this.props.books};
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

QuizComponent.defaultProps = {};

export default QuizComponent;
