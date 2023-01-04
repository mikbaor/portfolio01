import styles from "./card.module.css"
import React from "react";
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
      <Link to={`/detail/${props.detailId}`}>
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
         <button onClick={props.onClose}>X</button>
         </div>         
         <h2>{props.name}</h2>
         <img className={styles.imagen} src={props.image} alt="" /> 
         <div className={styles.data}>
         <h3>{props.specie}</h3>
         <h3>{props.gender}</h3>
         </div>
         
         
      </div>
      </Link>
      
   );
}
