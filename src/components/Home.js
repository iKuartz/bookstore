import BookList from './BookList';
import Form from './Form';
import './Home.scss';

const BooksContainer = () => (
  <section className="booklist flex">
    <BookList />
    <Form />
  </section>
);

export default BooksContainer;
