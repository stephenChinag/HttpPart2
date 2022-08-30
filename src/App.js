import React,  {Fragment, useState}from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {


  const[movies ,setMovies]=useState([])


  function fetchAPIHandler () {
  fetch("https://swapi.dev/api/films").then(response=>{
   return response.json()}).then(data=>{

    const transFormoMovies= data.results.map(transMovie => {
     return { 
      id:transMovie.episode_id,
      title : transMovie.title,
      openingText: transMovie.opening_crawl,
      releaseDate: transMovie.release_date
    }
    })
    setMovies(transFormoMovies);
   })
  }


  return (
    <Fragment>
      <section>
        <button onClick={fetchAPIHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </Fragment>
  );      
}

export default App;
