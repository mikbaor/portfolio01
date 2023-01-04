import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/Nav'
import { useState } from 'react'
import characters from "./data.js"
import About from './components/About'
import Detail from './components/detail/detail'
import { Routes, Route } from 'react-router-dom'


function App () {


const [characters, setCharacters] = useState([])

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

const onClose = (id) => {
  setCharacters(characters.filter((char)=>{
      return  char.id !== id
  }))
}


  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <NavBar onSearch={onSearch}/>  
      <Routes>
          <Route path="/portfolio01" element={<Cards characters={characters} onclose = {onClose} />}/>
          <Route path="/portfolio01/About" element={<About/>}/>
          <Route path="/portfolio01/detail/:detailId" element={<Detail/>}/>

      </Routes>
         
     
     
    </div>
  )
}

export default App
