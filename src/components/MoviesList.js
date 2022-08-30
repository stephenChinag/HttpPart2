import React from "react";
import Movies from "./Movies";
import styles from './MoviesList.module.css'


const MoviesList =(props)=>{
    
    return (
        <ul className={styles[`movies-list`]}>

            {props.movies.map((movie) =>(
                <Movies 
                key={movie.id}
                title ={movie.title}
                openingText={movie.openingText}
                releaseDate={movie.releaseDate}
                />
            ))}
        </ul>
    )
}

export default  MoviesList;