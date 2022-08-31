import React,  {Fragment, useState}from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Spin from './components/spinner/Spin';

function App() {

  const [movie , setMovies]= useState([])
  const [isLoading, setIsLoading] = useState(false)


async function fetchApiHandler(){
  setIsLoading(true)
 const response= await fetch("https://swapi.dev/api/films")
    const data= await response.json()

    const transData= data.results.map(mmovie=>{
      return {
        id : mmovie.episode_id,
        title:mmovie.title,
        openingText:mmovie.opening_crawl,
        releaseDate: mmovie.release_date

      }

    })
    setMovies(transData)
    setIsLoading(false)

  }
 


  return (
    <Fragment>
      <section>
        <button onClick={fetchApiHandler} >Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movie.length>0 && <MoviesList movies={movie} />}
       
       {isLoading && <Spin/>}
     
      </section>
    </Fragment>
  );      
}

export default App;
