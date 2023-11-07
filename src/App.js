import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import './index.css'

function App() {
  const [coins,setcoins]=useState([]) 
  const [Search,setsearch]=useState('')
  const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en`
  useEffect(()=>{
    axios.get(url)
    .then((response)=>{
      setcoins(response.data)
      //console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  },[url])
  
  return (
    
   <>
      <Navbar setsearch={setsearch}/>
    <Routes>
      <Route path='/' element={<Coins coins={coins} Search={Search}/>}/>
      <Route path='/coin' element={<Coin/>}>
        <Route path=':coinid' element={<Coin/>}/>
      </Route>
      
    </Routes>
   </>
  );
}

export default App;
