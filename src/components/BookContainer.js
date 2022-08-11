import React from 'react';
import BookList from './BookList';
import BookInput from './BookInput';

class BookContainer extends React.PureComponent {
  render() {
    return (
      <section>
        <BookList />
        <BookInput />
      </section>
    );
  }
}

export default BookContainer;
