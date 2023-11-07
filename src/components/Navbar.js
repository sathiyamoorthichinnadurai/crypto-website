import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar({setsearch}) {
  return (
    <>
    <Link to='/'>
    <div className='navbar'>
       <FaCoins className='icon'/>
       <h1>Coin <span className='purple'>Search</span></h1>
       <input src='teaxt' placeholder='Search Coins....' onChange={(e)=>setsearch(e.target.value)}/>
    </div>
    </Link>
    </>
  )
}

export default Navbar