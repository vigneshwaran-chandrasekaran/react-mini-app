import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import Header from './components/Header';
import Movie from './components/Movie';
import axios from './services/axios';
import SearchInfo from './components/SearchInfo';
import Loader from './components/Loader';
import Shimmer from './components/Shimmer';
import NoMoviesFound from './components/NoMoviesFound';

const App = () => {

  const [loader, setLoader] = useState(false); // set top loader
  const [movies, setMovies] = useState([]); // set list of movies
  const [count, setCount] = useState(0); // set movie count info
  const [page, setPage] = useState(0); // set movie count info
  const [searchTerm, setSearchTerm] = useState('batman'); // to set search term
  const [searchedKey, setSearchedKey] = useState('batman'); // to set search term

  /**
   * will call first time when page loads, then when ever page changes
   */
  useEffect(() => {
    getMovies();
  }, [page]);


  /**
   * search keyword and get the results
   */
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

  /**
   *
   * when ever we search the movie, update the searched term with our local state key
   */
  const searchOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /**
   *
   * on movie search enter event handler, set searched keyword and inititate api call
   */
  const onSubmitHandle = (event) => {
    event.preventDefault();
    setSearchedKey(searchTerm);
    getMovies();
  };

  /**
   *
   * every time pagination button clicked this event will invoke
   */
  const pageOnChange = (pages) => {
    setPage(pages.selected);
  };

  /**
   * based on total count of movie this will return last page number in pagination
   */
  const lastPage = () => {
    return Math.ceil(count / 10);
  };

  /**
   * this section will return 3 main section
   * 1. on api call search time will return shimmer loader
   * 2. if we have valid results will retrun results section
   * 3. if there is no movie available for search keyword will return NoMovie error component
   */
  const showResults = () => {

    /**
     * Shimmer Loader
     */
    if (loader) {
      return (<Shimmer />);
    }

    if (count > 0 && movies) {
      /**
      * Result sectioin
      */
      return (
        <>
          <SearchInfo count={count} searchedKey={searchedKey} />
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
    /**
    * No Result sectioin
    */
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
