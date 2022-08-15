import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { title, author, id } = props;

  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
