import React from 'react';
import styles from './css/cats.module.css';

const Cats = (props) => (

    
    <li>
        <img className={styles.img}
        src={props.cat.snippet.thumbnails.medium.url} 
        alt="video thumbnail"></img>
    <div className={styles.info}>
        <p className={styles.title}> {props.cat.snippet.title} </p>
        <div className={styles.channelandtime}>
        <p className={styles.channelId}> {props.cat.snippet.channelTitle} </p>
        <p className={styles.publishTime}> {props.cat.snippet.publishTime} </p>
        </div>
    </div>
    
    </li>

)

export default Cats;