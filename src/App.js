import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Movie from './components/Movie';
import axios from './services/axios';
import SearchInfo from './components/SearchInfo';
import Loader from './components/Loader';
import NoMoviesFound from './components/NoMoviesFound';

function App() {

  const [loader, setLoader] = useState(false); // set top loader
  const [movies, setMovies] = useState([]); // set list of movies
  const [count, setCount] = useState(''); // set movie count info
  const [searchTerm, setSearchTerm] = useState('batman');

  // will call first time when page loads
  useEffect(() => {
    console.log('init');
    getMovies(searchTerm);
  }, []);

  const getMovies = (searchTerm) => {
    setLoader(true);
    axios.get(`?i=tt3896198&apikey=fa281222&s=${searchTerm}&page=3`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setMovies(response.data.Search);
        setCount(response.data.totalResults);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
        // always executed
      });
  };

  const searchOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();
    getMovies(searchTerm);
  };

  const showResults = () => {
    if (count > 0 && movies) {
      return (
        <>
          <SearchInfo count={count} searchTerm={searchTerm} />
          <section className='container-fluid'>
            <div className='row'>
              {movies && movies.map((movie, i) => <Movie key={i} {...movie} />)}
            </div>
          </section>
          <Pagination />
        </>
      )
    }
    return (<NoMoviesFound />)
  }

  return (
    <div className="App">
      <Loader loader={loader} />
      <Header
        onSubmitHandle={onSubmitHandle}
        searchTerm={searchTerm}
        searchOnChange={searchOnChange} />
      {showResults()}
    </div>
  );
}

export default App;
