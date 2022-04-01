import { useDispatch } from 'react-redux';
import { statusCategories } from '../redux/categories/categories';
import './Categories.scss';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <section className="categories-section">
      <h1 className="categories-progress">Coming Soon</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(statusCategories());
        }}
      >
        Check Status
      </button>
    </section>
  );
};

export default Categories;
