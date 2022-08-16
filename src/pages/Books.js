import React from 'react';
import Book from '../components/Book';
import BookData from '../components/BookData';

const Books = () => {
  const booklist = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
    },
  ];

  return (
    <>
      {booklist.map((book) => (<Book key={book.id} title={book.title} author={book.author} />))}
      <BookData />
    </>
  );
};

export default Books;
