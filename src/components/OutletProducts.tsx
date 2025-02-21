import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/outlet-products.css';

import { posData } from '../data';

const OutletProducts = () =>{

  return (
    <div>
      <h1>Outlet Products</h1>      <div className='outlet-products-container'>
        {posData.map((item, index) => (
          <div className='outlet-products-card' key={index}>
            <div className='card-header'>
                <h3>{item.name}</h3>
                <p>&#10084;&#65039;</p>
            </div>
            <Link to={`/outlet-product/${item.id}`}><img src='/assets/nevea.jpg' alt={item.name} /></Link>
            <div className='card-footer'>
             <p>&#8358;{item.unitPrice}</p>
              <button className='select-item'>Select Item</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OutletProducts;