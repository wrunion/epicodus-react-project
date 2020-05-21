import React from 'react';
import { connect } from 'react-redux';

function Bookshelf(props) {
  if (!props.books) {
    return (
      <h3>There are no books to display</h3>
    );
  }
  return (
    <div className="Bookshelf flex-container">
      <h3>Your Favorite Books Are:</h3>
      {props.books.map(book => 
        <div className="book">
          {book.title} by {book.author}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state
  }
}

export default connect(mapStateToProps)(Bookshelf);