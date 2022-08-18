import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/categories" exact element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
