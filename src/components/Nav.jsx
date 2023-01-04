import React from "react"
import SearchBar from "./SearchBar"
import styles from "./Nav.module.css"
import {Link} from "react-router-dom"


export default function NavBar (props){
    return <div className= {styles.container}>
         <Link to="/">Home</Link>
         <Link to="/About">About</Link>       
        <SearchBar onSearch={props.onSearch} />
    </div>
}