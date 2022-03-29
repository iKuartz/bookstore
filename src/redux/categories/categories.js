const VERIFY = 'VERIFY';

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case VERIFY:
      return 'Under construction';
    default:
      return state;
  }
}

export const statusCategories = () => ({ type: VERIFY });
