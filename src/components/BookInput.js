import React from 'react';

class BookInput extends React.PureComponent {
  render() {
    return (
      <form>
        <input placeholder="Title" required />
        <input placeholder="Author" required />
        <button type="submit">Add new book</button>
      </form>
    );
  }
}

export default BookInput;
