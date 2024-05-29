import React, { useEffect } from 'react';
import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {    
    const[searchField, setSearchField] = useState('');
    const[monsters, setMonsters] = useState([]);
    const[filteredMonsters,setFilteredMonsters] = useState([])
    //console.log(searchField);

    const handleChange = (e)=>{
        //const {monsters} = this.state;
        const searchFieldString = e.target.value.toLocaleLowerCase();                     
        setSearchField(searchFieldString);        
        //const searchResults = monsters.filter((character)=>character.name.toLowerCase().includes(searchField))
        //this.setState(() =>{return ({filteredMonsters:searchResults})})
      };
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {setMonsters(users);setFilteredMonsters(users)})
      },[]);
      
      useEffect(()=>{
        const searchResults = monsters.filter((character)=>character.name.toLowerCase().includes(searchField))
        setFilteredMonsters(searchResults)
      },[ searchField]);

  return (
    <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <input 
            className="search-box" 
            type="search" 
            placeholder="search monster"
            onChange={handleChange}/>  
        <CardList filteredMosters={filteredMonsters}/>
    </div>
  )
}

export default App
