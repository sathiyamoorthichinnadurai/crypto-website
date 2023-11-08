import React from 'react'
import Coinitem from './Coinitem'
import './coins.css'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'

function Coins({coins,Search}) {
  return (
    <>
    <div className='container'>
     <div>
        <div className='heading'>
            <p>#</p>
            <p className='coin-name'>coin</p>
            <p>Price</p>
            <p>24 Change</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>MKT Cape</p>
            

        </div>
    {coins.filter((currency)=>currency.name.toLowerCase().includes(Search.toLowerCase())).map((coins,)=>{
            return(
                <Link to={`/coin/${coins.id}`} element={<Coin/>} >
                <Coinitem coins={coins} key={coins.id}/>
                </Link>
            )
        })

    }
        
     </div>
        
    </div>
    </>
  )
}

export default Coins