import React from "react";
import { useState } from "react";
import styles from "./serchBarstyle.module.css"

export default function SearchBar(props) {

const [id, setid] = useState("");
const handleChange = e => { 
   const {value} =  e.target
   setid(value)
}

   return (
      <div className={styles.container}>
          <input type='search' name="search" id="" onChange={handleChange}/>
      <button onClick={()=>{props.onSearch(id)}}>Agregar</button> 
      </div>
   );
}


