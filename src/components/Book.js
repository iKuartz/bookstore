import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';

const Book = (props) => {
  const {
    category, title, author, id, progress,
  } = props;
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <li className="book-container">
      <div className="book-header">
        <span className="book-header-category">{category}</span>
        <h3 className="book-header-title">{title}</h3>
        <p className="book-header-author">{author}</p>
        <div className="book-header-buttons flex">
          <button type="button">Comments</button>
          <button type="button" onClick={removeBookFromStore}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-data flex">
        <div className="book-progress flex">
          <div className="book-progress-bar">
            <div className="inner" />
            <div className="circle">
              <div className="bar left">
                <div className="progress" />
              </div>
              <div className="bar right">
                <div className="progress" />
              </div>
            </div>
          </div>
          <div className="book-progress-value">
            <h3 className="book-progress-value-progressage">{progress}</h3>
            <p className="book-progress-value-completed">Completed</p>
          </div>
        </div>
        <div className="book-chapter flex">
          <span className="book-chapter-title">CURRENT CHAPTER</span>
          <span className="book-chapter-current">
            Chapter-
            {progress}
          </span>
          <button className="book-chapter-update" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Book;
