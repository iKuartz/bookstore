import BookList from './BookList';
import Form from './Form';
import './Home.scss';

const BooksContainer = () => (
  <section className="booklist">
    <BookList />
    <Form />
  </section>
);

export default BooksContainer;
