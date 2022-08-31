import React,  {Fragment, useEffect, useState}from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Spin from './components/spinner/Spin';

function App() {

  const [movie , setMovies]= useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error ,setError]= useState(null)

  useEffect( ()=>{
    fetchApiHandler()
  }, []
  )

  

async function fetchApiHandler(){
  setIsLoading(true)
  setError(null)
  try{

    const response= await fetch("https://swapi.dev/api/films")
    if (!response.ok){
      throw new Error("something went wrong")
    }

    
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
   

  } catch(error){
    setError(error.message)
  }
  setIsLoading(false)
  }
 

  let content = <p> found no movies </p>
  if (movie.length>0){
    content= <MoviesList movies={movie} />
  }
  if (error){
    content =<p>console.error();</p>
  }
  if (isLoading){
    content=<Spin/>
  }


  return (
    <Fragment>
      <section>
        <button onClick={fetchApiHandler} >Fetch Movies</button>
      </section>
      <section> {content}</section>
    </Fragment>
  );      
}

export default App;
