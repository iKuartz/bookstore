/* eslint-disable prefer-template */
import { useSelector } from 'react-redux';
import Book from './Book';

const Booklist = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <ul className="flex">
      {bookList.map((item) => (
        <Book
          category={item.category}
          title={item.title}
          author={item.author}
          key={item.item_id}
          id={item.item_id}
          progress={Math.floor(Math.random() * 100) + 1 + '%'}
        />
      ))}
    </ul>
  );
};

export default Booklist;
