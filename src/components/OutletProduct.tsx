import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/outlet-product.css';
import { posData } from '../data';

const OutletProduct = () =>{

  const { id } = useParams();
  const productID = Number(id)

  const findProduct = posData.find(product => product.id === productID)

  return(
    <div className='outlet-product-container'>
      {findProduct ? (
        <section className='outlet-product-wrapper'>
          <main className='outlet-product-main'>
            <img src='/assets/nevea.jpg' alt={findProduct.name} />
            <h2>{findProduct.name}</h2>
            <div className='outlet-product-fund'>
              <div>
                <p><strong>Price: &#8358;{findProduct.unitPrice}</strong></p>
              <p>Stock Qty:{findProduct.stockQty} </p>
              </div> 
              <button className='btn btn-yellow'>Purchase</button>
            </div>
            <hr />
            <p>Description: {findProduct.description}</p>
          </main>
          <div>      
        
            
          </div>
          
        </section>
      ) : (
      <p>Product not found</p>
      )}

    </div>
  )
}

export default OutletProduct;