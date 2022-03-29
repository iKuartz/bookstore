const VERIFY = 'VERIFY';

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case VERIFY:
      console.log(action);
      return 'Under construction';
    default:
      return state;
  }
}

export const statusCategories = () => ({ type: VERIFY });
