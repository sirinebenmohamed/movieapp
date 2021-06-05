import React, {useState} from 'react';
import './App.css';
import MoviesData from "./components/MoviesData";
import MoviesList from './components/MovieList/MovieList';
import AddMovie from './components/AddMovie/AddMovie';
import SearchMovie from './components/SearchMovie/SearchMovie';

function App() {
  const [moviesList, setMoviesList] = useState(MoviesData);
  const [searchByName, setSearchByName] = useState('');
  const [searchByRate, setSearchByRate] = useState(1);

  const addMovie = (x) => {
    setMoviesList([...moviesList,x])
  }

  return <div className="App">
  <SearchMovie setSearchByName={setSearchByName} 
    searchByRate={searchByRate}
    setSearchByRate={setSearchByRate}
  />
  <MoviesList moviesList={moviesList} searchByName={searchByName} searchByRate={searchByRate}/>
  {/* hhh */}
  <div style={{ display : 'flex', justifyContent: 'center' }}>
    <AddMovie addMovie={addMovie} />
  </div>
</div>

  
};

export default App;
