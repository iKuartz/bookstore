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
      displayErrorMessage('Please input title');
      return;
    }
    if (author.trim().length === 0) {
      setAuthor('');
      displayErrorMessage('Please input author');
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
      <h2 className="form-title">Add a Book</h2>
      <form onSubmit={submitBookToStore}>
        <input
          className="form-book-title"
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
        <input
          className="form-book-author"
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={onAuthorChange}
        />
        <select className="select" default name="category" value={category} onChange={onCategoryChange}>
          <option value="">
            Category
          </option>
          {categories.sort().map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="add-btn" type="submit">
          Add a Book
        </button>
      </form>
      <p>{errorMsg}</p>
    </div>
  );
};

export default Form;
