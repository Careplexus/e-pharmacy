import { Link } from 'react-router-dom';
import './css/footer.css';
//import { footerLinks } from '../data';

const Footer = () => {
  return (
    <div className='footer-container'>
      <h2>Careplexus</h2>
      <div>
        <ul>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        <p>&copy; 2024 Careplexus Pharmacy</p>
      </div>
      <div className='footer-icons'>
        <i className='fa-brands fa-facebook'></i>
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-brands fa-instagram'></i>
      </div>
    </div>
  )
}

export default Footer;