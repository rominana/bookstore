import { useSelector } from 'react-redux';
import BookInput from '../components/BookInput';
import Book from '../components/Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <section>
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
          />
        ))}
      </ul>
      <BookInput />
    </section>
  );
};

export default BooksContainer;
