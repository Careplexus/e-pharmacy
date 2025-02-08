import './css/footer.css';
//import { footerLinks } from '../data';

const Footer = () => {
  return (
    <div className='footer-container'>
      <h2>Careplexus</h2>
      <div>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
        </ul>
        <p>Copyright &copy; 2024 Careplexus Pharmacy</p>
      </div>
      <div>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  )
}

export default Footer;