import React from "react";
import styles from './Movies.module.css'


const Movie=(props)=>{
    return(
        <li className={styles.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openiningText}</p>

        </li>
    )
}
export default Movie;