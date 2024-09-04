import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesDetails from './Pages/MoviesDetails';
import Navbar from './components/Navbar';
import Movies from './Pages/Movies';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Movies' element={<Movies />}/>
          <Route path='/MoviesDetails' element={<MoviesDetails />}>
            <Route path=':movieId' element={<MoviesDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
