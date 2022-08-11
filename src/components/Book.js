import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;
  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
