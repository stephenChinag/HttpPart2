import React from "react";
import styles from './Movies.module.css'


const Movies=(props)=>{
    return(
        <li className={styles.movie}>
            <h2>{props.title}</h2>
            <p>{props.openingText}</p>
            <h3>{props.releaseDate}</h3>
           
        </li>
    )
}
export default Movies; 