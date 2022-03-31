import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';

const Book = (props) => {
  const {
    category, title, author, id,
  } = props;
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <li className="Lesson-Panel">
      <div className="book-header">
        <span className="School-of">
          {category}
        </span>
        <h3 className="Title">{title}</h3>
        <p className="Suzanne-Collins">{author}</p>
        <div className="book-header-buttons">
          <button className="Comments" type="button">Comments</button>
          <button onClick={removeBookFromStore} className="Comments" type="button">Remove</button>
          <button className="Comments" type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
