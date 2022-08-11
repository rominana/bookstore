import React from 'react';
import Book from './Book';

class BookList extends React.PureComponent {
  render() {
    const books = [
      {
        title: 'Book 1',
        author: 'Author 1',
        id: '1',
      },
    ];

    return (
      <ul>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    );
  }
}

export default BookList;
