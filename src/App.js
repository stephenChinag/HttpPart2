import React,  {Fragment, useState}from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movie , setMovies]= useState([])
 
const fetchApiHandler=()=>{
  fetch("https://swapi.dev/api/films").then(respone=>{
    return respone.json()

  }).then((data)=>{
    const transData= data.results.map(mmovie=>{
      return {
        id : mmovie.episode_id,
        title:mmovie.title,
        openingText:mmovie.opening_crawl,
        releaseDate: mmovie.release_date

      }

    })
    setMovies(transData)
  })
}

 


  return (
    <Fragment>
      <section>
        <button onClick={fetchApiHandler} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </Fragment>
  );      
}

export default App;
