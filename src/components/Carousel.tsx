import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './css/carousel.css';
import { carouselData } from '../data';

const Carousel = () =>{

  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setSliderIndex((prev)=>(prev+1)%carouselData.length)
    }, 3000)
    
    return ()=>{
      clearInterval(interval)
    }
  }, [])
  
  return(
    <div className="carousel-container">
        {carouselData.map((item, index)=>(
      <div 
        key={index}
        className={`
        carousel-item
        ${sliderIndex === index ? 'active' : ''}
        `}
        style={{backgroundImage: `url(${item.image})`}}
        >
        <p>{item.description}</p>
        <div className='carousel-btn-wrapper'>
          <Link to='/outlet' className='btn btn-primary'>Skincare</Link>
          <Link to='/outlet' className='btn btn-secondary'>Supplements</Link>
        </div>
      </div>
        ))}
    </div>
  )
}

export default Carousel;