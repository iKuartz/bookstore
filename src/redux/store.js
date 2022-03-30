import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { getBooksFromAPI } from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(getBooksFromAPI());

export default store;
