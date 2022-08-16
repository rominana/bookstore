import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/categories" exact element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
