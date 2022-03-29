import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  return (
    <div className="books">
      <div className="booksList">
        <ul className="ul-books">
          {books.map((book) => (
            <div key={uuidv4} className="list-container-div">
              <span className="category-span">{book.category}</span>
              <li className="title-li">{book.title}</li>
              <div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => dispatch(removeBook(book.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
