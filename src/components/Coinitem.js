import React from 'react'
import './coins.css'

function Coinitem({ coins }) {
  return (
    <>

     <div className='coins-row'>
        <p>{coins.market_cap_rank}</p>
        <div className='img-symbol' >
          <img src={coins.image} alt={coins.id} />
          <p>{coins.symbol.toUpperCase()}</p>
        </div>
        <p>${coins.current_price.toLocaleString()}</p>
        <p>{coins.market_cap_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>{coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${coins.market_cap.toLocaleString()}</p>
      </div>

    </>
  )
}

export default Coinitem