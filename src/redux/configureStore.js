import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { getBooksFromAPI } from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({ booksReducer, categoriesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getBooksFromAPI());

export default store;
