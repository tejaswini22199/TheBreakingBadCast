import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CharacterGrid from './Characters/CharacterGrid'
import Header from './Components/Header'
import Searchbar from './Components/Searchbar'
const App=()=> {
const [items,setitems]=useState([]);
const [query,setQuery]=useState([]);
useEffect(()=>
{
  const fetchItems=async()=>
  {
  
     const result=await axios(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
   
    setitems(result.data);
   
    
    // setQuote(result.data);
  }
  fetchItems();
},[query])

  return (
    <div>
      <Header/>
    <div className="middle">  
      <Searchbar getQuery={(q)=>setQuery(q)}/>
      </div>
      <CharacterGrid items={items}/>
  </div>
  );
}

export default App;