import { Routes, Route } from 'react-router-dom';
import { Link, Header } from './App.styled';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import '../index.css';
export const App = () => {
  return (
    <div className="App">
      <Header>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
};
