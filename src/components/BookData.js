import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const BookData = () => {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <h2>Add new book</h2>
      <input type="text" name="title" value={titleInput} onInput={(e) => setTitleInput(e.target.value)} />
      <input type="text" name="author" value={authorInput} onInput={(e) => setAuthorInput(e.target.value)} />
      <button
        onClick={() => {
          dispatch(createBook({ title: titleInput, author: authorInput, id: uuidv4() }));
          setTitleInput('');
          setAuthorInput('');
        }}
        type="submit"
      >
        Submit
      </button>
    </>
  );
};

export default BookData;
