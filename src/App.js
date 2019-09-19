import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import Header from './components/Header';
import Movie from './components/Movie';
import axios from './services/axios';
import SearchInfo from './components/SearchInfo';
import Loader from './components/Loader';
import Shimmer from './components/Shimmer';
import NoMoviesFound from './components/NoMoviesFound';
import ReactPaginate from 'react-paginate';

const App = () => {

  const [loader, setLoader] = useState(false); // set top loader
  const [movies, setMovies] = useState([]); // set list of movies
  const [count, setCount] = useState(0); // set movie count info
  const [page, setPage] = useState(0); // set movie count info
  const [searchTerm, setSearchTerm] = useState('batman'); // to set search term

  // will call first time when page loads, then when ever page changes
  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = () => {
    setLoader(true);
    axios.get(`?i=tt3896198&apikey=fa281222&s=${searchTerm}&page=${page + 1}`)
      .then((response) => {
        // handle success
        setMovies(response.data.Search);
        setCount(response.data.totalResults);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // to increase curiosity for users
        setTimeout(() => {
          setLoader(false);
        }, 1000);
        // always executed
      });
  };

  const searchOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();
    getMovies();
  };

  const pageOnChange = (pages) => {
    setPage(pages.selected);
  };

  const lastPage = () => {
    return Math.ceil(count / 10);
  };

  const showResults = () => {
    if (loader) {
      return (<Shimmer />);
    }

    if (count > 0 && movies) {
      return (
        <>
          <SearchInfo count={count} searchTerm={searchTerm} />
          <section className='container-fluid'>
            <div className='row'>
              {movies && movies.map((movie, i) => <Movie key={i} {...movie} />)}
            </div>
          </section>
          <div id="react-paginate" className='d-flex justify-content-center'>
            <ReactPaginate
              pageLinkClassName='btn btn-info'
              pageRangeDisplayed={4}
              initialPage={1}
              disableInitialCallback={true}
              marginPagesDisplayed={3}
              pageCount={lastPage()}
              onPageChange={pageOnChange} />
          </div>
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
