const VERIFY = 'bookstore/categories/status';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case VERIFY:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
