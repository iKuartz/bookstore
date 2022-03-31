import { useSelector, useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  return (
    <div className="books">
      <div className="booksList">
        <ul className="ul-books">
          {books.map((book) => (
            <div key={book.item_id} className="list-container-div">
              <li className="title-li">{book.title}</li>
              <li className="author-li">{book.author}</li>
              <span className="category-span">{book.category}</span>
              <div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => dispatch(removeBookFromAPI(book.item_id))}
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
