import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Movie from './components/Movie';
import axios from './services/axios';
import SearchInfo from './components/SearchInfo';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchInfo, setSearchInfo] = useState('');

  useEffect(() => {
    console.log('init');
    getMovies();
  }, []);

  function getMovies() {
    axios.get(`?i=tt3896198&apikey=fa281222&s=magic&page=3`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setMovies(response.data.Search);
        setSearchInfo(response.data.totalResults);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  return (
    <div className="App">
      <Header />
      <SearchInfo searchInfo={searchInfo} />
      <section className='container-fluid'>
        <div className='row'>
          {movies && movies.map((movie, i) => <Movie key={i} {...movie} />)}
        </div>
      </section>
      <Pagination />
    </div>
  );
}

export default App;
