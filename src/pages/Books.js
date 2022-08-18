import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import BookData from '../components/BookData';
import Navbar from '../components/Navbar';

import {
  selectBooks,
  getStatus,
  getError,
  fetchBooks,
} from '../redux/books/booksCrud';

const Books = () => {
  const dispatch = useDispatch();

  const booklist = useSelector(selectBooks);
  const booksStatus = useSelector(getStatus);
  const error = useSelector(getError);
  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  let section;

  if (booksStatus === 'loading') {
    section = <p>Loading...</p>;
  } else if (booksStatus === 'done') {
    const keys = Object.keys(booklist[0]);
    const library = [];
    keys.forEach((element) => {
      library.push({
        id: element,
        author: booklist[0][element][0].author,
        title: booklist[0][element][0].title,
      });
    });
    section = library.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        id={book.id}
      />
    ));
  } else if (booksStatus === 'failed') {
    section = <p>{error}</p>;
  }

  return (
    <>
      <Navbar />
      <h1>Book List</h1>
      {section}
      <BookData />
    </>
  );
};

export default Books;
