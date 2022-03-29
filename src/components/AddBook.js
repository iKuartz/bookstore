import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const CATEGORIES = ['Poetry', 'Drama', 'Romances', 'Technical'];
const AddBook = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className="wrapForm" onSubmit={submitBookToStore}>
      <h2 className="title">Add a Book</h2>
      <div className="Lesson-Panel ">
        <input
          className="inputTitle"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
