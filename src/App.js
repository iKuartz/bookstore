import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import NavBar from './components/Navigation';
import Books from './components/Books';
import './components/App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
