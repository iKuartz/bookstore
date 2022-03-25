import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import Books from './components/Books';
// import './components/App.css';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
