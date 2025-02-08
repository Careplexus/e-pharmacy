import { Link } from 'react-router-dom';
import { Carousel, Services } from './Index';
import './css/home.css';

const Home = () => {

  return(
    <div className='home-container'>
      <div className='home-header'>
        <Carousel/>
      </div>

      <div>
        <Services />
      </div>
    </div>
  )
}

export default Home;