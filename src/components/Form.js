import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../redux/books/books';

const categories = [
  'Poetry',
  'Fantasy',
  'Technical',
  'Comedy',
  'Romance',
];

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const displayErrorMessage = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg('');
    }, 2000);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setTitle('');
      displayErrorMessage('Please input a title');
      return;
    }
    if (author.trim().length === 0) {
      setAuthor('');
      displayErrorMessage('Please input an author');
      return;
    }
    if (category === '') {
      displayErrorMessage('Please select a Category');
      return;
    }
    const newBook = {
      item_id: Date.now(),
      title,
      author,
      category,
    };
    dispatch(addBookToAPI(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Please add a book</h2>
      <form className="flex flex-wrap" onSubmit={submitBookToStore}>
        <input
          className="form-title"
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
        <input
          className="form-author"
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={onAuthorChange}
        />
        <div className="form-book-category">
          <select
            className="select"
            default
            name="category"
            value={category}
            onChange={onCategoryChange}
          >
            <option value="">Category</option>
            {categories.sort().map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className="add-btn flex" type="submit">
          ADD BOOK
        </button>
      </form>
      <p className="error">{errorMsg}</p>
    </div>
  );
};

export default Form;
