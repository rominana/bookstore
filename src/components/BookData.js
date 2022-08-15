import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNewBook } from '../redux/books/books';

const BookData = () => {
  const createBook = (title, author) => ({
    title,
    author,
    id: nanoid(),
  });

  const dispatch = useDispatch();

  const newBook = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    dispatch(addNewBook(createBook(title, author)));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <form onSubmit={newBook}>
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <button type="submit">Add book</button>
    </form>
  );
};

export default BookData;