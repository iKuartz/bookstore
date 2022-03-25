import Book from './BookStructure';

const bookList = () => {
  const books = [
    {
      id: 1,
      category: 'Poetry',
      name: 'Magma',
      author: 'Graciliano Ramos',
    },
  ];

  return books.map((book) => (
    <Book
      genre={book.category}
      title={book.name}
      author={book.author}
      key={book.id}
    />
  ));
};

export default bookList;
