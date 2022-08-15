import { useSelector } from 'react-redux';
import BookData from '../components/BookData';
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
      <BookData />
    </section>
  );
};

export default BooksContainer;
