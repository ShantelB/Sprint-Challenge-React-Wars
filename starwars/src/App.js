import React, {useState, useEffect} from 'react';
import './App.css';
import { Alert } from 'reactstrap';
import axios from "axios";
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Declaring my State
  const [characters, setCharacters] = useState([])
  

// Adding my Side Effect
  useEffect(() => {
// Axios Call
    axios.get('https://swapi.py4e.com/api/people/')

    .then(response => {
        console.log(response.data)
        setCharacters(response.data.results)
    })
  
    .catch(error => {
        console.log(error)
    })
  },[])
  

  return (
    <div className="App">
      
      <h1 className="Header">Characters</h1>

      {/* Mapping through characters */}
      {characters.map(character =>(
         <Character character={character} />
      
      ))}
    
    </div>
  );
}

export default App;
