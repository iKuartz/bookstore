import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { genre, title, author } = props;

  return (
    <li className="li-generated-book">
      <div className="book-header">
        <span className="span-genre">{genre}</span>
        <h3 className="h3-title">{title}</h3>
        <p className="p-author">{author}</p>
        <div className="book-header-buttons">
          <button className="Comments" type="button">
            Add
          </button>
          <button className="Comments" type="button">
            Remove
          </button>
          <button className="Comments" type="button">
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
