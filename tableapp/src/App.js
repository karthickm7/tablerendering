
import React ,{useEffect, useState} from 'react';
import BasicTable from './BasicTable';


function App() {

  const[data,setData]=useState([]);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => setData(json))
  },[]) 
  return(
    <>
      <h1>api</h1>    
      <BasicTable Data={data}/>
    </> 
      
  
)
};

export default App;