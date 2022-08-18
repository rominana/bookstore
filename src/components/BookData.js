import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksCrud';

const BookData = () => {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <h1>Add a new book</h1>
      <input type="text" name="title" value={titleInput} onInput={(e) => setTitleInput(e.target.value)} />
      <input type="text" name="author" value={authorInput} onInput={(e) => setAuthorInput(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addBook({
            item_id: uuidv4(), title: titleInput, author: authorInput, category: 'Fiction',
          }));
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
