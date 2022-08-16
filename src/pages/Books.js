import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import BookData from '../components/BookData';
import Navbar from '../components/Navbar';

const Books = () => {
  const booklist = useSelector((state) => state.books);
  return (
    <>
      <Navbar />
      <h1>Book List</h1>
      {booklist.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <BookData />
    </>
  );
};

export default Books;
